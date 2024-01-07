import { Card, Typography } from "@mui/material";
import React from "react";
import { blueGrey } from "@mui/material/colors";

interface LandmarkProps {
  name: string;
}

export default function LandmarkItem(props: LandmarkProps) {
  const { name } = props;
  return (
    <Card
      sx={{
        bgcolor: blueGrey[200],
        py: 1,
        px:2,
        minWidth: { xs: "100%", sm: "80%", md: "60%" },
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        mt:1,
        borderRadius:4
      }}
    >
      <Typography color="text.secondary">{name}</Typography>
    </Card>
  );
}
