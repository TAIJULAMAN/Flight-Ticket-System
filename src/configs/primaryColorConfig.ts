export type PrimaryColorConfig = {
  name?: string;
  light?: string;
  main: string;
  dark?: string;
};

// Primary color config object
const primaryColorConfig: PrimaryColorConfig[] = [
  {
    name: "primary-1",
    light: "#8589FF",
    main: "#254fd4",
    dark: "#5C61E6",
  },
  {
    name: "primary-2",
    light: "#49CCB5",
    main: "#06B999",
    dark: "#048770",
  },
  {
    name: "primary-3",
    light: "#FFA95A",
    main: "#FF891D",
    dark: "#BA6415",
  },
  {
    name: "primary-4",
    light: "#F07179",
    main: "#EB3D47",
    dark: "#AC2D34",
  },
  {
    name: "primary-5",
    light: "#5CC5F1",
    main: "#20AFEC",
    dark: "#1780AC",
  },
];

export default primaryColorConfig;
