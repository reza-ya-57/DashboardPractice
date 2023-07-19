import { Box, Typography } from '@mui/material';
import { theme } from '../../theme/muiTheme';

import LoginFrom from '../../components/LoginFrom';
function Login() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Box
        sx={{
          width: '90%',
          height: '90%',
          backgroundColor: 'white',
          display: 'flex',
          overflow: 'hidden',
          borderRadius: '12px',
        }}
      >
        <Box
          sx={{
            width: '50%',
            padding: '128px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{ width: '100%', paddingY: 4 }}
            align="left"
            variant="h4"
          >
            ورود
          </Typography>
          <LoginFrom />
        </Box>

        <Box
          component={'img'}
          alt="login-img"
          src="/white.jpg"
          sx={{ width: '50%', objectFit: 'cover' }}
        ></Box>
      </Box>
    </Box>
  );
}

export default Login;
