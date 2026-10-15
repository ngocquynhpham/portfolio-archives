import '@mantine/core/styles.css';

import "./style/style.scss";
import { RouterProvider } from "react-router-dom";
import { createTheme, MantineProvider } from '@mantine/core';
import { router } from "@/lib/router";
import BackToTop from "./components/back-to-top/BackToTop";
import { useEffect, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
    
  }, []);
  

  const theme = createTheme({
    fontFamily: "Poppins, Inter, Helvetica, Arial, sans-serif"
  });
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
      {isVisible && <BackToTop onClick={scrollToTop} />}
    </MantineProvider>
  );
}

export default App;
