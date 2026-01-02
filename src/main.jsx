import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from 'styled-components'
import { ThemeProviderWrap, ThemeContext } from './Context/ThemeContext.jsx'
import { AppProvider } from './Context/AppContext.jsx'
import { GlobalStyle } from './Styles/ GlobalStyles.js'
import { useContext } from 'react'

function Root() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )


}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProviderWrap>
      <AppProvider>
        <Root />
      </AppProvider>
    </ThemeProviderWrap>
  </StrictMode>,
)
