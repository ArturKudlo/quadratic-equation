module.exports = function solveEquation(equation) {
  var array = equation.split(" * x");
    partB = array[1].slice(3, 4) + array[1].slice(5, array[1].length + 1);
    partC = array[2].slice(1, 2) + array[2].slice(3, array[2].length + 1);    
    var a = +array[0];
    var b = +partB;
    var c = +partC;
    var d = Math.pow(b, 2) - 4 * a * c;
    var x1 = (-b + Math.sqrt(d)) / (2 * a);
    var x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [Math.round(x1), Math.round(x2)].sort(function(a, b) {return a - b});
}
