const axios = require('axios')

async function categories(parent, args, context, info) {
  const { data: categories } = await axios.get('https://api.chucknorris.io/jokes/categories')
  return categories
}

async function joke(parent, args, context, info) {
  const url = args.category ?
    `https://api.chucknorris.io/jokes/random?category=${args.category}` :
    'https://api.chucknorris.io/jokes/random'
  const { data: { value: joke } } = await axios.get(url)
  return joke
}

module.exports = {
  categories,
  joke
}