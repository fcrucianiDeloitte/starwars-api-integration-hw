import { ReactNode } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import "./NavigatorLayout.css";
import { useNavigate } from "react-router-dom";

type NavigatorLayoutParamType = {
  children?: ReactNode;
};

const NavigatorLayout = ({ children }: NavigatorLayoutParamType) => {
  const navigate = useNavigate();

  return (
    <Box>
      <IconButton className="back-button" onClick={() => {
        navigate('/');
      }}>
        <ArrowCircleLeftTwoToneIcon color="primary" fontSize="large"></ArrowCircleLeftTwoToneIcon>
      </IconButton>
      <Box>{children}</Box>
    </Box>
  );
};

export default NavigatorLayout;
