import { createContext, useState } from 'react';
import './App.css';
import Container from './Componentes/Container/Container';

export const ThemeContext = createContext('light')

function App() {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div>
          <Container></Container>
        </div>      
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
