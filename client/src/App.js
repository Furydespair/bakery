import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './components/AppRouter';
import { useContext, useEffect } from 'react';
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const {worker} = useContext(Context)

  const checkAuth = async () => {
    await worker.checkAuth()
  }

  useEffect(() => {
    checkAuth()
  }, [worker.worker.id])

  return (
    <BrowserRouter>
    <Header/>
    <AppRouter/>
    <Footer/>
    </BrowserRouter>
  );
}

export default observer(App);
