export type Colors = {
  main: string
  dark: string
  light: string
  contrastText: string
}

export type Theme = {
  primary: Colors
  secondary: Colors
  error: Colors
  warning: Colors
  info: Colors
  success: Colors
}

export const darkTheme: Theme = {
  primary: {
    main: "#1976d2",
    dark: "#1565c0",
    light: "#42a5f5",
    contrastText: "#ffffff"
  },
  secondary: {
    main: "#9c27b0",
    dark: "#7b1fa2",
    light: "#ba68c8",
    contrastText: "#ffffff"
  },
  error: {
    main: "#d32f2f",
    dark: "#c62828",
    light: "#ef5350",
    contrastText: "#ffffff"
  },
  warning: {
    main: "#ED6C02",
    dark: "#e65100",
    light: "#ff9800",
    contrastText: "#ffffff"
  },
  info: {
    main: "#0288d1",
    dark: "#01579b",
    light: "#03a9f4",
    contrastText: "#ffffff"
  },
  success: {
    main: "#2e7d32",
    dark: "#1b5e20",
    light: "#4caf50",
    contrastText: "#ffffff"
  },
}

export const lightTheme: Theme = {
  primary: {
    main: "#90caf9",
    dark: "#42a5f5",
    light: "#e3f2fd",
    contrastText: "#000000"
  },
  secondary: {
    main: "#ce93d8",
    dark: "#ab47bc",
    light: "#f3e5f5",
    contrastText: "#000000"
  },
  error: {
    main: "#f44336",
    dark: "#d32f2f",
    light: "#e57373",
    contrastText: "#000000"
  },
  warning: {
    main: "#ffa726",
    dark: "#f57c00",
    light: "#ffb74d",
    contrastText: "#000000"
  },
  info: {
    main: "#29b6f6",
    dark: "#0288d1",
    light: "#4fc3f7",
    contrastText: "#000000"
  },
  success: {
    main: "#66bb6a",
    dark: "#388e3c",
    light: "#81c784",
    contrastText: "#000000"
  },
}