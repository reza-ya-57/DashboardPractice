import { Box, Typography } from '@mui/material';
import AdminNav from '../../components/adminNav';

function AdminSidebar() {
  return (
    <Box
      sx={{
        height: '100%',
      }}
    >
      <Box
        sx={{
          paddingY: '16px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            gap: '16px',
          }}
        >
          <Typography variant="h4" fontWeight={'700'}>
            ISQI
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: ` #d0d0d0`,
          borderRadius: '4px',
          height: '2px',
        }}
      ></Box>
      <AdminNav />
    </Box>
  );
}

export default AdminSidebar;
