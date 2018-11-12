const api = require('./api.js')

const onSignUp = function (event) {
  //.preventDefault prevents the default action of submit, which would
  //refresh the page if not prevented.
  event.preventDefault()
   api.signUpApi()
}
const onSignIn = function (event) {
  //.preventDefault prevents the default action of submit, which would
  //refresh the page if not prevented.
  event.preventDefault()
  api.signInApi()
}
module.exports = {
  onSignUp,
  onSignIn
}
