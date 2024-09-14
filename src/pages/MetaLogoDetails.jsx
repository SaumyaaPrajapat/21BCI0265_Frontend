import React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
import logo from "../assets/Mark.png";
import ReverseLogo from "../assets/reverse.png";
import ChemicalLogo from "../assets/chemicalLogo.png";
import dot from "../assets/dot.png";

const MetaLogoDetails = () => {
  const repeatCount = 9;

  return (
    <Box sx={{ width: "75%", paddingRight: "16px" }}>
      <Box
        sx={{
          padding: "8px",
        }}
      >
        <Grid container paddingLeft="16px">
          <Grid item xs={2.5}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                marginBottom: "3px",
              }}
              gutterBottom
            >
              Mark
            </Typography>
          </Grid>
          <Grid item xs={2.5}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                marginBottom: "3px",
              }}
              gutterBottom
            >
              Details
            </Typography>
          </Grid>
          <Grid item xs={2.5}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                marginBottom: "3px",
              }}
              gutterBottom
            >
              Status
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                marginBottom: "3px",
              }}
              gutterBottom
            >
              Class/Description
            </Typography>
          </Grid>
        </Grid>

        <Divider
          sx={{ height: "1px", background: "#E7E6E6", marginTop: "16px" }}
        />

        {[...Array(repeatCount)].map((_, index) => (
          <Grid container paddingTop="16px" key={index}>
            <Grid item xs={2.5}>
              <Box
                sx={{
                  width: "158px",
                  height: "120px",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={logo}
                  alt="Mark Logo"
                  style={{
                    width: "54.35px",
                    height: "61px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={2.5}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#1A1A1A",
                }}
              >
                Meta Logo
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                  color: "#1A1A1A",
                  marginTop: "4px",
                }}
              >
                FACEBOOK INC.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  marginTop: "30px",
                  color: "#1A1A1A",
                }}
              >
                88713620
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  color: "#1A1A1A",
                  marginTop: "4px",
                }}
              >
                26th Jan 2020
              </Typography>
            </Grid>

            <Grid item xs={2.5}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Box
                  sx={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#128807",
                    borderRadius: "50%",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#41B65C",
                  }}
                >
                  Live/Registered
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "12px",
                  color: "#1A1A1A",
                  marginTop: "4px",
                }}
              >
                on <span style={{ fontWeight: "bold" }}>26 Jun 2020</span>{" "}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "45px",
                }}
              >
                <Box
                  component="img"
                  src={ReverseLogo}
                  alt="Reverse Logo"
                  sx={{
                    width: "16px",
                    height: "16px",
                    marginRight: "8px",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#1A1A1A",
                  }}
                >
                  26 Dec 2027
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                  color: "#1A1A1A",
                }}
              >
                Computer services, Social Media, <br />
                Networking, Virtual Communities,Community <br />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "16px",
                  }}
                >
                  <Box
                    component="img"
                    src={ChemicalLogo}
                    alt="Chemical Logo"
                    sx={{
                      width: "21px",
                      height: "21px",
                      marginRight: "8px",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      color: "#1A1A1A",
                    }}
                  >
                    Class 45
                  </Typography>
                  <Box
                    component="img"
                    src={ChemicalLogo}
                    alt="Chemical Logo"
                    sx={{
                      width: "21px",
                      height: "21px",
                      marginLeft: "8px",
                      marginRight: "8px",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      color: "#1A1A1A",
                    }}
                  >
                    Class 8
                  </Typography>
                  <Box
                    component="img"
                    src={ChemicalLogo}
                    alt="Chemical Logo"
                    sx={{
                      width: "21px",
                      height: "21px",
                      marginLeft: "8px",
                      marginRight: "8px",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      color: "#1A1A1A",
                    }}
                  >
                    Class 8
                  </Typography>
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#EAEAEA",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "8px",
                    }}
                  >
                    <Box
                      component="img"
                      src={dot}
                      alt="dot"
                      sx={{
                        width: "10px",
                        height: "2px",
                      }}
                    />
                  </Box>
                </Box>
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default MetaLogoDetails;
