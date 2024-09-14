import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Button,
  styled,
  InputAdornment,
  Box,
} from "@mui/material";
import logo from "../assets/Trademarkia.png";
import searchIcon from "../assets/icons_search.png";

const Logo = styled("img")({
  height: 20,
  marginRight: 10,
  marginLeft: 20,
});

const SearchContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #D4D4D4",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  padding: "4px 8px",
  width: "500px",
  height: "40px",
});

const SearchInput = styled(InputBase)(({ theme }) => ({
  marginLeft: 0,
  flex: 1,
  padding: "8px 12px",
  border: "none",
  height: "100%",
  "&:focus": {
    outline: "none",
  },
}));

const StyledInputAdornment = styled(InputAdornment)(({ theme }) => ({
  margin: 0,
  padding: 0,
}));

const SearchButton = styled(Button)(({ theme }) => ({
  background: "#4380EC",
  color: "#fff",
  marginLeft: 8,
  textTransform: "none",
  height: "40px",
  "&:hover": {
    background: "#3C7AE9",
  },
}));

const Header = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          background: "#F8FAFE",
          margin: 0,
          padding: 0,
        }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <Logo src={logo} alt="Trademarkia Logo" />
          </IconButton>
          <SearchContainer>
            <StyledInputAdornment position="start">
              <img
                src={searchIcon}
                alt="Search Icon"
                style={{ width: 20, height: 20, marginRight: 4 }}
              />
            </StyledInputAdornment>
            <SearchInput
              placeholder="Search Trademark Here eg. Mickey Mouse"
              inputProps={{
                "aria-label": "search",
              }}
            />
          </SearchContainer>
          <SearchButton variant="contained">Search</SearchButton>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          height: "6px",
          backgroundColor: "#EAF1FF",
          width: "100%",
        }}
      />
    </>
  );
};

export default Header;
