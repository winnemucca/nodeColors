var colorful = require('colorful.js')

var red = process.argv[2]

var green = process.argv[3]

var blue = process.argv[4]

var luminosity = 0.2126*red + 0.7152*green + 0.0722*blue;

console.log (luminosity)

// var textContent = fs.readFileSync(luminosity,'utf-8')
// var createNew = fs.writeFile(luminosity, textContent)