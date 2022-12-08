const cookie = require('cookie')

// Make sure to put this on all the routes
const withAuth = async (req, res, next) => {
  // https://www.youtube.com/watch?v=znZE6DEtVNs
  // Absolute legend
  const isCookie = cookie.parse(req.headers.cookie || '').session || null
  // console.log(isCookie)
  if (!isCookie) {
    res.redirect('/login')
  } else {
    next()
  }
}

module.exports = withAuth
