'use client';
import { AppBar, Link, styled, Toolbar, Typography } from '@mui/material';

const NextLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: 'inherit',
  }
});

const AppToolbar = () => {
  return (
    <AppBar position="sticky" sx={{mb: 2 }}>
      <Toolbar sx={{background: '#69839DFF'}}>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          <NextLink href="/">URL shortener</NextLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;