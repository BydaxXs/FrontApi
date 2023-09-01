import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

//Pages
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import CreateUser from './Pages/CreateUser';
import ProfilePage from './Pages/ProfilePage';
import TaxInsertPage from './Pages/TaxInsertPage';
import SearchTaxPage from './Pages/SearchTaxPage';
import CreateDeliveryPage from './Pages/CeaterDeliveryPage';
import SearchDeliveryPage from './Pages/SearchDeliveryPage';
import Landing from './Pages/Landing';
import AssingmentPage from './Pages/AssingmentPage';
import CreateRequestPage from './Pages/CreateRequestPage';

//Context
import ProtectedRoute from './components/ProtectedRoute';
import AuthContextProvider from './context/AuthContext';
import UserContextProvider from './context/UserContext';


import './App.css'


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <UserContextProvider>
          <div className='App'>
            <Routes>
              <Route path = '/' element = {<LoginPage/>} />
              <Route path = '/createUser' element = {<CreateUser/>} />
                <Route element = { <ProtectedRoute/> } >
                  <Route path = '/homePage' element = {<HomePage />} />
                  <Route path = '/Landing/:id' element = {<Landing />} />
                  <Route path = '/profileData/:id' element = {<ProfilePage/>} />
                  <Route path = '/TaxInsert/:id' element = {<TaxInsertPage/>} />
                  <Route path = '/SearchTaxPage/:id' element = {<SearchTaxPage/>} />
                  <Route path = '/CreateDeliveryPage/:id' element = {<CreateDeliveryPage/>} />
                  <Route path = '/SearchDeliveryPage/:id' element = {<SearchDeliveryPage/>} />
                  <Route path = '/Assingment/:id' element = {<AssingmentPage/>} />
                  <Route path = '/CreateRequest/:id' element = {<CreateRequestPage/>}/>
                </Route>
              <Route path = '*' element = {<Navigate to = '/' />} />
            </Routes>
          </div>
        </UserContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
