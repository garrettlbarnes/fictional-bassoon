
import {  GitHubContextProvider } from "../context/GithubContext";
import { ThemeProvider } from '@mui/material/styles';

import { UserCard } from './UserCard'
import theme from '../theme'


const MainComponent = () => {


    


    return <ThemeProvider theme={theme}><GitHubContextProvider><UserCard></UserCard></GitHubContextProvider> </ThemeProvider>
}

export default MainComponent;