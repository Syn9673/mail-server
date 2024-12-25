import nodeMailin from 'node-mailin'

nodeMailin.start(
  { port: 25 }
)

nodeMailin.on('message', console.log)