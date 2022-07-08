import {useContext, useEffect, createContext, useReducer, Reducer} from "react";
import {useParams, useNavigate} from 'react-router-dom'




import { getUserApi, getReposApi } from "../api/apiGitHub";

export const GIT_USER: String = 'GIT_USER';
export const UPDATE_LOADING = 'UPDATE_LOADING';
export const ERROR_UPDATE = 'ERROR_UPDATE';
export const GIT_REPOS = 'GIT_REPOS';
export const CHANGE_PAGE_REPOS = 'CHANGE_PAGE_REPOS';


export interface GithubInitialState {
  user?: any ,
  userData?: any ,
  repos?: any[] ,
  loading?: boolean ,
  userCallStatus?:number,

  updateUserData?: Function,
  updateRepoData?: Function,
  changePageRepoData?: Function,
} 
export interface GithubAction {
  call: string,
  data?: any,
}

const GithubContext = createContext({});

const GitHubContextProvider = (props: any) => {
    let { userId } = useParams();

    const initialState = {
      user: userId,
      userData: {},
      repos: [],
      loading: false,
      userCallStatus:200,
    };
  
    const [state, dispatch] = useReducer(githubReducer, initialState);
  
    const updateLoading = () =>{
      dispatch({ call: UPDATE_LOADING })
    }


    const updateUserData = async () => {

      updateLoading()
      getUserApi(state.user, dispatch)

    }
    const updateRepoData = async () => {

        updateLoading()
        getReposApi(state.user, 1, dispatch)
  
      }

    
    const changePageRepoData = async (page: number) => {
      
      
        
        getReposApi(state.user, page, dispatch)
  
    }

 
    

    

    
  
    return (
      <GithubContext.Provider 
      value={{
        user: state.user,
        userData: state.userData,
        repos: state.repos,
        loading: state.loading,
        userCallStatus: state.userCallStatus,
        updateUserData,
        updateRepoData,
        changePageRepoData,
      }}>
        {props.children}
      </GithubContext.Provider>
    );
  };

  // context consumer hook
const useGithubContext = () => {
    const context = useContext(GithubContext);
    if (context === undefined) {
      throw new Error("useGithubContext requested outside of provider");
    }
    return context;
  };

  

export const githubReducer: Reducer<GithubInitialState ,GithubAction > = (state, action) => {

   switch (action.call) {
      case GIT_USER: return {
          ...state,
          userData: action.data,
          loading: false,
        }
      case UPDATE_LOADING: return {
          ...state,
          loading: true,
        }
      case GIT_REPOS: return {
          ...state,
          repos: action.data,
          loading: false,
        }
        case CHANGE_PAGE_REPOS: return {
          ...state,
          repos: action.data,
          loading: false,
        }
        case ERROR_UPDATE:
          return {
          ...state,
          userCallStatus: action.data.response.status,
          loading: false,
        }
      default: {
        return state
      }
  }
}

  
export {GithubContext, GitHubContextProvider, useGithubContext };
