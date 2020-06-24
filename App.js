import React from 'react'
import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import Todo from './Todo'
import {store, persistor} from './store'

export default class App extends React.Component {
  render(){
    return(
      <Provider store = {store}>
        <PersistGate loading = {null} persistor = {persistor}>
          <Todo />
        </PersistGate>
      </Provider>
     
    )
  }
}