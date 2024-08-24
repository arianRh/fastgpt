import { Box, Button, Grid, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useRouter } from "next/router";

export const HomePage = () => {
  const { push } = useRouter();

  return (
    <Grid
      container
      px={2}
      sx={{
        height: "calc(100vh - 105px)",
        overflowY: "overlay",
        overflowX: "hidden",
        mt: "105px",
        pt: { md: "95px", xs: "65px" },
        pb: { xs: "42px", md: 0 },
      }}
    >
      <Grid md={5} xs={12} sx={{ textAlign: { xs: "center", md: "start" } }}>
        <Typography variant="h3">زندگی روزمره را با</Typography>
        <Typography variant="h3" mr={{ md: 14, xs: 0 }}>
          <span style={{ color: "#2FB14D" }}>هوش</span>{" "}
          <span style={{ color: "#FF890D" }}>سریع</span> متحول کنید.
        </Typography>
        <Box
          sx={{
            mt: "33px",
            mr: "32px",
            gap: 2,
            display: "flex",
            justifyContent: { xs: "center", md: "start" },
          }}
        >
          <Button
            sx={{
              bgcolor: "#D9D9D959",
              borderRadius: "25px",
              px: "25px",
              py: "10px",
              color: "#3D8DEB",
              border: `1.5px solid #2FB14D`,
            }}
          >
            <Typography variant="button">تهیه اشتراک</Typography>
          </Button>
          <Button
            sx={{
              borderRadius: "25px",
              px: "25px",
              py: "10px",
              color: "white",
            }}
          >
            <Typography variant="button">امتحان رایگان</Typography>
          </Button>
        </Box>
      </Grid>
      <Grid item md={2}></Grid>
      <Grid md={5} xs={12}>
        <Box sx={{ textAlign: "center", mt: { xs: 4, md: 0 } }}>
          <Typography variant="h5">
            با <span style={{ color: "#2FB14D" }}>هوش</span>{" "}
            <span style={{ color: "#FF890D" }}>سریع</span> در کارهای روزمره و
            پیچیده، به طوری که با خود بگوئید هیچ وقت قبل از این، عملکرد بی نظیری
            را تجربه کنید. با ما همراه شوید و تحولی بزرگ در زندگی خود ایجاد
            کنید.
          </Typography>
        </Box>
      </Grid>

      <Grid item md={12}>
        <Typography
          sx={{
            bottom: 0,
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: "31.25px",
            textAlign: { md: "center", xs: "start" },
            mt: "120px",
          }}
        >
          هوش مصنوعی (AI) شاخه‌ای از علوم کامپیوتر است که به توسعه سیستم‌ها و
          ماشین‌هایی می‌پردازد که قادر به انجام وظایف هوشمندانه‌ای هستند که
          به‌طور معمول به توانایی‌های انسانی نیاز دارند. این وظایف شامل تشخیص
          گفتار، شناسایی تصاویر، تصمیم‌گیری و ترجمه زبان‌ها می‌شود. تکنولوژی‌های
          مختلفی مانند یادگیری ماشین و شبکه‌های عصبی مصنوعی، مبنای کار هوش
          مصنوعی را تشکیل می‌دهند. کاربردهای هوش مصنوعی در زندگی روزمره شامل
          دستیارهای مجازی، خودروهای خودران، تحلیل داده‌های پزشکی و سیستم‌های
          توصیه‌گر در وب‌سایت‌ها و اپلیکیشن‌ها می‌شود. هدف اصلی هوش مصنوعی
          افزایش کارایی و بهره‌وری انسان‌ها، بهبود دقت در تصمیم‌گیری‌ها و ارائه
          راه‌حل‌های خلاقانه برای مسائل پیچیده است. با پیشرفت سریع این فناوری،
          انتظار می‌رود هوش مصنوعی نقش بسیار پررنگ‌تری در آینده ایفا کند.
        </Typography>
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
        <KeyboardArrowDownRoundedIcon
          sx={{
            fontSize: "50px",
            "&:hover": {
              cursor: "pointer",
            },
            zIndex: 999,
          }}
          onClick={() => {
            push("type");
          }}
        />
      </Box>
    </Grid>
  );
};
