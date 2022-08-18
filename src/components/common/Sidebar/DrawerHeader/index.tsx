// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Chip } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from 'components/Logo/Logo';

interface DrawerHeaderProps {
  open: boolean;
}
const DrawerHeader = ({ open }: DrawerHeaderProps) => {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Logo />
        <Chip
          label="2022"
          size="small"
          sx={{
            height: 16,
            '& .MuiChip-label': { fontSize: '0.625rem', py: 0.25 },
          }}
          component="a"
          href="https://www.tlcmodular.com/"
          target="_blank"
          clickable
        />
      </Stack>
    </DrawerHeaderStyled>
  );
};
export default DrawerHeader;
