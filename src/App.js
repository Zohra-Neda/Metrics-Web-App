import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/store';
import './App.css';
import CryptoContainer from './components/CryptoContainer';
import CryptoDetails from './components/CryptoDetails';
import Header from './components/Header';

const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<CryptoContainer />} />
            <Route path="/details/:id" element={<CryptoDetails />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;