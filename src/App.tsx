
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import  MainComponent from './components/MainComponent'
import './App.css';
import theme from './theme'
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route
             path="/"
            element={  <Navigate to='/reactjs' /> }
        />

        <Route
            path="/error-page"
            element={ <div>error</div> }
        />
        <Route
            path="/:userId"
            element={ <ThemeProvider theme={theme}><MainComponent/><CssBaseline/></ThemeProvider> }
        />
    </Routes>
</BrowserRouter>
  );
}

export default App;
