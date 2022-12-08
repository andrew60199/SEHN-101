const router = require('express').Router()
const supabase = require('../../utils/supabase')

router.post('/login', async (req, res) => {
  try {

    // https://www.youtube.com/watch?v=znZE6DEtVNs
    const { data, error } = await supabase.auth.signInWithPassword({
      email: req.body.email,
      password: req.body.password,
    })

    // console.log(data)

    // Not sure what exactly I should place in the session value
    res.status(200).set({'set-cookie': `session=${data.session.access_token}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${new Date(data.session.expires_at * 1000).toUTCString()}`}).json('Log in successful')
    
  } catch (err) {
    // console.log(err)
    res.status(400).json(err)
  }
})

router.post('/signup', async (req, res) => {
  try {

    const { data, error } = await supabase.auth.signUp({
      email: req.body.email,
      password: req.body.password,
    })

    // console.log(data)

    // Need to add cookie setting here too
    res.status(200).json(data)

  } catch (err) {
    res.status(400).json(err)
  }
})

router.post('/logout', (req, res) => {
  // if (req.session.logged_in) {
  //   req.session.destroy(() => {
  //     res.status(204).end()
  //   })
  // } else {
  //   res.status(404).end()
  // }
})

module.exports = router
