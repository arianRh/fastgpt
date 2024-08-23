import React from "react";
import { Box, useTheme } from "@mui/material";
import Image from "next/image";

const items = [
  { src: "/images/navbar/item1.svg" },
  { src: "/images/navbar/item2.svg" },
  { src: "/images/navbar/item3.svg" },
  { src: "/images/navbar/item4.svg" },
  { src: "/images/navbar/item5.svg" },
];

export default function LeftVerticalNavbar() {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        // height: "100vh", // ارتفاع کامل صفحه
        display: "flex",
        // justifyContent: "flex-start", // برای قرار دادن نوبار در سمت چپ
        // alignItems: "center", // برای قرارگیری وسط از نظر عمودی
      }}
    >
      <Box
        sx={{
          // height: "100%",
          backgroundColor: "#D9D9D933",
          borderRadius: "20px",
          marginLeft: "14px", // فاصله از لبه چپ صفحه
          py: "74.5px",
          border: `2px solid ${palette.warning.main}`,
          px: "7.5px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {items.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: 50,
                height: 50,
                bgcolor: "#D9D9D94D",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 4px 4px 0px #00000040",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Image src={item.src} width={40} height={34} alt="item1" />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
