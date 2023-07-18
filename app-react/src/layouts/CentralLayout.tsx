import { ReactNode } from "react";
import { Box, Container, Paper, useTheme } from "@mui/material";

type CentralLayoutParamType = {
  children?: ReactNode;
};

const CentralLayout = ({ children }: CentralLayoutParamType) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", minHeight: '100vh', background: theme.palette.primary.main, paddingTop: 5, paddingBottom: 5 }}>
      <Container maxWidth='lg'>
        <Paper square={true} elevation={5} sx={{ p: 3, overflow: 'auto' }}>
          {children}
        </Paper>
      </Container>
    </Box>
  );
};

export default CentralLayout;
