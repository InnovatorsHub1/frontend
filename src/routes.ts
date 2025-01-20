import { lazy, ComponentType } from 'react';
import TestErrorPage from './components/ErrorBoundary/TestErrorPage';

const HomePage = lazy(() => import('./pages/Home'));
const ReduxExamplePage = lazy(() => import('./pages/ReduxExample'));

export type IRoutesModel<T = any> = {
  to: string;
  text: string;
  activeNames: string[];
  Component: ComponentType<T>;
};

export const routes: IRoutesModel[] = [
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
    text: 'Error',
    activeNames: ['/error'],
    Component: TestErrorPage,
  },
];
