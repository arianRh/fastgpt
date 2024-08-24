import { Box, Grid, Typography, useTheme } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import Image from "next/image";
import { useRouter } from "next/router";

const type = ["عادی", "پلاس", "حرفه ای"];

export const TypeSection = () => {
  const { push } = useRouter();

  return (
    <Grid
      container
      px={2}
      sx={{
        overflowY: "overlay",
        height: "calc(100vh - 105px)",
        overflowX: "hidden",
        mt: "105px",
        pb: { xs: "42px", md: 0 },
      }}
    >
      <Grid item md={12}>
        <Grid
          item
          md={12}
          sx={{
            mt: "40px",
            width: "100%",
            display: { md: "flex", xs: "" },
            gap: "100px",
            justifyContent: "center",
          }}
        >
          {type.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: { md: 200, xs: 150 },
                    height: { md: 200, xs: 150 },
                    border:
                      item !== "عادی"
                        ? `8px solid ${
                            item === "حرفه ای" || item === "پلاس"
                              ? "#2FB14D"
                              : ""
                          }`
                        : "4px solid #2FB14D",
                    // outline: item === "حرفه ای" ? "8px solid #FF890D" : "",
                    boxShadow: "0px 4px 4px 0px #00000040",
                    borderRadius: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="/images/user.svg"
                    alt="user"
                    sx={{ width: { md: 96, xs: 70 }, height: 127 }}
                  />
                </Box>
                <Box
                  sx={{
                    outline:
                      item !== "عادی"
                        ? `8px solid ${
                            item === "حرفه ای"
                              ? "#FF890D"
                              : item === "پلاس"
                              ? "#2FB14D"
                              : ""
                          }`
                        : "",
                    borderRadius: "31px",
                    py: "7px",
                    px: "25px",
                    mt: {
                      md: item === "عادی" ? "38px" : "32px",
                      xs: item === "عادی" ? "14px" : "20px",
                    },
                    mb: { xs: 4, md: 0 },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 400,
                      lineHeight: "31.25px",
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Grid>
        <Grid
          item
          md={12}
          sx={{
            mt: "63px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              bottom: 0,
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "31.25px",
              maxWidth: "1066px",
              textAlign: { md: "center", xs: "start" },
            }}
          >
            نوع کاربری: نوع کاربری شما بسته به تعداد همکاری های شما تغییر می‌کند
            به طوری که اگر تعداد کاربری ها شما کمتر از 5 کاربر باشد نوع کاربری
            شما عادی است، اگر تعداد همکاری های شما 5 کاربر یا بیشتر باشد نوع
            کاربری شما پلاس است، اما اگر تعداد همکاری شما 10 کاربر یا بیشتر باشد
            نوع کاربری شما حرفه‌ای است.
          </Typography>
          <Typography
            sx={{
              bottom: 0,
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "31.25px",
              maxWidth: "1066px",
              textAlign: { md: "center", xs: "start" },
              mt: 2,
            }}
          >
            از مزایای کاربری پلاس می‌توان به محدودیت کمتر تعداد چت های روزانه
            نسبت کاربری عادی اشاره کرد.
          </Typography>
          <Typography
            sx={{
              bottom: 0,
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "31.25px",
              maxWidth: "1066px",
              textAlign: { md: "center", xs: "start" },
            }}
          >
            و همچنین از مزایای کاربری حرفه‌ای می‌توان به بدون محدودیت بودن تعداد
            چت های روزانه اشاره کرد.
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <KeyboardArrowUpRoundedIcon
          sx={{
            fontSize: "50px",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => {
            push("/");
          }}
        />
        <KeyboardArrowDownRoundedIcon
          sx={{
            fontSize: "50px",
            "&:hover": {
              cursor: "pointer",
            },
            mt: -3,
          }}
          onClick={() => {
            push("description");
          }}
        />
      </Box>
    </Grid>
  );
};
