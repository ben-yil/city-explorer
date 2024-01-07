"use client";
import Image from "next/image";
import Paragraph from "@/components/ui/Paragraph";
import LargeHeading from "@/components/ui/LargeHeading";
import { Box, Container, Paper, Stack, Typography, Grid } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import CityCard from "@/components/CityCard";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Image
              src="/home.png"
              alt="home image"
              quality={100}
              width={350}
              height={350}
              className="absolute  top-32 invisible left-[10%]  min-[900px]:visible  "
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack
              direction="column"
              alignItems="center"
              spacing={{ xs: 3, sm: 4, md: 6 }}
            >
              <Box>
                <LargeHeading size="md">Best way to</LargeHeading>
                <LargeHeading size="lg">EXPLORE</LargeHeading>
              </Box>
              <Paper
                variant="outlined"
                sx={{ p: 2, bgcolor: blueGrey[500], borderRadius: 4 }}
              >
                <Paragraph color="text.secondary">
                  Discover cities, landmarks, and culture with CityExplorer
                </Paragraph>
              </Paper>
              <Paragraph size={"sm"}>
                Welcome to CityExplorer – your digital compass for urban
                discovery! Explore vibrant landmarks, immerse in diverse
                cultures, and navigate through bustling streets with ease.
              </Paragraph>
            </Stack>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mt: 5,
          }}
        >
          <LargeHeading size="md">TOP CITIES</LargeHeading>
          <Stack
            direction="column"
            minWidth="80%"
            spacing={{ xs: 1, sm: 2, md: 3 }}
            mt={2}
          >
            <CityCard />
          </Stack>
        </Box>
      </Container>
    </QueryClientProvider>
  );
}
