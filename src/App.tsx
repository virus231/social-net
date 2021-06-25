import React from 'react';
import * as counterSelect from './redux/selectors'
import {useAppSelector} from "./app/hooks";
import {Switch, Route} from 'react-router-dom'
import {registerUser} from "./api/authApi";
import {Register} from "./pages/Auth/Register/Register";
import { Layout } from './components/Layout';
import { Header } from './components/Header/Header';
import { Login } from './pages/Auth/Login/Login';
import './App.css'

function App() {
  const counter = useAppSelector(counterSelect.all)
  console.log(counter)

  React.useEffect(() => {
    const register = async () => {
      const res = await registerUser('body');
      console.log(res)
    }
    register().then(r => console.log(r))
  },[])


  return (
      <>
          {/*<Header/>*/}
          <Switch>
              <Route component={Login} exact path='/'/>
              <Route component={Register} exact path='/register'/>
          </Switch>
      </>
  );
}

export default App;
