import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppProvider } from './context'
import NewApp from './NewApp'
import NewHome from './NewHome'
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
    {/* <App /> */}
    <NewHome/>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
