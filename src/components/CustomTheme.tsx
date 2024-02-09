import { orange } from "@mui/material/colors";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

// typescirpt
declare module "@mui/material/styles" {
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

interface Props {
  children: React.ReactNode;
}

const customTheme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: "#0c343d",
    },
    secondary: {
      main: "#ecf8fd",
    },
  },
});

const CustomTheme = ({ children }: Props) => {
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};

export default CustomTheme;
