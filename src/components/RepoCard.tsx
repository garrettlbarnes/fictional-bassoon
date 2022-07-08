import React, {useContext, createContext, useState, useEffect} from "react";
import { GithubContext, useGithubContext } from "../context/GithubContext";
import StarIcon from '@mui/icons-material/Star';
import Card from '@mui/material/Card';
import { CardContent, Typography, CardHeader, Chip, Link, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
const RepoCard = (repo: any) => {

    return <ListItem sx={root} key={repo.full_name}>
        
        <Card sx={root} variant="outlined"  >
        <CardHeader sx={cheader} disableTypography={true} 
            title={ <Typography variant="h5" component="div" sx={title}>
               
            <div>{repo.name}</div><div ><StarIcon sx={stars} color='warning' fontSize='large'></StarIcon><Typography sx={stars} variant="h5">{repo.stargazers_count} </Typography></div>
        </Typography>}/>
        <CardContent >
        <Typography sx={text}variant="body2" component="div"  > {repo.description}</Typography>
        </CardContent>
        <CardContent  >{ repo.language && <div ><Chip sx={chip} label={repo.language}/></div>}</CardContent>
    </Card></ListItem>
}



    const root= {
  
       
        width: '100%'

    }

    const text =  {
        width: "100%",
        
        justifyContent: "left",
        paddingLeft: 2,
        paddingRight: 2,
        

    }

    const chip= {
        
        justifyContent: "left",
        marginLeft: 2,

    }

    const stars= {
        paddingRight: 1,
        verticalAlign: 'bottom',
        display: 'inline-block',
        fontWeight: 'bold'
        
    }

    const cheader= {
        

        
        paddingRight: 2,
        margin: .2
        
    }
    const title = {
        fontWeight: 'bold',
        paddingLeft: 2,
        paddingRight: 2,
        width: "100%",
        verticalAlign: 'middle',
        alignItems: 'center',
        display: 'inline-flex',
        justifyContent: "space-between",
        
        
      
    }

export default RepoCard;

