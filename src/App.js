import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';

import React from 'react'

const App = () => {
  return (
   
      <Provider store={appStore}>
       <Body/>
      </Provider>
    
  )
}




export default App;
