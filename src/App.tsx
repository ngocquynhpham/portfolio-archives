import { RouterProvider } from "react-router-dom";
import { router } from "@/lib/router";
import BackToTop from "@/components/back-to-top/BackToTop";
import { useEffect, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      {isVisible && <BackToTop onClick={scrollToTop} />}
    </>
  );
}

export default App;
