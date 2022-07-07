import axios from "axios";
import {GIT_USER, ERROR_UPDATE} from '../context/GithubContext'

const getUserApi: Function = (  username: String, dispatch: Function) => {

    const githubUrl = `https://api.github.com/users/${username}`
    const token = " "
    axios.get(githubUrl, {
          headers:{
              "Authorization": `token ${token}`
          }
        })
        .then((response) => {
            dispatch({call:GIT_USER, data: response.data})
        })
        .catch((error) => {dispatch({call:ERROR_UPDATE, data: error})})
        .finally(() => console.log(`Called GET user: ${username}`));
  

  
  }; 


export { getUserApi};