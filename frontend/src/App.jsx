import './App.css';
import TopHeader from './components/Top-Header';
import Header from "./components/Header";
import Footer from './components/Footer';
import SubFooter from './components/SubFooter';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <TopHeader/>
      <Header/>
      <Outlet/>
      <Footer/>
      <SubFooter/>
    </>
  )
}

export default App
