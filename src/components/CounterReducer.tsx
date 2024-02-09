import { useReducer } from "react";

import { Container, Typography, Button } from "@mui/material";

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "increment" | "decrement";
}

const reducer = (state: State, action: Action) => {
  const { type } = action;
  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const error = newCount > 5;
      return {
        ...state,
        count: error ? state.count : newCount,
        error: error ? "Maximum reached" : null,
      };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const error = newCount <= 0;
      return {
        ...state,
        count: error ? state.count : newCount,
        error: error ? "Minimum reached" : null,
      };
    }
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });
  return (
    <Container sx={{ marginTop: 5 }}>
      {state.error && (
        <Typography variant="h5" color="error">
          {state.error}
        </Typography>
      )}
      <Typography variant="h3">Counter Reducer</Typography>
      <Typography variant="h1">{state.count}</Typography>

      <Button
        variant="contained"
        sx={{ marginRight: 10 }}
        onClick={() =>
          dispatch({
            type: "increment",
          })
        }
      >
        Increment
      </Button>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </Button>
    </Container>
  );
};

export default CounterReducer;
