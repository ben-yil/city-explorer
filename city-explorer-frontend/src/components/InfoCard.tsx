import { Box, Typography } from "@mui/material";
import React from "react";
import { blueGrey } from "@mui/material/colors";

interface InfoCardProps {
  title: string;
  text?: string;
} 

export default function InfoCard(props: InfoCardProps) {
  const { title, text } = props;

  return (
    <Box
      p={2}
      bgcolor={blueGrey[200]}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      borderRadius={5}
      mb={1}
    >
      <Box>
        <Typography color="text.secondary" fontSize={12}>
          {title}
        </Typography>
        <Typography
          variant="h5"
          color={blueGrey[900]}
          fontWeight={"bold"}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
