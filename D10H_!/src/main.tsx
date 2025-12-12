import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme.ts'


const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Root element not found in index.html')
}

createRoot(rootElement).render(
    <BrowserRouter>
        <ChakraProvider theme={theme}> 
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
        </ChakraProvider>
    </BrowserRouter>
)