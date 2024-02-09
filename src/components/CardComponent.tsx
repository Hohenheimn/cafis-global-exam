import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import { numberSeparator } from "../helpers";
import { City } from "../state/country/countrySlice";

interface Props {
  city: City;
}

const CardComponent = ({ city }: Props) => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
          color="text.secondary"
          gutterBottom
        >
          {city.name}
        </Typography>

        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
          }}
          color="text.secondary"
        >
          {numberSeparator(city.population, 0)}
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
          }}
        >
          Citizens
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
