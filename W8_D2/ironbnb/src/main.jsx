import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { VariableProviderWrapper } from './contexts/Variable.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <VariableProviderWrapper>
        <App />
      </VariableProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>,
)
