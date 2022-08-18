import { Box, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { openDrawer, openMenu } from 'redux/features/menu';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import Header from 'components/common/Header';
import Loading from 'components/common/Loading';
import Sidebar from 'components/common/Sidebar';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import authUtils from 'utils/authUtils';
import { setUser } from 'redux/features/user';

const AppLayout = () => {
  const navigate = useNavigate();
  const { drawerOpen } = useAppSelector(openMenu);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'));
  useEffect(() => {
    const checkAuth = async () => {
      const user = await authUtils.isAuthenticated();
      console.log(user);
      if (!user) {
        navigate('/login');
      } else {
        //save user
        dispatch(setUser(user));
        setLoading(false);
      }
    };
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);
  // drawer toggler
  const [open, setOpen] = useState<boolean>(drawerOpen);
  const handleDrawerToggle = () => {
    setOpen(!open);
    dispatch(openDrawer({ drawerOpen: !open }));
  };
  useEffect(() => {
    setOpen(!matchDownLG);
    dispatch(openDrawer({ drawerOpen: !matchDownLG }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownLG]);

  useEffect(() => {
    if (open !== drawerOpen) setOpen(drawerOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerOpen]);
  return loading ? (
    <Loading fullHeight />
  ) : (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Toolbar />
        {/* <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} /> */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
