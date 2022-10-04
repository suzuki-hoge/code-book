import "client/styles/global.scss";
import "client/styles/variables.scss";

import * as nextImage from 'next/image';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "codebook",
        value: "#efe",
      },
      {
        name: "dark",
        value: "#ddd",
      },
    ],
  },
};
