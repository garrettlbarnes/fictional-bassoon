import React, {useContext, createContext, useState, useEffect} from "react";
import { GithubContext, GithubInitialState, useGithubContext } from "../context/GithubContext";
import RepoCard from './RepoCard';
import {DEFAULT_PAGE_SIZE} from '../api/apiGitHub'


import { List, ListSubheader, Typography, Paper, Pagination} from "@mui/material";
import { styled } from "@mui/material/styles";
import Loading from "./Loading";





const RepoList = () => {

    const github:GithubInitialState  = useGithubContext();
    useEffect(() => {
        github.updateRepoData && github.updateRepoData()
    }, []);


    if(github.loading) {
        return <Loading/>
    }

     
    return <Paper sx={root}><List sx={root}  >
            <ListSubheader><Typography variant="h6" component="div" sx={title}>
               
            Repositories
        </Typography></ListSubheader>
        {github.repos && github.repos.map((item) => RepoCard(item))}
    </List>
    </Paper>
}

const root= {
        
        margin: 2

    }

    const text =  {
        width: "100%",
        display: 'inline-flex',
        justifyContent: "center",
        padding:0
        

    }

    const title = {
        margin: 2,
        width: "100%",
        verticalAlign: 'middle',
        alignItems: 'center',
        display: 'inline-flex',
        justifyContent: "center",
        
        
      
    }

export default RepoList;

