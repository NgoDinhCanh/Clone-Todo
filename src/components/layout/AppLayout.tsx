import { Box } from "@mui/material";
import Loading from "components/common/Loading";
import Sidebar from "components/common/Sidebar";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import authUtils from "utils/authUtils";

const AppLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await authUtils.isAuthenticated();
      if (!user) navigate("/");
      else setLoading(false);
    };
    checkAuth();
  }, [navigate]);
  console.log(loading);
  return loading ? (
    <Loading fullHeight />
  ) : (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Sidebar />
      <Box
        sx={{
          flexGrow: 1,
          p: 1,
          width: "max-content",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
