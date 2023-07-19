import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { theme } from '../theme/muiTheme';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

type IMood = {
  btn1: 'secondary' | 'inherit';
  btn2: 'secondary' | 'inherit';
  btn3: 'secondary' | 'inherit';
};

function AdminNav() {
  const [mood, setMood] = useState<IMood>({
    btn1: 'inherit',
    btn2: 'inherit',
    btn3: 'inherit',
  });
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const targetName = (e.currentTarget as HTMLButtonElement).name;
    console.log;
    const initState: IMood = {
      btn1: 'inherit',
      btn2: 'inherit',
      btn3: 'inherit',
    };
    initState[targetName as keyof IMood] = 'secondary';
    setMood(initState);
  };
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    switch (pathname) {
      case '/admin/landing':
        setMood((prev) => {
          return { ...prev, btn1: 'secondary' };
        });
        break;
      case '/admin/product':
        setMood((prev) => {
          return { ...prev, btn2: 'secondary' };
        });
        break;
      case '/admin/products':
        setMood((prev) => {
          return { ...prev, btn3: 'secondary' };
        });
        break;
      default:
        break;
    }
  }, [pathname]);
  return (
    <Box
      sx={{
        padding: '10px 6px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginY: '32px',
      }}
    >
      <Link
        style={{ color: theme.palette.secondary.main }}
        to={'/admin/landing'}
      >
        <Button
          sx={{ height: '45px', boxShadow: 'none' }}
          onClick={(e) => {
            handleClick(e);
          }}
          fullWidth
          color={mood.btn1}
          variant="contained"
          name="btn1"
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              width: '100%',
              gap: '16px',
            }}
          >
            <HomeIcon />
            <Typography>خانه</Typography>
          </Box>
        </Button>
      </Link>

      <Link
        style={{ color: theme.palette.secondary.main }}
        to={'/admin/product'}
      >
        <Button
          sx={{ height: '45px', boxShadow: 'none' }}
          fullWidth
          onClick={(e) => {
            handleClick(e);
          }}
          name="btn2"
          color={mood.btn2}
          variant="contained"
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              width: '100%',
              gap: '16px',
            }}
          >
            <ShoppingCartIcon />
            <Typography>محصولات</Typography>
          </Box>
        </Button>
      </Link>
      {/* <Link to={'/landing'}>
        <Button
          fullWidth
          onClick={(e) => {
            handleClick(e);
          }}
          name="btn3"
          color={mood.btn3}
          variant="contained"
        >
          xxx
        </Button>
      </Link> */}
    </Box>
  );
}

export default AdminNav;
