import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import CardComponent from "./components/CardComponent";
import CustomTheme from "./components/CustomTheme";
import { numberSeparator } from "./helpers";
import { City, fetchCountries } from "./state/country/countrySlice";
import { AppDispatch, RootState } from "./state/store";

import "./App.css";

function App() {
  const countriesData = useSelector((state: RootState) => state.country);
  const dispatchRedux = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatchRedux(fetchCountries());
  }, []);

  // select options
  const countryOptions = countriesData?.data.map((item) => item.name);
  const [stateOption, setStateOption] = useState<string[]>([]);

  // selected country & state
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");

  const [totalCitizens, setTotalCitizens] = useState<number>(0);

  const [citiesList, setCitiesList] = useState<City[]>([]);

  useEffect(() => {
    setSelectedState("");
  }, [selectedCountry]);

  useEffect(() => {
    const states = countriesData.data.find(
      (country) => country.name === selectedCountry
    )?.states;
    setStateOption(states ? states.map((state) => state.name) : []);
    let total = 0;
    let cities: City[] = [];
    if (selectedState) {
      const specificState = states?.find(
        (state) => state.name === selectedState
      );
      specificState?.cities.map((city) => {
        total = Number(total) + Number(city.population);
        cities = [...cities, city];
      });
    } else {
      states?.map((state) => {
        state.cities.map((city) => {
          total = Number(total) + Number(city.population);
          cities = [...cities, city];
        });
      });
    }
    setCitiesList(cities);
    setTotalCitizens(total);
  }, [selectedCountry, selectedState]);

  return (
    <CustomTheme>
      <Container>
        <Grid
          container
          direction={"row"}
          justifyContent={"space-between"}
          marginBottom={5}
          spacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} md={6} lg={4}>
            <FormControl
              variant="filled"
              sx={{
                m: 1,
                minWidth: 120,
                backgroundColor: "white",
                width: "100%",
              }}
            >
              <InputLabel id="country-select">Country</InputLabel>
              <Select
                labelId="country-select"
                label="Country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                {countryOptions.map((country, index) => (
                  <MenuItem value={country} key={index}>
                    {country}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl
              variant="filled"
              sx={{
                m: 1,
                minWidth: 120,
                backgroundColor: "white",
                width: "100%",
              }}
            >
              <InputLabel id="state-select">State</InputLabel>
              <Select
                labelId="state-select"
                label="State"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                {stateOption.map((states, index) => (
                  <MenuItem value={states} key={index}>
                    {states}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Typography variant="h4" textAlign={"center"} marginBottom={5}>
          Total Citizens {numberSeparator(totalCitizens, 0)}
        </Typography>
        <Typography variant="h4" textAlign={"start"} marginBottom={2}>
          Cities
        </Typography>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          {citiesList.map((city, index) => (
            <Grid item xs={12} md={4} lg={3} key={index}>
              <CardComponent city={city} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </CustomTheme>
  );
}

export default App;
