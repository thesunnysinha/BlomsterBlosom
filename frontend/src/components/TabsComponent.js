import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

const TabsComponent = ({setAccessToken}) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
        <Tab label="Login" />
        <Tab label="Sign Up" />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <LoginPage setAccessToken= {setAccessToken}/>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <SignUpPage />
      </TabPanel>
    </>

  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

export default TabsComponent;
