# formato-numerico.js

Función en javascript que le da formato numérico a un monto, agregando puntos o comas en la parte entera y decimal según corresponda.

También agrega el signo si el monto es menor que 0.

Implantación:

se define una variable con un valor numérico sin formato:

var mi_numero = 100000;

se le da el formato al valor de la variable anterior, llamando a la función formatMoney que está en el archivo formato-numerico.js:

mi_numero.formatMoney(2,'.',',');

devuelve:

100.000,00

Argumentos:

lugarDecimal (integer) = Cantidad de decimales dentro del formato, en el ejemplo es 2.

separadorMiles (string) = Caracter que corresponde al separador de miles, en el ejemplo es un punto.

separadorDecimales (string) = Caracter que corresponde al separador de decimales, en el ejemplo es una coma.


