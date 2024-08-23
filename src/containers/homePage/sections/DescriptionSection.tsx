import { Box, Grid, Typography } from "@mui/material";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

import { useRouter } from "next/router";

export const DescriptionSection = () => {
  const { push } = useRouter();

  return (
    <Grid
      container
      px={2}
      sx={{
        overflowY: "overlay",
        height: "calc(100vh - 203px)",
        overflowX: "hidden",
        mt: "105px",
        pb: 10,
      }}
    >
      <Grid item md={7.5}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: " 400",
            lineHeight: "25px",
            textAlign: "right",
            mt: "50px",
          }}
        >
          آیا آماده‌اید تا به دنیای بی‌نهایت امکانات و پیشرفت‌های بی‌سابقه قدم
          بگذارید؟ هوش مصنوعی و برنامه‌نویسی کامپیوتر، درهای جدیدی به روی ما
          گشوده‌اند و مشاغل مختلف را متحول کرده‌اند. امروزه، هوش مصنوعی با سرعتی
          سرسام‌آور در حال توسعه است و در زمینه‌های مختلف از جمله پزشکی، صنعت،
          کشاورزی، آموزش و حتی هنر به کار گرفته می‌شود.
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: " 400",
            lineHeight: "25px",
            textAlign: "right",
            mt: "50px",
          }}
        >
          در دنیای پزشکی، هوش مصنوعی قادر است تشخیص‌های دقیق‌تری ارائه دهد و با
          تحلیل داده‌های پیچیده، به پزشکان در پیش‌بینی بیماری‌ها کمک کند. در
          صنعت، ربات‌ها و سیستم‌های هوشمند تولید را بهینه کرده و هزینه‌ها را
          کاهش می‌دهند. کشاورزان با استفاده از الگوریتم‌های پیشرفته می‌توانند
          محصولات خود را با کارآیی بیشتری مدیریت کنند و در نتیجه بازدهی خود را
          افزایش دهند.
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: " 400",
            lineHeight: "25px",
            textAlign: "right",
            mt: "50px",
          }}
        >
          آموزش و یادگیری نیز از پیشرفت‌های هوش مصنوعی بی‌نصیب نمانده‌اند. با
          برنامه‌های آموزشی هوشمند، دانش‌آموزان می‌توانند تجربه‌های آموزشی
          شخصی‌سازی‌شده‌ای داشته باشند که متناسب با نیازهای فردی‌شان است.
          هنرمندان نیز با کمک هوش مصنوعی، آثار خلاقانه‌تری خلق می‌کنند که پیش از
          این غیرممکن به نظر می‌رسید.
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: " 400",
            lineHeight: "25px",
            textAlign: "right",
            mt: "50px",
          }}
        >
          هوش مصنوعی و برنامه‌نویسی کامپیوتر نه تنها فرصت‌های شغلی جدیدی را
          ایجاد کرده‌اند، بلکه توانسته‌اند بهره‌وری و کیفیت کار را در بسیاری از
          زمینه‌ها بهبود بخشند. با یادگیری برنامه‌نویسی، شما نیز می‌توانید در
          این انقلاب دیجیتال سهمی داشته باشید و آینده‌ای روشن‌تر را برای خود و
          جامعه‌تان رقم بزنید. آیا آماده‌اید که به دنیای هوشمند فردا خوش‌آمد
          بگویید؟ این فرصت طلایی را از دست ندهید و با بهره‌گیری از تکنولوژی‌های
          نوین، مسیر موفقیت را هموار کنید.
        </Typography>
      </Grid>
      <Grid
        item
        md={4.5}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src="/images/logo/logo.svg"
          alt="logo"
          sx={{ width: "400px", zIndex: 1 }}
        />
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
            zIndex: 999,
          }}
          onClick={() => {
            push("/type");
          }}
        />
      </Box>
    </Grid>
  );
};
