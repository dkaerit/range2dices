# range-to-dices

Aplicación que dada un rango de valores determina una posible combinación de dados, ignorando la probabilidad de gauss que supone sumar N dados frente a la probabilidad plana de un intervalo.

Supongamos que la expresión de una tirada (expresión que suma cada dado, moneda y un modificador) de esta manera:

(dados) ± (monedas) ± (modificador)

un ejemplo de tirada sería el siguiente: (2d4 + 1d6) - (2cx) + (5)
y si lo pasáramos a intervalo de los resultados que puede dar esa expresión, sería: 
```
min: (2+1) - (2) + (5) = 6
max: (2*4+1*6) - (0) + (5) = 19
Intervalo: [6,19]
```

pero si las monedas se sumasen en vez de restarse: (2d4 + 1d6) + (2cx) + (5)
```
min: (2+1) + (0) + (5) = 8
max: (2*4+1*6) + (2) + (5) = 21
Intervalo: [8,21]
```

De esto sacamos varias cosas:
- De la expresión, los elementos individuales como por ejemplo (2d6) los llamaremos componentes. El número/cantidad de ese elemento, en este caso "2", será el componente bajo, y el componente alto será la multiplicación de la cantidad por sus caras "2*6"
- Si se está sumando en la expresión (+2d6), entonces el componente alto se añade en el max y el componente bajo en el min, pero si se está restando (-2d6), el componente alto se resta en el min y el componente bajo en el max.
- El componente bajo de las monedas son siempre 0 y el numero/cantidad su componente alto, por ejemplo: 2cx son 0 en el bajo y 2 en el alto.
- los modificadores siempre añaden o sustraen la cantidad de modificador al min y al max

Esto es la teoría para calcular un intervalo dada una expresión de tirada de dados, monedas y modificadores, pero ¿Si hiciéramos el proceso inverso? Dado un intervalo, yo quiero obtener la expresión óptima, usando el menor número de dados y monedas posibles (el modificador da igual) para que se ajuste al intervalo dado. por ejemplo: Dado el intervalo [3,22] la expresión que le corresponde es 1d20+2

Datos a tener en cuenta:
- Añadir un modificador hace aumentar la misma cantidd el minimo y el máximo (pero sustraer un modificador restaría en ambos extremos)
- Añadir una moneda aumenta el valor del extremo max, y restar monedas resta del extremo min (sólo se puede restar o sumar monedas no se puede hacer una expresión donde aparezca algo como: (+ 2cx - 1cx)

