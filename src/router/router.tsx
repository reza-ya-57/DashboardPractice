import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminLayout from '../layout/adminLayout/adminLayout';
import AdminLanding from '../Pages/admin/adminLanding';
import Login from '../Pages/auth/login';
import { Box } from '@mui/material';

const router = createBrowserRouter([
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: '/admin/landing',
        element: <AdminLanding />,
      },
      {
        path: '/admin/product',
        element: (
          <Box sx={{ width: '100%', height: '100%', bgcolor: 'red' }}>
            hello from admin Product
          </Box>
        ),
      },
    ],
  },
  {
    path: '/auth',
    children: [
      {
        path: '/auth/login',
        element: <Login />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
