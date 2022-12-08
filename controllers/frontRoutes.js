const router = require('express').Router()
const withAuth = require('../utils/auth')
const format = require('date-fns/format')
// const supabase = require('../utils/supabase')

router.get('/', withAuth, async (req, res) => {
    try {

        res.render('home')

    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

module.exports = router