// require('dotenv').config()

// Cannot access supabase before initialisation 
// How do we keep this secure??
// const database = supabase.createClient('', '')
// const database = supabase.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

const getData = async () => {
    const place = document.querySelector('#insert-here')

    // SQL injection?? Perhaps we need to be careful of this
    // const { data: posts, error } = await database.from('posts').select('*')

    // if (error) {
    //     throw new Error(error)
    // }

    // console.log(posts)

    const response = await fetch('/api/posts')
    const data = await response.json()
    console.log(data)
}

getData()