

import {  GitHubContextProvider } from "../context/GithubContext";
import { UserCard } from './UserCard'

const MainComponent = () => {


    


    return <GitHubContextProvider><UserCard></UserCard></GitHubContextProvider>
}

export default MainComponent;