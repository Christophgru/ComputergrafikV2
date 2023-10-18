var canvas = document.getElementById('canvasElement');

function sgn(x)
{
    if (x > 0) return +1;
    if (x < 0) return -1;
    return 0;
}
function drawLine(xstart,ystart,xend,yend){
    {
        var context = canvas.getContext('2d');
        let x, y, t, dx, dy, incx, incy, pdx, pdy, ddx, ddy, deltaslowdirection, deltafastdirection, err;

        /* Entfernung in beiden Dimensionen berechnen */
        dx = xend - xstart;
        dy = yend - ystart;

        /* Vorzeichen des Inkrements bestimmen */
        incx = sgn(dx);
        incy = sgn(dy);
        if (dx < 0) dx = -dx;
        if (dy < 0) dy = -dy;

        /* feststellen, welche Entfernung größer ist */
        if (dx > dy)
        {
            /* x ist schnelle Richtung */
            pdx = incx; pdy = 0;    /* pd. ist Parallelschritt */
            ddx = incx; ddy = incy; /* dd. ist Diagonalschritt */
            deltaslowdirection = dy;
            deltafastdirection = dx;   /* Delta in langsamer Richtung, Delta in schneller Richtung */
        }
        else
        {
            /* y ist schnelle Richtung */
            pdx = 0;    pdy = incy; /* pd. ist Parallelschritt */
            ddx = incx; ddy = incy; /* dd. ist Diagonalschritt */
            deltaslowdirection = dx;   deltafastdirection = dy;   /* Delta in langsamer Richtung, Delta in schneller Richtung */
        }

        /* Initialisierungen vor Schleifenbeginn */
        x = xstart;
        y = ystart;
        err = deltafastdirection / 2;
        context.fillRect(x,y,1,1);

        console.log(deltaslowdirection);
        console.log(deltafastdirection);
        /* Pixel berechnen */
        for(t = 0; t < deltafastdirection; ++t) /* t zaehlt die Pixel, deltafastdirection ist Anzahl der Schritte */
        {
            /* Aktualisierung Fehlerterm */
            err =err- deltaslowdirection;
            console.log("x:"+x);
            console.log("y:"+y);
            console.log(err);
            console.log(ddx);
            console.log(ddy);
            console.log(pdx);
            console.log(pdy);
            if(err < 0)
            {
                /* Fehlerterm wieder positiv (>=0) machen */
                err =err+ deltafastdirection;
                /* Schritt in langsame Richtung, Diagonalschritt */
                x =x+ ddx;
                y =y+ ddy;
            }
            else
            {
                /* Schritt in schnelle Richtung, Parallelschritt */
                x =x+ pdx;
                y =y+ pdy;
            }
            context.beginPath()
            context.fillRect(x, y,1,1);
        }
    }

}
function getInputs(){
    var sx =document.getElementById("sx").value;
    var sy =document.getElementById("sy").value;
    var ex =document.getElementById("ex").value;
    var ey =document.getElementById("ey").value;

    drawLine(parseInt(sx),parseInt(sy),parseInt(ex),parseInt(ey));
    //*/
}


//Always check for properties and methods, to make sure your code doesn't break in other browsers.
var context = canvas.getContext('2d');
context.beginPath();
context.lineWidth=3;
context.strokeStyle="black";
context.moveTo(250,0);
context.lineTo(250,500);
context.stroke();//*/
context.moveTo(0,250);
context.lineTo(500,250);
context.stroke();
context.font= "20px Arial";
context.fillText("X",480,240);
context.fillText("Y",260,20);
