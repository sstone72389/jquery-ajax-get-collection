'use strict'

const onSuccess = function (data) {
  console.table(data.books)
}

const onError = function (response) {
  console.error(response)
}
module.exports = {
  onSuccess,
  onError
}
