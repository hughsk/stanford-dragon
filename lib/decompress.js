var mapl = require('map-limit')
var zlib = require('zlib')
var glob = require('glob')
var fs = require('fs')

mapl(glob.sync('models/*.ply.gz'), 1, function(f, next) {
  fs.createReadStream(f)
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(
      f.replace(/\.gz$/g, '')
    ))
    .once('close', next)
}, function(err) {
  if (err) throw err
})
