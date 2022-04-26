let target = '11a22b33c';
let exp = new RegExp('(\\d\\d)(\\w)', 'g'); //Literal: /(\d\d)(\w)/g
let exp2 = /(\d\d)(\w)/g;
let result = exp.exec(target);
let result2 = exp2.exec(target);

console.log(exp.test(target)); // Verifica se a regex pode ser aplicado ao target
console.log(result);
console.log(result2);
console.log('last index:', exp.lastIndex);
console.log();

// Alterando strings
var anoMesDia = '2007-12-31';
console.log(anoMesDia);
var exp3 = /-/g;
anoMesDia = anoMesDia.replace(exp3, '/');
console.log(anoMesDia);
console.log();

// Split e RegEx
var arquivo = '100,200-150,200;20';
var exp4 = /[,;-]/;
var valores = arquivo.split(exp4);
console.log(valores);
console.log();

// Match e RegEx
var codigos = 'A121B12112C12212F12G01';
var exp5 = /[A-Za-z]\d+/g;
var codigosExtraidos = codigos.match(exp5);
console.log(codigosExtraidos);