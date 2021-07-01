import React from 'react';
import * as counterSelect from './redux/selectors'
import {useAppSelector} from "./app/hooks";
import {Switch, Route} from 'react-router-dom'
import {registerUser} from "./api/authApi";
import {Register} from "./pages/Register/Register";
import { Layout } from './components/Layout';
import { Header } from './components/Header/Header';
import { Login } from './pages/Login/Login';
import './App.css'

function App() {
  const counter = useAppSelector(counterSelect.all)
  console.log(counter)

  return (
      <Layout>
          <Switch>
              <Route component={Login} exact path='/'/>
              <Route component={Register} path='/register'/>
          </Switch>
      </Layout>
  );
}

export default App;
