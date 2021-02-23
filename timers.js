const fs = require('fs')

fs.open(__filename, 'r', (err, fd) => {
	console.log('File IO')
})

setImmediate(() => {
	console.log('Immediate')
})

process.nextTick(() => {
	console.log('nextTick')
})

new Promise((resolve) => {
	resolve('Promise')
}).then(console.log)

console.log('sync')
