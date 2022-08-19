// material-ui
import { useTheme } from '@mui/material/styles';
import { AppBar, AppBarProps, IconButton, Toolbar, useMediaQuery } from '@mui/material';
// project import
import HeaderContent from './HeaderContent';
// assets
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import AppBarStyled from './AppBarStyled';
interface HeaderProps {
  open: boolean;
  handleDrawerToggle: () => void;
}
const Header = ({ open, handleDrawerToggle }: HeaderProps) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
  const iconBackColor = 'grey.100';
  const iconBackColorOpen = 'grey.200';
  console.log(open);

  // common header
  const mainHeader = (
    <Toolbar>
      <IconButton
        disableRipple
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        edge="start"
        color="secondary"
        sx={{
          color: 'text.primary',
          bgcolor: open ? iconBackColorOpen : iconBackColor,
          ml: { xs: 0, lg: -2 },
        }}
      >
        {!open ? <MenuOpenOutlinedIcon /> : <MenuOutlinedIcon />}
      </IconButton>
      <HeaderContent />
    </Toolbar>
  );
  // app-bar params
  interface appBarProps extends AppBarProps {}
  const appBar: appBarProps = {
    position: 'fixed',
    color: 'inherit',
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      boxShadow: theme.shadows[1],
    },
  };

  return (
    <>
      {!matchDownMD ? (
        <AppBarStyled open={open} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
};

export default Header;
