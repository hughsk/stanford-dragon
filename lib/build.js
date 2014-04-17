var ply = require('parse-ply')
var fs = require('fs')

var scale = 500

console.error('parsing ply file')
ply(
  process.stdin
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
  process.stdout.write('exports.cells=')
  process.stdout.write(JSON.stringify(cells))
  process.stdout.write('\nexports.positions=')
  process.stdout.write(JSON.stringify(positions))
  process.stdout.write('\n')

  console.error('writing module')
})
