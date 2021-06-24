import React from 'react';
import * as counterSelect from './redux/selectors'
import {useAppSelector} from "./app/hooks";
import {Switch, Route} from 'react-router-dom'
import {registerUser} from "./api/authApi";
import {Register} from "./pages/Register/Register";
import {Login} from "./pages/Login/Login";

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
    <div className="App">
      <Switch>
        <Route component={Login} exact path='/'/>
        <Route component={Register} exact path='/register'/>
      </Switch>
    </div>
  );
}

export default App;
