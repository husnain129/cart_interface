import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const inputStyles = {
  sizes: {
    md: {
      field: {
        borderRadius: "none",
      },
    },
  },
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: "orange.500",
  },
};

const theme = extendTheme(
  {
    fonts: {
      heading: `Montserrat,${base.fonts?.heading}`,
      body: `Inter,${base.fonts?.body}`,
    },
    components: {
      Button: {
        variants: {
          primary: (props: any) => ({
            rounded: "none",
            // ...brandRing,
            color: mode("gray.900", "orange.200")(props),
            backgroundColor: mode("orange.300", "orange.700")(props),
            _hover: {
              backgroundColor: mode("orange.400", "orange.800")(props),
            },
            _active: {
              backgroundColor: mode("orange.500", "orange.900")(props),
            },
          }),
        },
      },
      Input: { ...inputStyles },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: "none",
            ...brandRing,
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "yellow",
    components: ["Checkbox"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
