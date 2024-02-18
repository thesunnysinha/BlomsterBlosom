import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LoginSignupPage from "./components/LoginSignupPage";
import HomeComponent from "./components/HomeComponent";

const App = () => {
  const [accessToken, setAccessToken] = useState(null);

  const [role,setRole] = useState(null);

  const [username,setUsername] = useState(null);

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("access_token");
    const storedRole = localStorage.getItem("role")
    const storedUsername = localStorage.getItem("username")
    setRole(storedRole);
    setAccessToken(storedAccessToken);
    setUsername(storedUsername);
  }, []);

  const PrivateRoute = () => {
    return accessToken && role ? ( <HomeComponent role = {role}/>) : (<LoginSignupPage setAccessToken={setAccessToken} />);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout accessToken={accessToken} setAccessToken={setAccessToken} username={username}/>}>

            <Route index element={
              <PrivateRoute />
            } />
        </Route>

      </Routes>
    </Router>
  );
};

export default App;
