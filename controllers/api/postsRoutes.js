const router = require('express').Router()
// const withAuth = require('../../utils/auth')
const format = require('date-fns/format')
const supabase = require('../../utils/supabase')

// api/posts

router.get('/', async (req, res) => {
    try {

        // Make sure to disable RLS if you are getting back an empty array... 
        let { data: posts, error } = await supabase
        .from('posts')
        .select('*')

        if (error) {
            throw new Error(error)
        }

        // console.log(posts)  

        res.status(200).json(posts)

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router