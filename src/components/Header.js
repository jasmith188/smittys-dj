import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  const displayDesktop = () => {
    return <Toolbar>{smittsDjLogo}</Toolbar>;
  };

  const smittsDjLogo = (
    <Typography variant="h6" component="h1">
      Smitty's DJ
    </Typography>
  );

  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
};

export default Header;
