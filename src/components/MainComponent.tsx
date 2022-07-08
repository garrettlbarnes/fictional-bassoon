
import {  GitHubContextProvider } from "../context/GithubContext";
import { ThemeProvider } from '@mui/material/styles';

import { UserCard } from './UserCard'

import RepoList from "./RepoList";


const MainComponent = () => {


    


    return <GitHubContextProvider><UserCard></UserCard><RepoList/></GitHubContextProvider> 
}

export default MainComponent;