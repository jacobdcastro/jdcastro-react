import React, { useEffect, useState } from 'react';
import { lightTheme, darkTheme } from '../../styles/layout/__themes';
import { ThemeContext } from './index';

// ? provider component wraps entire app in gatsby-browser.js
// class ThemeContextWrapper extends React.Component {
//   constructor(props) {
//     super(props);

//     // TODO set initial theme based on time of day
//     // ? bug in header background color on scroll when code isn't commented
//     // this.setTheme = () => {
//     //   const now = new Date();
//     //   const time = now.getHours();

//     //   if (time >= 19 || time <= 6) {
//     //     return darkTheme;
//     //   } else if (time > 6 && time < 19) {
//     //     return lightTheme;
//     //   }
//     // };

//     this.toggleTheme = () => {
//       this.setState({
//         currentTheme:
//           this.state.currentTheme === lightTheme ? darkTheme : lightTheme,
//       });
//     };

//     this.state = {
//       currentTheme: lightTheme,
//       transition: '0.5s',
//       toggleTheme: this.toggleTheme,
//     };
//   }

//   render() {
//     return (
//       <ThemeContext.Provider value={this.state}>
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }

const ThemeContextWrapper = ({ children }) => {
  const [themeState, setThemeState] = useState({
    currentTheme: lightTheme,
    transition: '0.5s',
  });

  const toggleTheme = () => {
    setThemeState({
      ...themeState,
      currentTheme:
        themeState.currentTheme === lightTheme ? darkTheme : lightTheme,
    });
  };

  if (!themeState.toggleTheme) setThemeState({ ...themeState, toggleTheme });

  useEffect(() => {
    const now = new Date();
    const time = now.getHours();

    if (time >= 19 || time <= 6) {
      setThemeState({
        ...themeState,
        currentTheme: darkTheme,
      });
    } else if (time > 6 && time < 19) {
      setThemeState({
        ...themeState,
        currentTheme: lightTheme,
      });
    }
  }, []);

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextWrapper;
