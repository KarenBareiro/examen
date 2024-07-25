
import './App.css'
import SongsForm from './components/Songs/SongsForm';
// import NavBar from '../src/components/NavBar/NavBar'
import {Route,Routes } from'react-router-dom';

function App() {

  return (
    <>
      {/* <NavBar/> */}
      <h1>Holaaaaaaaaa</h1>
      <Routes>
        <Route path= "/songs" element= {<SongsForm/>}/>
        <Route path= "/songs/:_id" element= {<SongsForm/>}/>
      </Routes>
      
    </>
  )
}

export default App;
