import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Container, Typography } from "@mui/material";

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "../state/counter/counterSlice";
import { AppDispatch, RootState } from "../state/store";

const CounterRedux = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Container sx={{ marginTop: 5 }}>
      <Typography variant="h3">Counter Redux</Typography>
      <Typography variant="h1">{count}</Typography>

      <Button
        variant="contained"
        sx={{ marginRight: 10 }}
        onClick={() => {
          dispatch(incrementAsync(50));
        }}
      >
        Async Increment
      </Button>

      <Button
        variant="contained"
        sx={{ marginRight: 10 }}
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </Button>
      <Button
        variant="contained"
        sx={{ marginRight: 10 }}
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(incrementByAmount(50));
        }}
      >
        Increment by 50
      </Button>
    </Container>
  );
};

export default CounterRedux;
