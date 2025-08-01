import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import ServiceRegionPage from './pages/ServiceRegionPage';
import ServiceContentPage from './pages/ServiceContentPage';
import AllServicesPage from './pages/AllServicesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'galeri', element: <GalleryPage /> },
      { path: 'yorumlar', element: <ReviewsPage /> },
      { path: 'hizmet-bolgesi/:slug', element: <ServiceRegionPage /> },
      { path: 'hizmet-alanlari/:slug', element: <ServiceContentPage /> },
      { path: 'hizmetler', element: <AllServicesPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;