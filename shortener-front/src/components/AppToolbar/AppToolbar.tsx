'use client';
import { AppBar, Link, Toolbar, Typography } from '@mui/material';



const AppToolbar = () => {
  return (
    <AppBar position="sticky" sx={{mb: 2}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          <Link href="/">CompStore</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;