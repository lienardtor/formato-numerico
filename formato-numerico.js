Number.prototype.formatMoney = function(lugarDecimal, separadorMiles, separadorDecimales) {
    // lugarDecimal (integer) = Cantidad de decimales dentro del formato
    // separadorMiles (string) = Caracter que corresponde al separador de miles
    // separadorDecimales (string) = Caracter que corresponde al separador de decimales
	var n = this;
    lugarDecimal = isNaN(lugarDecimal = Math.abs(lugarDecimal)) ? 2 : lugarDecimal;
	separadorDecimales = separadorDecimales == undefined ? "." : separadorDecimales;
    separadorMiles = separadorMiles == undefined ? "," : separadorMiles;
    //si el valor es negativo, coloca el signo "-"
	signo = n < 0 ? "-" : "";
    i = parseInt(n = Math.abs(+n || 0).toFixed(lugarDecimal)) + "";
    j = (j = i.length) > 3 ? j % 3 : 0;
    // retorna el número con el formato correspondiente
	return signo + (j ? i.substr(0, j) + separadorMiles : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + separadorMiles) + (lugarDecimal ? separadorDecimales + Math.abs(n - i).toFixed(lugarDecimal).slice(2) : "");
};

// Implantación:
// se define una variable con un valor numérico sin formato
var mi_numero = 100000;
// se le da el formato al valor de la variable anterior, llamando a la función formatMoney
mi_numero.formatMoney(2,'.',',');
// devuelve
// 100.000,00