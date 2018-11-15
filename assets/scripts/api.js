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
    //       "email": "an@example.email",
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
    success: function (response) {
      console.log(response)
    },
    error: function (response) {
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
    success: function (response) {
      // create user obj inside of store obj (puts response in store.user inc. tokens)
      store.user = response.user
      console.log(store.user)
    },
    error: function (response) {
      console.log(response)
    }
  })
}

const signOutApi = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + 'sign-out',
    // Headers interacts with serve to authorize the user
    headers: {
      // Token token= syntax?
      Authorization: 'Token token=' + store.user.token
    },
    success: function () {
      console.log('logged out')
    },
    error: function (response) {
      console.log(response)
    }
  })
}

const changePasswordApi = function () {
  // created passwords object because API wasn't allowing me to change passwords
  const passwordObj = {'passwords': {}}
  $('#change-password').serializeArray().forEach(function (e) {
    passwordObj.passwords[e.name] = e.value
  })

  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + 'change-password',
    // Headers interacts with serve to authorize the user
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: passwordObj,
    success: function () {
      console.log("password changed succesfully")
    },
    error: function () {
      console.log("this sucks")
    }
  })
}
// api.js
//  the code that actually fires off the AJAX request

// const newGame = () => {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const patchGame = data => {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + store.gameId,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

module.exports = {
  signUpApi,
  signInApi,
  signOutApi,
  changePasswordApi
  // newGame,
  // patchGame
}
