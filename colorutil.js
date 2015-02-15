
var luminosity = function(r,g,b) {
return 0.2126*r + 0.7152*g + 0.0722*b;
}
// var darken = function(r,g,b) {
// return (0.2126*r + 0.7152*g + 0.0722*b)*0.80;
// }
var darken = function(r,g,b) {
return String(Math.round(0.80*r)) +' , '+ String(Math.round(0.80*g)) +' , ' + String(Math.round(0.80*b));

}


// module.exports = luminosity;
module.exports= {
luminosity:luminosity,
darken: darken
// console.log(luminosity);

};
// console.log (luminosity)

