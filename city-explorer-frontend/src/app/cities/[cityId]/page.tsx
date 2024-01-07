"use client";
import { useEffect, useMemo, useState } from "react";
import LargeHeading from "@/components/ui/LargeHeading";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import InfoCard from "@/components/InfoCard";
import dynamic from "next/dynamic";
import LandmarkItem from "@/components/LandmarkItem";
import axios from "axios";
import { City } from "@/types";

export default function Page({ params }: { params: { cityId: string } }) {
  const [city, setCity] = useState<City | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        ssr: false,
      }),
    []
  );

  useEffect(() => {
    axios(`${process.env.BACKEND_URL_LOCAL}/cities/${params.cityId}`)
      .then((res) => {
        setCity(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.cityId]);

  if (isLoading)
    return (
      <div className="justify-center items-center flex">
        <Typography>Loading...</Typography>
      </div>
    );
  if (error)
    return (
      <div className="justify-center items-center flex">
        <Typography>Error: {error}</Typography>;
      </div>
    );

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LargeHeading size="md">{city?.name}</LargeHeading>
        <Box
          sx={{ width: "100%", py: 5, display: "flex", alignItems: "center" }}
        >
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <InfoCard title="Continent" text={city?.continent} />
              <InfoCard title="Founded" text={city?.founded} />
              <InfoCard title="Native Name" text={city?.name_native} />
              <InfoCard title="Name" text={city?.name} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Map center={[Number(city?.latitude), Number(city?.longitude)]} />
            </Grid>
          </Grid>
        </Box>
        <LargeHeading size="sm" className="mb-5">
          Landmarks
        </LargeHeading>
        {city?.landmarks.map((landmark, index) => (
          <LandmarkItem key={index} name={landmark} />
        ))}
      </Box>
    </Container>
  );
}
