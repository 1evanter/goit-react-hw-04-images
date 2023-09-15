import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyles
    = createGlobalStyle`
body {
  color: #27374D;
    margin: 0;
};

img {
  display: block;
  max-width: 100%;
  height: auto;
};

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
};

button {
  cursor: pointer;
}
`