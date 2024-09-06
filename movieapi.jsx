import axios from 'axios';

const baseUrl='http://www.omdbapi.com/?'
const apiKey = import.meta.env.VITE_MOVIE_API_KEY
const getMovieData= async (moviename)=>{
  try{
    const response= await axios.get(baseUrl+`t=${moviename}&apikey=${apiKey}`)
    return response.data
  }
  catch(error){
    throw error;
  }
}
export default getMovieData