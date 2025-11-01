import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ContextShare from './contextAPI/ContextShare.jsx'
import AuthenticationContext from './contextAPI/AuthenticationContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='275958940957-4nakq4rsmpsv8mppg2irvpek8ltokeru.apps.googleusercontent.com'>
        <ContextShare>
          <AuthenticationContext>
            <App />
          </AuthenticationContext>
        </ContextShare>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
