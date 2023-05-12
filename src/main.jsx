import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import client from './apollo-client'
// import { Provider } from 'react-redux'
import App from './App'
// import {store} from "../src/redux/store"

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)