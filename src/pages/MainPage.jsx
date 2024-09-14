import React, { useState } from "react";
import {
  Grid,
  Typography,
  InputAdornment,
  InputBase,
  Box,
  styled,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import MetaLogoDetails from "./MetaLogoDetails";
import searchIcon from "../assets/icons_search.png";

const MainPageLayout = () => {
  const [view, setView] = useState("grid");
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("Owners");

  const handleToggle = (selectedView) => {
    setView(selectedView);
  };

  const handleTagClick = (tag) => {
    console.log(`Clicked tag: ${tag}`);
    setSelectedTag(tag);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const SearchContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    background: "#fff",
    borderRadius: 8,
    border: "1px solid #D4D4D4",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "4px 8px",
    width: "100%",
    maxWidth: "500px",
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

  const getTagStyle = (tag) => ({
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    borderRadius: "8px",
    border: `1px solid ${selectedTag === tag ? "#4380EC" : "#D1D1D1"}`,
    backgroundColor: selectedTag === tag ? "#EEF4FF" : "white",
    cursor: "pointer",
  });

  return (
    <Box sx={{ display: "flex", padding: "16px" }}>
      {/* Left section */}
      <MetaLogoDetails />

      {/* Right section */}
      <Box
        sx={{
          width: "25%",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* Status */}
        <Box
          sx={{
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "white",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="body2"
            color="textPrimary"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Status
          </Typography>

          {/* Tags Section */}
          <Box sx={{ marginTop: "16px" }}>
            <Grid container spacing={2}>
              {/* All Tag */}
              <Grid item xs="auto">
                <Box
                  sx={getTagStyle("All")}
                  onClick={() => handleTagClick("All")}
                >
                  <Typography variant="body2" color="textPrimary">
                    All
                  </Typography>
                </Box>
              </Grid>

              {/* Registered Tag */}
              <Grid item xs="auto">
                <Box
                  sx={getTagStyle("Registered")}
                  onClick={() => handleTagClick("Registered")}
                >
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "green",
                      marginRight: "8px",
                    }}
                  />
                  <Typography variant="body2" color="textPrimary">
                    Registered
                  </Typography>
                </Box>
              </Grid>

              {/* Pending Tag */}
              <Grid item xs="auto">
                <Box
                  sx={getTagStyle("Pending")}
                  onClick={() => handleTagClick("Pending")}
                >
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "yellow",
                      marginRight: "8px",
                    }}
                  />
                  <Typography variant="body2" color="textPrimary">
                    Pending
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: 0 }}>
              {/* Abandoned Tag */}
              <Grid item xs="auto">
                <Box
                  sx={getTagStyle("Abandoned")}
                  onClick={() => handleTagClick("Abandoned")}
                >
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "red",
                      marginRight: "8px",
                    }}
                  />
                  <Typography variant="body2" color="textPrimary">
                    Abandoned
                  </Typography>
                </Box>
              </Grid>

              {/* Others Tag */}
              <Grid item xs="auto">
                <Box
                  sx={getTagStyle("Others")}
                  onClick={() => handleTagClick("Others")}
                >
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "blue",
                      marginRight: "8px",
                    }}
                  />
                  <Typography variant="body2" color="textPrimary">
                    Others
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "white",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "6px",
            }}
          >
            {["Owners", "Law Firms", "Attorneys"].map((category) => (
              <Box
                key={category}
                sx={{
                  fontWeight: selectedCategory === category ? "bold" : "normal",
                  color: selectedCategory === category ? "black" : "#3F3F3F",
                  cursor: "pointer",
                  fontSize: "14px",
                  padding: "4px 8px",
                }}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "4px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              cursor: "pointer",
              marginBottom: "15px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left:
                  selectedCategory === "Owners"
                    ? 0
                    : selectedCategory === "Law Firms"
                    ? "33.33%"
                    : "66.66%",
                width: "33.33%",
                height: "100%",
                backgroundColor: "#000000",
                borderRadius: "8px",
                transition: "left 0.3s ease",
              }}
            />
          </Box>

          <SearchContainer>
            <StyledInputAdornment position="start">
              <img
                src={searchIcon}
                alt="Search Icon"
                style={{ width: 20, height: 20, marginRight: 4 }}
              />
            </StyledInputAdornment>
            <SearchInput
              placeholder="Search Owners"
              inputProps={{
                "aria-label": "search",
              }}
            />
          </SearchContainer>
          <div style={{ marginTop: 10, color: "#3F3F3F", fontSize: "14px" }}>
            <FormControlLabel control={<Checkbox />} label="Tesla, Inc." />
            <FormControlLabel control={<Checkbox />} label="LEGALFORCE RAPC." />
            <FormControlLabel control={<Checkbox />} label="SpaceX Inc." />{" "}
            <br />
            <FormControlLabel control={<Checkbox />} label="SpaceX Inc." />
          </div>
        </Box>

        {/* Display Box */}
        <Box
          sx={{
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "white",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            width: "100%",
          }}
        >
          <Typography
            variant="body2"
            color="textPrimary"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Display
          </Typography>

          <Box
            sx={{
              padding: "8px",
              display: "flex",
              position: "relative",
              borderRadius: "8px",
              width: "200px",
              height: "40px",
              backgroundColor: "#F1F1F1",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "2px",
                bottom: "2px",
                left: "2px",
                right: "2px",
                width: "calc(50% - 2px)",
                height: "calc(100% - 4px)",
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                transition: "transform 0.3s ease",
                transform:
                  view === "grid" ? "translateX(0)" : "translateX(100%)",
              }}
            />

            <Box
              onClick={() => handleToggle("grid")}
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
                fontWeight: "bold",
              }}
            >
              <Typography variant="body2" color="textPrimary" gutterBottom>
                Grid View
              </Typography>
            </Box>

            <Box
              onClick={() => handleToggle("list")}
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
                fontWeight: "bold",
              }}
            >
              <Typography variant="body2" color="textPrimary" gutterBottom>
                List View
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainPageLayout;
