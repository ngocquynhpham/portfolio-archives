import { useEffect, useState } from "react";

export default function ContentLeft() {
  const [scrollPosition, setScrollPosition] = useState(280);
  const [showTitle, setShowTitle] = useState(true);
  const handleScroll = () => {
    if (window.scrollY <= 280) {
      setScrollPosition(280);
    } else if (window.innerHeight < window.scrollY) {
      setScrollPosition(window.innerHeight);
    } else {
      setScrollPosition(window.scrollY);
    }
    if (window.scrollY >= (window.innerHeight * 2) / 3) {
      setShowTitle(false);
    } else {
      setShowTitle(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`main-layout-left ${!showTitle ? "remove" : "show"}`}>
      <div className="main-title-wrapper">
        <h1 className={`main-title`}>
          I'm <br />
          Ngoc Quynh
        </h1>
        <div
          className="main-left-line"
          style={{ height: scrollPosition }}
        ></div>
        <div className={"main-bottom-line"}></div>
      </div>
    </div>
  );
}
