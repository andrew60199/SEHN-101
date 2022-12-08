const communication = document.querySelector('#message')
const loginForm = document.querySelector('.login-form')

const loginFormHandler = async (event) => {
  event.preventDefault()

  const email = document.querySelector('#email-login').value.trim()
  const password = document.querySelector('#password-login').value.trim()

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    })

    console.log(response)

    if (response.ok) {
      // Not sure if this work but I would hope it makes for a better user experience 
      setTimeout(() => {
        document.location.replace('/')
      }, 200)
      
    } else {
      // https://www.youtube.com/watch?v=5TxF9PQaq4U 
      // This parses the JSON
      const data = await response.json()
      // Then we need to refer back to what key we gave it... 
      communication.textContent = data.message
    }
  }
}

if (loginForm) {
  loginForm.addEventListener('submit', loginFormHandler)
}

