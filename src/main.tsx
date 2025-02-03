import App from '@src/App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { createStore } from './store';
import SuspenseUntilReady from './components/SuspenseUntilReady';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import DarkThemeProvider from './providers/DarkThemeProvider';

const gradientStyle = `
    font-size: 20px;
    font-weight: bold;
    color: transparent;
    background: linear-gradient(90deg, #89cff0, #6a9cf1, #43b0f1, #29b6f6);
    -webkit-background-clip: text;
    display: inline-block;
`;

const store = createStore();
function Client() {
  return (
    <StrictMode>
      <SuspenseUntilReady
        asyncFn={async () => {
          console.log('%c Innovation Hub Application is Up !', gradientStyle);
        }}
      >
        <StoreProvider store={store}>
          <BrowserRouter>
            <ErrorBoundary>
              <DarkThemeProvider>
                <App />
              </DarkThemeProvider>
            </ErrorBoundary>
          </BrowserRouter>
        </StoreProvider>
      </SuspenseUntilReady>
    </StrictMode>
  );
}

const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(<Client />);
