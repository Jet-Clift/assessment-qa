var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '701bde5ed39d469d89bac70ab258b7b2',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')