const store = require('./store.js')
const config = require('./config.js')

const signUpApi = function () {
  // created an created a "credentials object array to capture the
  // information from email/password login
  const credentialsObj = {'credentials': {}}
  // .serializeArray() collects information from a "form"
  $('#sign-up').serializeArray().forEach(function (e) {
    credentialsObj.credentials[e.name] = e.value
    // populates credentials object with info to send to server:
    // {
    //   "credentials": {
    //     "email": "an@example.email",
    //       "password": "an example password",
    //       "password_confirmation": "an example password"
    //   }
    // }
  })
  // .ajax connect you to the API
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'sign-up',
    data: credentialsObj,
    // added function inside API if request = success, invoke function
    success: function(response) {
      console.log(response)
    },
    error: function(response) {
      console.log(response)
    }
  })
}
const signInApi = function () {
  const credentialsObj = {'credentials': {}}
  $('#sign-in').serializeArray().forEach(function (e) {
    credentialsObj.credentials[e.name] = e.value
  })
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'sign-in',
    data: credentialsObj,
    success: function(response) {
      // create user obj inside of store obj (puts response in store.user)
      store.user = response.user
      console.log(store.user)
    },
    error: function(response) {
      console.log(response)
    }
  })
}

module.exports = {
  signUpApi,
  signInApi
}
