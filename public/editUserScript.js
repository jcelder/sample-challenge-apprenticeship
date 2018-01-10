console.log('Hello from editUserScript.js')

document.getElementById('btn--submit').addEventListener('click', () => {
  const user = {
    userId: document.getElementById('btn--submit').getAttribute('data-id'),
    email: document.getElementById('email').value,
    name: document.getElementById('name').value
  }

  const url = `/users/${user.userId}/edit`
  console.log(user)
  fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
    credentials: 'include'
  })
    .then((response) => {
      console.log(response)
      return response.text()
    })
    .then((text) => {
      console.log(text)
      document.getElementById('message').innerHTML = text
    })
})