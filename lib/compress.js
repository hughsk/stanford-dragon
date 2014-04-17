var mapl = require('map-limit')
var zlib = require('zlib')
var glob = require('glob')
var fs = require('fs')

mapl(glob.sync('models/*.ply'), 1, function(f, next) {
  fs.createReadStream(f)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(f + '.gz'))
    .once('close', next)
}, function(err) {
  if (err) throw err
})
