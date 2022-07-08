import { useEffect} from "react";
import {GithubInitialState, useGithubContext } from "../context/GithubContext";
import RepoCard from './RepoCard';
import {DEFAULT_PAGE_SIZE} from '../api/apiGitHub'


import { List, ListSubheader, Typography, Paper, Pagination} from "@mui/material";
import Loading from "./Loading";





const RepoList = () => {

    const github:GithubInitialState  = useGithubContext();
    useEffect(() => {
        github.updateRepoData && github.updateRepoData()
    }, []);

    const handleChange =(e: any, page: number =1) => {
        
            github.changePageRepoData && github.changePageRepoData(page)
        
    }

    if(github.loading) {
        return <Paper sx={root}><Loading /></Paper>
    }

     
    return <Paper sx={root}><List sx={root}  >
            <ListSubheader><Typography variant="h6" component="div" sx={title}>
               
            Repositories
        </Typography></ListSubheader>
        {github.repos && github.repos.map((item) => RepoCard(item))}
    </List>
    <Pagination count={Math.ceil(github.userData.public_repos?github.userData.public_repos/DEFAULT_PAGE_SIZE:-1)} defaultPage={1} siblingCount={0} boundaryCount={0} onChange={handleChange}></Pagination>
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
        margin: 1,
        width: "100%",
        verticalAlign: 'middle',
        alignItems: 'center',
        display: 'inline-flex',
        justifyContent: "center",
        
        
      
    }

export default RepoList;

