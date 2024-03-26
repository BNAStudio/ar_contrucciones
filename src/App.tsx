import Header from './components/Header/Header';
import './App.css';
import Banner from './components/Banner/Banner';
import Cards from './components/Cards/Cards';
import {NewProjects} from './components/NewProjects/NewProjects';
import Lands from './components/Lands/Lands';

function App() {

  return (
    <div className='App'>
      <Header />
      <Banner id="banner"/>
      <Cards  id="cards"/>
      <NewProjects id="new-projects"/>
      <Lands id="lands" />
    </div>
  )
}

export default App
