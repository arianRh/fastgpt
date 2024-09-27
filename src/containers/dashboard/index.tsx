import { Box, Button, Grid, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useRouter } from "next/router";
import Image from "next/image";

export const DashboardPage = () => {
  const { push } = useRouter();

  return (
    <Grid
      container
      px={2}
      sx={{
        height: "calc(100vh - 165px)",
        overflowY: "overlay",
        overflowX: "hidden",
        mt: "105px",
        pt: { md: "13px", xs: "32px" },
        pb: { xs: "42px", md: 0 },
        pl: "90px",
      }}
    >
      <Grid item md={6}>
        <Grid container>
          <Grid
            md={6}
            sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                bgcolor: "#2FB14D66",
                border: "1px solid #2FB14D",
                borderRadius: "15px",
                py: "15px",
                px: "10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  width={45}
                  height={45}
                  sx={{
                    borderRadius: "100%",
                    bgcolor: "#FF890D80",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ml: "10px",
                  }}
                >
                  <Image
                    src="/images/user.svg"
                    width={21}
                    height={28}
                    alt="user"
                  />
                </Box>
                <Typography>سلام</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                <Typography ml="10px">سلام چطور می توانم کمکتان کنم</Typography>
                <Image
                  src="/images/logo/logo.svg"
                  width={45}
                  height={45}
                  alt="user"
                />
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                bgcolor: "#2FB14D66",
                border: "1px solid #2FB14D",
                borderRadius: "15px",
                py: "15px",
                px: "10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  width={45}
                  height={45}
                  sx={{
                    borderRadius: "100%",
                    bgcolor: "#FF890D80",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ml: "10px",
                  }}
                >
                  <Image
                    src="/images/user.svg"
                    width={21}
                    height={28}
                    alt="user"
                  />
                </Box>
                <Typography>سلام</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                <Typography ml="10px">سلام چطور می توانم کمکتان کنم</Typography>
                <Image
                  src="/images/logo/logo.svg"
                  width={45}
                  height={45}
                  alt="user"
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              mr: "37px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: 250,
                bgcolor: "#2FB14D66",
                border: "1px solid #2FB14D",
                borderRadius: "15px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "48px",
                  fontWeight: 400,
                  lineHeight: "75px",
                  textAlign: "center",
                }}
              >
                امروز
              </Typography>
              <Typography
                sx={{
                  fontSize: "128px",
                  fontWeight: 400,
                  lineHeight: "75px",
                  textAlign: "center",
                  mt: 4,
                  color: "white",
                }}
              >
                5
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: 250,
                bgcolor: "#2FB14D66",
                border: "1px solid #2FB14D",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "48px",
                  fontWeight: 400,
                  lineHeight: "75px",
                  textAlign: "center",
                }}
              >
                هفته
              </Typography>
              <Typography
                sx={{
                  fontSize: "128px",
                  fontWeight: 400,
                  lineHeight: "134px",
                  textAlign: "center",
                  mt: 2,
                  color: "white",
                }}
              >
                18
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6}>
        <Box
          sx={{
            width: "100%",
            // height: "100%",
            bgcolor: "#D9D9D933",
            border: "1px solid #FF890D",
            borderRadius: "15px",
            pt: "40px",
            pb: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: "22px",
            }}
          >
            <Box>
              <Box
                sx={{
                  bgcolor: "#D9D9D9",
                  py: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                }}
              >
                <Typography>اشتراک</Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "#2FB14D59",
                  borderRadius: "0px 0px 5px 5px",
                  border: "1px solid #2FB14D",
                  pt: 2,
                  pb: 3,
                  px: "13px",
                  width: "205px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#D9D9D9",
                    borderRadius: "10px",
                    height: "40px",
                    width: "205px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      width: "50px",
                      bgcolor: "#2FB14D",
                      height: "100%",
                      borderRadius: "0px 10px 10px 0px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      position: "absolute",
                      right: 0,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "11px",
                        fontWeight: 400,
                        lineHeight: "12.5px",
                      }}
                    >
                      شروع اشتراک
                    </Typography>
                  </Box>
                  <Typography sx={{ py: "6px", px: "20.5px", ml: -6 }}>
                    1403/5/22
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#D9D9D9",
                    borderRadius: "10px",
                    height: "40px",
                    width: "205px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    mt: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "50px",
                      bgcolor: "#2FB14D",
                      height: "100%",
                      borderRadius: "0px 10px 10px 0px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      position: "absolute",
                      right: 0,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "11px",
                        fontWeight: 400,
                        lineHeight: "12.5px",
                      }}
                    >
                      پایان اشتراک
                    </Typography>
                  </Box>
                  <Typography sx={{ py: "6px", px: "20.5px", ml: -6 }}>
                    1403/5/22
                  </Typography>
                </Box>
                <Typography sx={{ textAlign: "center", mt: 2 }}>
                  <span style={{ color: "#FF890D" }}>62</span> روز تا پایان
                  اشتراک شما باقیمانده است
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "Center" }}>
              <Box>
                <Typography>نام کاربر</Typography>
                <Typography>کاربر عادی</Typography>
              </Box>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#D9D9D933",
                  borderRadius: "100%",
                  border: "2px solid #2FB14D",
                  mr: 2,
                }}
              >
                <Image
                  src="/images/user.svg"
                  width={48}
                  height={63}
                  alt="user"
                />
              </Box>
            </Box>
          </Box>

          {/* asdfasdf */}
          <Typography mt={3}>اطلاعات کاربر</Typography>
          <Box
            sx={{
              bgcolor: "#D9D9D933",
              border: "1px solid #2FB14D",
              borderRadius: "10px 10px 5px 5px",
              py: "10px",
              px: "20px",
              mx: 2.5,
            }}
          >
            <Grid container spacing={"21px"}>
              <Grid item md={6}>
                <Box>
                  <Box
                    sx={{
                      bgcolor: "#D9D9D9",
                      py: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    <Typography>راه های ارتباطی</Typography>
                  </Box>
                  <Box
                    sx={{
                      bgcolor: "#2FB14D59",
                      borderRadius: "0px 0px 5px 5px",
                      border: "1px solid #2FB14D",
                      pt: 2,
                      pb: 3,
                      px: "10px",
                      // width: "205px",
                    }}
                  >
                    <Box
                      sx={{
                        // bgcolor: "#D9D9D933",
                        backgroundImage:
                          "linear-gradient(to right, #D9D9D9 0%, #D9D9D9 77px,#D9D9D933 87px,#D9D9D933 100%)",
                        borderRadius: "10px",
                        height: "40px",
                        // width: "205px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        mt: 2,
                      }}
                    >
                      <Box
                        sx={{
                          // width: "50px",
                          // bgcolor: "#D9D9D933",
                          height: "100%",
                          borderRadius: "10px 0px 0px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          position: "absolute",
                          left: 0,
                          px: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "11px",
                            fontWeight: 400,
                            lineHeight: "12.5px",
                          }}
                        >
                          شماره موبایل
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          position: "absolute",
                          right: "9px",
                          color: "#3F71F1",
                          cursor: "pointer",
                        }}
                      >
                        تغییر
                      </Typography>

                      <Box
                        sx={{
                          bgcolor: "#2FB14D66",
                          borderRadius: "7.5px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          px: "4px",
                          ml: 3,
                        }}
                      >
                        <Typography
                          sx={{
                            color: "white",
                            mt: "2.5px",
                          }}
                        >
                          09121231234
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        // bgcolor: "#D9D9D933",
                        backgroundImage:
                          "linear-gradient(to right, #D9D9D9 0%, #D9D9D9 77px,#D9D9D933 87px,#D9D9D933 100%)",
                        borderRadius: "10px",
                        height: "40px",
                        // width: "205px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        mt: 2,
                      }}
                    >
                      <Box
                        sx={{
                          // width: "50px",
                          // bgcolor: "#D9D9D933",
                          height: "100%",
                          borderRadius: "10px 0px 0px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          position: "absolute",
                          left: 0,
                          px: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "11px",
                            fontWeight: 400,
                            lineHeight: "12.5px",
                          }}
                        >
                          ایمیل
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          position: "absolute",
                          right: "9px",
                          color: "#3F71F1",
                          cursor: "pointer",
                        }}
                      >
                        تغییر
                      </Typography>

                      <Box
                        sx={{
                          bgcolor: "#2FB14D66",
                          borderRadius: "7.5px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          px: "4px",
                          ml: 3,
                        }}
                      >
                        <Typography
                          sx={{
                            color: "white",
                            mt: "2.5px",
                          }}
                        >
                          gmail@gmail.com
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        // bgcolor: "#D9D9D933",
                        backgroundImage:
                          "linear-gradient(to right, #D9D9D9 0%, #D9D9D9 77px,#D9D9D933 87px,#D9D9D933 100%)",
                        borderRadius: "10px",
                        height: "40px",
                        // width: "205px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        mt: 2,
                      }}
                    >
                      <Box
                        sx={{
                          // width: "50px",
                          // bgcolor: "#D9D9D933",
                          height: "100%",
                          borderRadius: "10px 0px 0px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          position: "absolute",
                          left: 0,
                          px: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "11px",
                            fontWeight: 400,
                            lineHeight: "12.5px",
                            width: "66px",
                          }}
                        >
                          کد معرف (شماره موبایل)
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          position: "absolute",
                          right: "9px",
                          color: "#3F71F1",
                          cursor: "pointer",
                        }}
                      >
                        افزودن
                      </Typography>

                      <Box
                        sx={{
                          bgcolor: "#2FB14D66",
                          borderRadius: "7.5px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          px: "4px",
                          ml: 3,
                        }}
                      >
                        <Typography
                          sx={{
                            color: "white",
                            mt: "2.5px",
                          }}
                        >
                          09121231234
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box>
                  <Box
                    sx={{
                      bgcolor: "#D9D9D9",
                      py: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    <Typography>اطلاعات شخصی</Typography>
                  </Box>
                  <Box
                    sx={{
                      bgcolor: "#FF890D59",
                      borderRadius: "0px 0px 5px 5px",
                      border: "1px solid #2FB14D",
                      pt: 2,
                      pb: 3,
                      px: "10px",
                      // width: "205px",
                    }}
                  >
                    <Box
                      sx={{
                        // bgcolor: "#D9D9D933",
                        backgroundImage:
                          "linear-gradient(to right, #D9D9D9 0%, #D9D9D9 77px,#D9D9D933 87px,#D9D9D933 100%)",
                        borderRadius: "10px",
                        height: "40px",
                        // width: "205px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: "relative",
                        mt: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          // position: "absolute",
                          // right: "9px",
                          color: "#3F71F1",
                          cursor: "pointer",
                        }}
                      >
                        تغییر
                      </Typography>

                      <Box
                        sx={{
                          bgcolor: "#2FB14D66",
                          borderRadius: "7.5px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          px: "4px",
                          width: "100%",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "white",
                            mt: "2.5px",
                          }}
                        >
                          محمد
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          // width: "50px",
                          // bgcolor: "#D9D9D933",
                          height: "100%",
                          borderRadius: "10px 0px 0px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          // position: "absolute",
                          left: 0,
                          px: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "11px",
                            fontWeight: 400,
                            lineHeight: "12.5px",
                          }}
                        >
                          نام
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        // bgcolor: "#D9D9D933",
                        backgroundImage:
                          "linear-gradient(to right, #D9D9D9 0%, #D9D9D9 77px,#D9D9D933 87px,#D9D9D933 100%)",
                        borderRadius: "10px",
                        height: "40px",
                        // width: "205px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        mt: 2,
                      }}
                    >
                      <Box
                        sx={{
                          // width: "50px",
                          // bgcolor: "#D9D9D933",
                          height: "100%",
                          borderRadius: "10px 0px 0px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          position: "absolute",
                          left: 0,
                          px: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "11px",
                            fontWeight: 400,
                            lineHeight: "12.5px",
                          }}
                        >
                          ایمیل
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          position: "absolute",
                          right: "9px",
                          color: "#3F71F1",
                          cursor: "pointer",
                        }}
                      >
                        تغییر
                      </Typography>

                      <Box
                        sx={{
                          bgcolor: "#2FB14D66",
                          borderRadius: "7.5px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          px: "4px",
                          ml: 3,
                        }}
                      >
                        <Typography
                          sx={{
                            color: "white",
                            mt: "2.5px",
                          }}
                        >
                          gmail@gmail.com
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        // bgcolor: "#D9D9D933",
                        backgroundImage:
                          "linear-gradient(to right, #D9D9D9 0%, #D9D9D9 77px,#D9D9D933 87px,#D9D9D933 100%)",
                        borderRadius: "10px",
                        height: "40px",
                        // width: "205px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        mt: 2,
                      }}
                    >
                      <Box
                        sx={{
                          // width: "50px",
                          // bgcolor: "#D9D9D933",
                          height: "100%",
                          borderRadius: "10px 0px 0px 10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          position: "absolute",
                          left: 0,
                          px: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "11px",
                            fontWeight: 400,
                            lineHeight: "12.5px",
                            width: "66px",
                          }}
                        >
                          کد معرف (شماره موبایل)
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          position: "absolute",
                          right: "9px",
                          color: "#3F71F1",
                          cursor: "pointer",
                        }}
                      >
                        افزودن
                      </Typography>

                      <Box
                        sx={{
                          bgcolor: "#2FB14D66",
                          borderRadius: "7.5px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          px: "4px",
                          ml: 3,
                        }}
                      >
                        <Typography
                          sx={{
                            color: "white",
                            mt: "2.5px",
                          }}
                        >
                          09121231234
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>{" "}
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
