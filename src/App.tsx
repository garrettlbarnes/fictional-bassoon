
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import  MainComponent from './components/MainComponent'
import './App.css';

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
            element={ <MainComponent/> }
        />
    </Routes>
</BrowserRouter>
  );
}

export default App;
