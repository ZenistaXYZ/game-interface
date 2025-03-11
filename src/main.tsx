import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from './components/ui/provider'
import { AppKitProvider } from './components/provider/appkit-provider';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OverlayScrollbarsComponent
      defer
      options={{
        scrollbars: {
          visibility: 'auto',
          autoHide: 'never',
        }
      }}
      style={{ maxHeight: '100vh' }}
    >
      <AppKitProvider>
        <Provider>
          <App />
        </Provider>
      </AppKitProvider>
    </OverlayScrollbarsComponent>
  </StrictMode>,
)
