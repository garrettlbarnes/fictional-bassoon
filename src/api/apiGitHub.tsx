import axios from "axios";
import {GIT_USER, ERROR_UPDATE, GIT_REPOS} from '../context/GithubContext'

export const DEFAULT_PAGE_SIZE = 10;

const getUserApi: Function = (  username: String, dispatch: Function) => {

    const githubUrl = `https://api.github.com/users/${username}`
    const token = ""
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

  const getReposApi: Function = (  username: string, page: number = 1,  dispatch: Function) => {

    const githubUrl = `https://api.github.com/users/${username}/repos?per_page=${DEFAULT_PAGE_SIZE}&page=${page}`;

    const token = ""
    axios.get(githubUrl, {
          headers:{
              "Authorization": `token ${token}`
          }
        })
        .then((response) => {
            dispatch({call:GIT_REPOS, data: response.data})
        })
        .catch((error) => {dispatch({call:ERROR_UPDATE, data: error})})
        .finally(() => console.log(`Called GET repos: ${username}`));
  

  
  }; 


export { getUserApi, getReposApi};