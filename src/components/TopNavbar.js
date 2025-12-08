import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
  Container
} from "@mui/material";
import {
  Brightness4 as Brightness4Icon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  Code as CodeIcon,
  Email as EmailIcon
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const TopNavbar = () => {
  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setTextColor] = useState("black");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: <HomeIcon /> },
    { path: "/about", label: "About", icon: <PersonIcon /> },
    { path: "/projects", label: "Projects", icon: <WorkIcon /> },
    { path: "/skills", label: "Skills", icon: <CodeIcon /> },
    { path: "/contact", label: "Contact", icon: <EmailIcon /> }
  ];

  // Hook to detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("rgba(0, 0, 0, 0.95)");
        setTextColor("white");
      } else {
        setBgColor("transparent");
        setTextColor("black");
      }
    };



    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  // Desktop Navigation
  const DesktopNav = () => (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          style={{ textDecoration: 'none' }}
        >
          <Button
            color="inherit"
            sx={{
              color: textColor,
              fontWeight: isActivePage(item.path) ? 600 : 400,
              position: 'relative',
              px: 2,
              py: 1,
              borderRadius: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: textColor === 'white' 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(0, 0, 0, 0.05)',
                transform: 'translateY(-1px)'
              },
              '&::after': isActivePage(item.path) ? {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80%',
                height: '2px',
                backgroundColor: textColor === 'white' ? '#fff' : '#1976d2',
                borderRadius: '1px'
              } : {}
            }}
          >
            {item.label}
          </Button>
        </Link>
      ))}
      
      <IconButton
        color="inherit"
        sx={{ 
          color: textColor,
          ml: 1,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: textColor === 'white' 
              ? 'rgba(255, 255, 255, 0.1)' 
              : 'rgba(0, 0, 0, 0.05)',
            transform: 'rotate(180deg)'
          }
        }}
      >
        <Brightness4Icon />
      </IconButton>
    </Box>
  );

  // Mobile Navigation
  const MobileNav = () => (
    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
      <IconButton
        color="inherit"
        sx={{ 
          color: textColor,
          mr: 1,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: textColor === 'white' 
              ? 'rgba(255, 255, 255, 0.1)' 
              : 'rgba(0, 0, 0, 0.05)'
          }
        }}
      >
        <Brightness4Icon />
      </IconButton>
      
      <IconButton
        color="inherit"
        onClick={handleMobileMenuToggle}
        sx={{ 
          color: textColor,
          transition: 'all 0.3s ease',
          transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          '&:hover': {
            backgroundColor: textColor === 'white' 
              ? 'rgba(255, 255, 255, 0.1)' 
              : 'rgba(0, 0, 0, 0.05)'
          }
        }}
      >
        {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </Box>
  );

  
  const MobileDrawer = () => (
    <Drawer
      anchor="left"
      open={mobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: '100%',
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.95)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          p: 4,
          animation: mobileMenuOpen ? 'fadeIn 0.4s ease' : 'none',
        },
        '@keyframes fadeIn': {
          '0%': { opacity: 0, transform: 'translateX(-100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      }}
    >
      {/* Logo at top */}
      <Typography
        variant="h5"
        sx={{ fontWeight: 'bold', mb: 6 }}
        component={Link}
        to="/"
        onClick={handleMobileMenuClose}
        style={{ textDecoration: 'none', color: 'white' }}
      >
        JONNO.
      </Typography>
  
      {/* Nav Items */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          width: '100%',
        }}
      >
        {navItems.map((item, index) => (
          <Typography
            key={item.path}
            component={Link}
            to={item.path}
            onClick={handleMobileMenuClose}
            sx={{
              color: isActivePage(item.path) ? 'white' : '#999',
              textDecoration: 'none',
              fontSize: '1.5rem',
              fontFamily: 'monospace',
              transition: 'color 0.3s',
              '&:hover': { color: 'white' },
              animation: mobileMenuOpen
                ? `slideIn 0.5s ease ${index * 0.1}s both`
                : 'none',
              '@keyframes slideIn': {
                '0%': { opacity: 0, transform: 'translateY(20px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <span style={{ color: '#bbb', marginRight: 8 }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            : {item.label}
          </Typography>
        ))}
      </Box>
  
      {/* Close Button at Bottom */}
      <Box sx={{ flexGrow: 1 }} />
      <IconButton
        onClick={handleMobileMenuClose}
        sx={{
          color: '#bbb',
          '&:hover': { color: 'white' },
        }}
      >
        <CloseIcon fontSize="large" />
      </IconButton>
    </Drawer>
  );
  

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{ 
          backgroundColor: bgColor, 
          transition: 'all 0.3s ease',
          backdropFilter: bgColor !== 'transparent' ? 'blur(10px)' : 'none'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar 
            sx={{ 
              justifyContent: "space-between",
              minHeight: { xs: 64, sm: 70 },
              px: { xs: 1, sm: 2 }
            }}
          >
            <Typography 
              variant="h6" 
              component={Link}
              to="/"
              sx={{ 
                fontWeight: "bold", 
                color: textColor,
                textDecoration: 'none',
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              JONNO.
            </Typography>

            {/* Desktop Navigation */}
            <DesktopNav />

            {/* Mobile Navigation */}
            <MobileNav />
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <MobileDrawer />
    </>
  );
};

export default TopNavbar;