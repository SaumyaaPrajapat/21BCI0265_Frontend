import React from "react";
import { Typography, Divider, Box } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";

const SecHeader = () => {
  return (
    <Box sx={{ padding: "16px" }}>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ fontWeight: "bold", marginBottom: "12px", paddingLeft: "16px" }}
        gutterBottom
      >
        About 159 Trademarks found for “nike”
      </Typography>
      <Divider sx={{ height: "1px", background: "#E7E6E6" }} />
      <Box
        sx={{
          padding: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ fontWeight: "bold", marginRight: "12px" }} // Add margin-right to space out from the boxes
            gutterBottom
          >
            Also try searching for
          </Typography>
          <Box sx={{ display: "flex", gap: "12px" }}>
            <Box
              sx={{
                padding: "8px 16px",
                background: "#FEF7F0",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                border: "2px solid #E7760E",
                color: "#E7760E",
              }}
            >
              nike*
            </Box>
            <Box
              sx={{
                padding: "8px 16px",
                background: "#FEF7F0",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                border: "2px solid #E7760E",
                color: "#E7760E",
              }}
            >
              *ike
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginRight: "20px",
          }}
        >
          <Box
            sx={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "2px solid #C8C8C8",
              cursor: "pointer",
              color: "#575757",
            }}
          >
            <FilterAltOutlinedIcon
              sx={{ marginRight: "4px", fontSize: "18px" }}
            />
            Filter
          </Box>
          <Box
            sx={{
              padding: "8px 8px",
              borderRadius: "50%",
              border: "2px solid #C8C8C8",
              cursor: "pointer",
              color: "#575757",
            }}
          >
            <ShareOutlinedIcon sx={{ fontSize: "18px" }} />
          </Box>
          <Box
            sx={{
              padding: "8px 8px",
              borderRadius: "50%",
              border: "2px solid #C8C8C8",
              cursor: "pointer",
              color: "#575757",
            }}
          >
            <SortOutlinedIcon sx={{ fontSize: "18px" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SecHeader;
