# Aufgabe 1
## 1. Rasterization

Rasterisation ist die abbildung von polygonen auf ein Pixelraster.
Diese technik stößt beim Rendern von Schatten und Partikeln an seine Grenzen.

## 2. Ray Casting

Das Darstellen der Pixel als Vektoren und bestimmung der Pixelwerte über Kollisionen dieser mit Polygonen.
Funktioniert gut für Abbildungen von 3-Dimensionalen polygonen auf ein Pixelraster, sehr schnell aber für shading und Partikel effekte nicht realistisch.

## 3. Ray Tracing

Das Darstellen der Pixel als Vektoren und das Bestimmen der Pixelwerte wie bei Ray Casting, nur das bei Kollisionen mit Flächen Reflektionen und Lichteinfall kein pixelwert direkt ermittelt wird, sondern durch rekursiv durch andere Strahlen der lichteinfall auf diese ebene bestimmt wird.
So kann auch indirekte Lichteinstrahlung realistisch realisiert werden.
Je nach detailgrad kommt etsteht hierbei schnell ein zu großer Rechenaufwand um Echtzeitanwendungen wie Spiele und animationen ohne Renderpipeline zu durchlaufen.