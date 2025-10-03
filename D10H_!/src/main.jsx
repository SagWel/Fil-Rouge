import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <BrowserRouter>
            {/* Utilisez ChakraProvider SANS la propriété 'theme' pour prendre le thème par défaut */}
            <ChakraProvider> 
                <App />
            </ChakraProvider>
        </BrowserRouter>
    </StrictMode>
);