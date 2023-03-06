import colors from "./Colors";

export default {
  colors,
  text: {
    color: colors.black,
    fontSize: 16,
    fontFamily: "regular",
  },
  androidShadow: {
    elevation: 24,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 16.0,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 12 },
  },
  iosShadow: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 1,
    shadowRadius: 60,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
};

