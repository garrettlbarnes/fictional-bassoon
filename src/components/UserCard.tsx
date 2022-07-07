import  { useEffect} from "react";
import {FC} from "react";
import {useGithubContext, GithubInitialState} from "../context/GithubContext";

export const UserCard : FC = () => {
    const github:GithubInitialState  = useGithubContext();
    useEffect(() => {
        github.updateUserData && github.updateUserData()
    })
    if(!github.user){
        //figure this out
        return <div>404?</div>
    }
    return <div>{github.userData && github.userData.name}</div>
}





