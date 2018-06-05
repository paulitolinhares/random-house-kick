const baseUrl = 'https://api.chucknorris.io';

const catchError = response => {
  if(!response.ok) throw Error (response.statusText)
  return response;
}

export const getCategories = () => fetch(`${baseUrl}/jokes/categories`)
  .then(catchError)
  .then(response => response.json());

export const getRandomJoke = category => fetch(`${baseUrl}/jokes/random?category=${category}`)
  .then(catchError)
  .then(response => response.json());
