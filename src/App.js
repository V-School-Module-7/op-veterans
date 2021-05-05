import {useContext} from "react";
import styled from 'styled-components'
import {Switch, Route} from 'react-router-dom'
import {AuthContext} from "./context/AuthProvider";
import UserProvider, {UserContext} from "./context/UserProvider";
import VendorProvider, {VendorContext} from "./context/VendorProvider";
import BoothProvider from "./context/BoothProvider"; 
//import Playground from
// './Playground'
import {Landing, Vendor, Admin, Playground} from './pages'
import RegisterAccount from './pages/RegisterAccount'
const AppContainer = styled.div `
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  //overflow: hidden;
 //																				 display: grid;
  //grid-template-rows: 88px 1fr;
  
//   height: 3040px;
  //position: relative;
//   border: 1px solid lightcoral;
`

export default function App() {
  const {auth} = useContext(AuthContext);

  if (!auth) {
    return (
      <AppContainer>
        <Landing/>
      </AppContainer>
    );
  }
  return (
    <UserProvider>
      <VendorProvider>
      <BoothProvider>
        <AppContainer>
          <UserViews/>
        </AppContainer>
      </BoothProvider>
      </VendorProvider>
    </UserProvider>
  );
}

function UserViews() {
  const {user, isAdmin, isDev} = useContext(UserContext);

  if (!user) {
    return <h1>Loading...</h1>;
  } else if (isAdmin) {
    return <Admin/>
  } else if (!isDev) {
    return <Vendor/>
  }
  return (
    <Switch>
      <Route exact path='/'>
        <Landing/>
      </Route>
      <Route path="register">

        <RegisterAccount/>
      </Route>
      <Route path='/vendor'>
        <Vendor/>
      </Route>

      <Route path='/admin'>
        <Admin/>
      </Route>

      <Route path='/playground'>
        <Playground/>
      </Route>
    </Switch>
  )
}