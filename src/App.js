import React, { createContext, useState } from 'react';
import './App.css';
import TextInformation from './components/TextInformation';
import ErrorBoundary from './components/ErrorBoundary';

import TextField from '@mui/material/TextField';

export const TextContext = createContext();
TextContext.displayName = 'TextContext';

function App() {
  const [text, setText] = useState('');

  return (
    <TextContext.Provider value={text}>
      <div className="App">
        <div className='typo'>
          <h3>
            Add Your Text Here:
          </h3>
        </div>
        <div className='textfield'>
          <TextField hiddenLabel autoComplete='off' color='secondary' onChange={e => setText(e.target.value)} />
        </div>

        <div className='textinfo'>
          <ErrorBoundary >
            <TextInformation />
          </ErrorBoundary>
        </div>

      </div>
    </TextContext.Provider>
  )
}


export default App;