import  { useEffect} from "react";
import {FC} from "react";
import {useGithubContext, GithubInitialState} from "../context/GithubContext";
import { CardContent, Typography, CardHeader, Avatar, Link, Card, Box } from "@mui/material";

export const UserCard : FC = () => {
    const github:GithubInitialState  = useGithubContext();
    useEffect(() => {
        github.updateUserData && github.updateUserData()
    }, []);
    if(!github.user){
        //figure this out
        return <div>404?</div>
    }



    return <Card sx={root}>
    <CardHeader 
        title={ 
            <Typography variant="h4" component="div" sx={title} >
                    <Avatar sx={avatar} src={github.userData.avatar_url} alt={github.userData.name}></Avatar>
                    {github.userData.name}
            </Typography>}/>
        <CardContent sx={text}>
            <Typography variant="body1" component="div"  > 
                    {github.userData.bio}
            </Typography>
        </CardContent>
        <CardContent sx={text}>
            <Typography variant="h6"  sx={infoArea} > 
                    <Box>Username: &nbsp;
                    <Link href={github.userData.html_url}>{github.userData.login}
                    </Link></Box>
                    {github.userData.email?<Box> Email: {github.userData.email}</Box>:<></>}
                    {github.userData.location?<Box>Location: {github.userData.location}</Box>:<></>}
            </Typography>
        </CardContent>
</Card>
}

const root= {
        
    margin: 2,

}

const text =  {
    width: "100%",
    display: 'inline-flex',
    justifyContent: "center",
    padding:0
    

}
const avatar= {
    
    margin: 1,
}

const infoArea= {
    gap: 2,
    margin: 1,
    justifyContent : 'space-between',

    display: 'inline-flex'
}
const title = {
    
    width: "100%",
    verticalAlign: 'middle',
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: "center",
    
    
  
}





