import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';

const Home = () => {
  const createBoard = () => {};
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <LoadingButton variant="outlined" color="success" onClick={createBoard}>
        Click here to create your first board
      </LoadingButton>
    </Box>
  );
};

export default Home;
