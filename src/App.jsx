import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
// ServicePage gibi dinamik sayfalar gelecekte eklenebilir.
// import ServicePage from './pages/ServicePage';
import ReviewsPage from './pages/ReviewsPage'; // YENİ: Import et
import ServiceRegionPage from './pages/ServiceRegionPage';
import ServiceContentPage from './pages/ServiceContentPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'galeri', element: <GalleryPage /> },
      { path: 'yorumlar', element: <ReviewsPage /> },
      { path: 'hizmet-bolgesi/:slug', element: <ServiceRegionPage /> },
      // YENİ DİNAMİK HİZMET YOLU
      {
        path: 'hizmet-alanlari/:slug',
        element: <ServiceContentPage />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;