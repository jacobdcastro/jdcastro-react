/* eslint-disable quotes */
import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: '1.666',
  headerFontFamily: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  includeNormalize: false,
  // overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => {
  //   console.log({ options });
  //   console.log({ styles });
  //   return {
  //     '@font-face': {
  //       fontFamily: 'Montserrat',
  //       src: "url('Montserrat/Montserrat-ExtraBold.ttf') format('truetype')",
  //       fontWeight: 800,
  //       fontStyle: 'normal',
  //     },

  //     /* Body Font Family */
  //     '@font-face': {
  //       fontFamily: 'Open Sans',
  //       src: "url('OpenSans/OpenSans-Regular.ttf') format('truetype')",
  //       fontWeight: 'normal',
  //       fontStyle: 'normal',
  //     },
  //     '@font-face': {
  //       fontFamily: 'Open Sans',
  //       src: "url('OpenSans/OpenSans-Italic.ttf') format('truetype')",
  //       fontWeight: 'normal',
  //       fontStyle: 'italic',
  //     },
  //     '@font-face': {
  //       fontFamily: 'Open Sans',
  //       src: "url('OpenSans/OpenSans-Bold.ttf') format('truetype')",
  //       fontWeight: 'bold',
  //       fontStyle: 'normal',
  //     },
  //     '@font-face': {
  //       fontFamily: 'Open Sans',
  //       src: "url('OpenSans/OpenSans-BoldItalic.ttf') format('truetype')",
  //       fontWeight: 'bold',
  //       fontStyle: 'italic',
  //     },

  //     /* Code Font Family */
  //     '@font-face': {
  //       fontFamily: 'JetBrains Mono',
  //       src:
  //         "url('JetBrainsMono/ttf/JetBrainsMono-Regular.ttf') format('truetype')",
  //       fontWeight: 'normal',
  //       fontStyle: 'normal',
  //     },
  //     '@font-face': {
  //       fontFamily: 'JetBrains Mono',
  //       src:
  //         "url('JetBrainsMono/ttf/JetBrainsMono-Italic.ttf') format('truetype')",
  //       fontWeight: 'normal',
  //       fontStyle: 'italic',
  //     },
  //   };
  // },
});

export default typography;
