import nodeMailin from 'node-mailddddin'

nodeMailin.start(
  { port: 25 }
)

nodeMailin.on('message', console.log)
