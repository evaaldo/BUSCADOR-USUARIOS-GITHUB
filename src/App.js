import { createContext, useState } from 'react';
import './App.css';
import Container from './Componentes/Container/Container';

import { BsSun } from 'react-icons/bs'
import { BsMoon } from 'react-icons/bs'

export const ThemeContext = createContext('dark')

function App() {

  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className='theme-switch'>
          <input type='checkbox' id='change-theme' onChange={toggleTheme} checked={theme === 'light'}></input>
          <label className='label-theme' for='change-theme'>
            <p className='sol'>Light theme</p><BsSun className='sol'/>
            <p className='lua'>Dark theme</p><BsMoon className='lua'/>
          </label>
        </div>
        <div>
          <Container></Container>
        </div>      
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
