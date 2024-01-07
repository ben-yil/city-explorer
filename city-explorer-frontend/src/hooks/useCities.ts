import { useQuery } from "react-query";
import axios from "axios";
import { City } from "@/types";

type FetchError = {
  message: string;
};

const fetchCities = async (): Promise<City[]> => {
  const { data } = await axios.get(`${process.env.BACKEND_URL_LOCAL}/cities`);
  return data;
};

export const useCities = () => {
  return useQuery<City[], FetchError>("cities", fetchCities);
};
