import LargeHeading from "@/components/ui/LargeHeading";
import { Box, Container, Stack, Typography } from "@mui/material";

//common styles
const commonStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
};

export default function Page() {
  return (
    <Container maxWidth="lg" sx={{ ...commonStyles }}>
      <Box sx={{ ...commonStyles }}>
        <Stack
          direction="column"
          alignItems="center"
          pt={5}
          spacing={{ xs: 3, sm: 4, md: 6 }}
        >
          <LargeHeading size="sm">ottonova - Coding Challenge</LargeHeading>
          <Typography>Ben Yilmaz</Typography>
        </Stack>
      </Box>
    </Container>
  );
}
