import { Box, Button } from '@mui/material';
import { useState } from 'react';
import AdminHeader from './header';
import AdminSidebar from './sidebar';
import { Outlet } from 'react-router-dom';
import { theme } from '../../theme/muiTheme';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AdminCloseNav from '../../components/adminCloseNav';

function AdminLayout() {
  const [sidebarIsOpen, setSideBarIsOpen] = useState(true);
  const handleSidebar = () => {
    setSideBarIsOpen((prev) => !prev);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '16px',
        height: '100vh',
        padding: '16px',
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Box
        sx={{
          width: `${sidebarIsOpen ? '22%' : '8%'}`,
          backgroundColor: '#F0F3F4',
          borderRadius: '12px',
          overflow: 'hidden',
          padding: '12px',
          transition: 'all 0.5s',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button sx={{ margin: '0 auto' }} onClick={handleSidebar}>
            {sidebarIsOpen ? <CloseIcon /> : <MenuIcon />}
          </Button>
        </Box>
        {sidebarIsOpen ? <AdminSidebar /> : <AdminCloseNav />}
      </Box>
      <Box
        sx={{
          width: `${sidebarIsOpen ? '78%' : '92%'}`,
        }}
      >
        <AdminHeader />
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default AdminLayout;
