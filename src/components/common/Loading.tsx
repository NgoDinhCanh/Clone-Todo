import { Box, CircularProgress } from "@mui/material";

export interface LoadingProps {
  fullHeight: boolean;
}

export default function Loading(props: LoadingProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: props.fullHeight ? "100vh" : "100%",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
