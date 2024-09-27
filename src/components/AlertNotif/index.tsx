import { Box, IconButton, Slide, Typography, useTheme } from "@mui/material";
import { toast } from "react-hot-toast";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SyncProblemOutlinedIcon from "@mui/icons-material/SyncProblemOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useEffect, useState } from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import SyncProblemRoundedIcon from "@mui/icons-material/SyncProblemRounded";

interface AlertNotif {
  header?: string;
  open?: boolean;
  title: any;
  type: string;
  target?: any;
}

function AlertNotif({ open, title, type, target, header }: AlertNotif) {
  const { palette } = useTheme();
  const [disable, setDisable] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setDisable(true), 5000);
  }, []);

  return (
    <Slide direction="down" in={target?.visible} mountOnEnter unmountOnExit>
      <Box
        sx={{
          width: "360px",
          bgcolor:
            type === "error"
              ? palette.error.light
              : type === "primary"
              ? palette.primary[50]
              : type === "warning"
              ? palette.warning.light
              : type === "success"
              ? palette.success.light
              : null,
          borderBottom: `2px solid ${
            type === "error"
              ? palette.error.main
              : type === "primary"
              ? palette.primary.main
              : type === "warning"
              ? palette.warning.main
              : type === "success"
              ? palette.success.main
              : null
          }`,
          py: "16px !important",
          pl: "16px !important",
          pr: 4,
          borderRadius: "8px",
          display: disable ? "none" : "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            width: "100%",
          }}
        >
          {type === "success" ? (
            <CheckCircleRoundedIcon
              sx={{ fontSize: "24px", ml: 1, color: palette.success.main }}
            />
          ) : type === "primary" ? (
            <InfoRoundedIcon
              sx={{ fontSize: "24px", ml: 1, color: palette.primary.main }}
            />
          ) : type === "error" ? (
            <SyncProblemRoundedIcon
              sx={{ fontSize: "24px", ml: 1, color: palette.error.main }}
            />
          ) : (
            <CheckCircleRoundedIcon
              sx={{ fontSize: "24px", ml: 1, color: palette.success.main }}
            />
          )}

          <Box>
            {header ? (
              <Typography variant="body2" sx={{ color: palette.neutral[900] }}>
                {header}
              </Typography>
            ) : null}
            <Typography
              variant={header ? "caption" : "body2"}
              sx={{
                color: header ? palette.neutral[700] : palette.neutral[900],
                overflowWrap: "break-word",
                wordBreak: "break-word",
                whiteSpace: "pre-line",
                mt: header ? "4px" : "0",
              }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
        <IconButton
          onClick={() => toast.dismiss(target.id)}
          sx={{
            mr: -2,
            py: 0 + "!important",
            px: 0 + "!important",
            width: "24px",
            height: "24px",
          }}
        >
          <CloseRoundedIcon sx={{ color: palette.neutral[900] }} />
        </IconButton>
      </Box>
    </Slide>
  );
}

export default AlertNotif;
