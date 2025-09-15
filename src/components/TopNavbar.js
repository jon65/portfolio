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

  // Mobile Drawer
  const MobileDrawer = () => (
    <Drawer
      anchor="top"
      open={mobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: '100%',
          height: '100vh',
          background: 'rgba(44, 44, 44, 0.95)',
          backdropFilter: 'blur(10px)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0
        },
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(8px)'
        }
      }}
    >
      {/* Logo at top */}
      <Box sx={{ 
        position: 'absolute', 
        top: 60, 
        textAlign: 'center' 
      }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          JONNO.
        </Typography>
      </Box>
      
      {/* Centered Navigation Items */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: 3,
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        maxWidth: 400
      }}>
        {navItems.map((item, index) => (
          <Box
            key={item.path}
            component={Link}
            to={item.path}
            onClick={handleMobileMenuClose}
            sx={{
              color: 'white',
              textDecoration: 'none',
              py: 2,
              px: 6,
              borderRadius: 4,
              transition: 'all 0.4s ease',
              backgroundColor: isActivePage(item.path) 
                ? 'rgba(255, 255, 255, 0.2)' 
                : 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 250,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              animation: mobileMenuOpen ? `slideInScale 0.5s ease ${index * 0.1}s both` : 'none',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                transform: 'translateY(-5px) scale(1.05)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              },
              '@keyframes slideInScale': {
                '0%': {
                  opacity: 0,
                  transform: 'translateY(30px) scale(0.8)'
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateY(0) scale(1)'
                }
              }
            }}
          >
            <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
              {item.icon}
            </Box>
            <Typography
              sx={{
                fontWeight: isActivePage(item.path) ? 600 : 400,
                fontSize: '1.2rem',
                textAlign: 'center'
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Cancel Button at Bottom */}
      <Box sx={{ 
        position: 'absolute', 
        bottom: 40, 
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <IconButton
          onClick={handleMobileMenuClose}
          sx={{
            color: 'white',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            width: 56,
            height: 56,
            borderRadius: '50%',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: 'rgba(255, 255, 255, 0.6)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              transform: 'translateY(-2px) scale(1.1)',
              '& .MuiSvgIcon-root': {
                transform: 'rotate(90deg)'
              }
            },
            '& .MuiSvgIcon-root': {
              fontSize: '1.5rem',
              transition: 'transform 0.3s ease'
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
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