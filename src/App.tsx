import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PageNotFound from './pages/PageNotFound';
import { routes } from './routes';
import { Suspense } from 'react';
import CombinedLoaders from './components/Loaders/CombinedLoaders';
import './i18n';

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<CombinedLoaders />}>
        <Routes>
          {routes.map(({ to: path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
