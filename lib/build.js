var ply = require('parse-ply')
var fs = require('fs')
var zlib = require('zlib')

var scale = 500

console.error('parsing ply file')
ply(
  fs.createReadStream(process.argv[2])
    .pipe(zlib.createGunzip())
, function(err, data) {
  if (err) throw err

  var cells = data.face.vertex_indices
  var positions = []

  console.error('unpacking positions')
  for (var i = 0; i in data.vertex.x; i++) {
    positions.push([
        data.vertex.x[i] * scale
      , data.vertex.y[i] * scale
      , data.vertex.z[i] * scale
    ])
  }

  console.error('generating module')
  var output = fs.createWriteStream(process.argv[3])
  output.write('exports.cells=')
  output.write(JSON.stringify(cells))
  output.write('\nexports.positions=')
  output.write(JSON.stringify(positions))
  output.write('\n')
  output.end()

  console.error('writing module')
})
