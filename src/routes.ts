import { lazy } from 'react';
import TestErrorPage from './components/ErrorBoundary/TestErrorPage';

const HomePage = lazy(() => import('./pages/Home'));
const ReduxExamplePage = lazy(() => import('./pages/ReduxExample'));

export const routes = [
  {
    to: '/',
    text: 'Home',
    activeNames: ['/home', '/'],
    Component: HomePage,
  },
  {
    to: '/redux',
    text: 'Redux Example',
    activeNames: ['/redux'],
    Component: ReduxExamplePage,
  },
  // just for testing the error boundary
  {
    to: '/test-error',
    Component: TestErrorPage,
  },
];
