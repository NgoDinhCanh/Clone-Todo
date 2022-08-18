// material-ui
import { useTheme } from '@mui/material/styles';
import { AppBar, AppBarProps, Chip, IconButton, Stack, Toolbar } from '@mui/material';
// project import
import HeaderContent from './HeaderContent';
// assets
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import Logo from 'components/Logo/Logo';
interface HeaderProps {
  open: boolean;
  handleDrawerToggle: () => void;
}
const Header = ({ open, handleDrawerToggle }: HeaderProps) => {
  const theme = useTheme();
  const iconBackColor = 'grey.100';
  const iconBackColorOpen = 'grey.200';

  // common header
  const mainHeader = (
    <Toolbar>
      <Stack direction="row" spacing={1} alignItems="center">
        <Logo />
        <Chip
          label={process.env.REACT_APP_VERSION}
          size="small"
          sx={{ height: 16, '& .MuiChip-label': { fontSize: '0.625rem', py: 0.25 } }}
          component="a"
          href="https://github.com/codedthemes/mantis-free-react-admin-template"
          target="_blank"
          clickable
        />
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
          {!open ? <MenuOutlinedIcon /> : <MenuOpenOutlinedIcon />}
        </IconButton>
      </Stack>

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
      <AppBar {...appBar}>{mainHeader}</AppBar>
    </>
  );
};

export default Header;
