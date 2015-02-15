var colorutil = require("./colorutil.js");

var rgbDark = colorutil.darken(process.argv[2], process.argv[3], process.argv[4]);

console.log('dark',rgbDark);