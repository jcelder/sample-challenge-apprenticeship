console.log('albumScript.js is running!!!')

const btnLike = document.getElementById('btn-like')

btnLike.addEventListener('click', (e) => {
  console.log('Clicked!')
  const albumId = e.target.getAttribute('data-id')
  const url = `/albums/${albumId}/like`
  fetch(url, {
    method: 'POST',
    credentials: 'include'
  })
    .then((response) => {
      return response.text()
    })
    .then((message) => {
      if (message == 'Success') {
        let currentLikes = Number(btnLike.innerHTML)
        currentLikes += 1
        btnLike.innerHTML = currentLikes
        btnLike.setAttribute('class', 'btn--liked')
        btnLike.setAttribute('disabled', true)
      }
    })
})