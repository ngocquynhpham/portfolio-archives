import { Box } from "@mantine/core";
import Footer from "@/components/footer/Footer";
import ProjectsHome from "./ProjectsHome";
import { useEffect, useState } from "react";
import Experience from "./Experience";

export default function ContentRight() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="main-layout-right">
      <div className="intro-text-block">
        <div>
          <h2 className="text-color-primary section-title-position">
            Front-end Developer
          </h2>
        </div>
        <Box className="spacer-between-main" h={"30px"}></Box>
        <div className="text-size-medium">
          Experienced website develop with a focus on building engaging &amp;
          accessible digital experiences - things that look good but are also
          built well under the hood.
        </div>
      </div>
      <div className={`need-custom between-section-spacer`}></div>

      <div
        id="About"
        className="welcome-message-wrapper"
        style={{
          transform: `translate3d(0, ${scrollY * -0.1}px, 0)`,
        }}
      >
        <div className="text-size-large">Welcome to Quynh's website!</div>
        <div className="spacer-huge"></div>
        <Box
          className="spacer-between-main"
          h={{ base: "10px", lg: "30px" }}
        ></Box>
        <div className="text-size-medium text-intro-desktop">
          Thanks for visiting my site. <br /> I enjoy researching and
          experimenting with code, and seeing my projects accepted by users
          brings me great happiness. I have read and learned about interfaces,
          user experience, and new technologies, and I even studied UI/UX
          design, which helped me understand the designer's perspective. I am
          excited to hear from you and continue growing in this field.
        </div>
        <div className="text-size-medium text-intro-mobile leading-8">
          Thanks for visiting my site. <br />
          <br />
          I'm a Front-end Developer experienced in website development with a
          focus on building engaging & accessible digital experiences - things
          that look good but are also built well under the hood.
          <br />
          <br />I enjoy researching and experimenting with code, and seeing my
          projects accepted by users brings me great happiness. I have read and
          learned about interfaces, user experience, and new technologies, and I
          even studied UI/UX design, which helped me understand the designer's
          perspective. I am excited to hear from you and continue growing in
          this field.
        </div>
      </div>
      <Box className="spacer-between-main" h={"20px"}></Box>
      <div className="spacer-large"></div>

      <div id="Experience" className="previous-work-wrapper">
        <div className="h2-wrapper">
          <h2 className="text-color-primary section-title">Experience</h2>
          <div className="h2-left-line"></div>
          <div className="h2-top-line"></div>
        </div>
        <div className="spacer-large"></div>

        <Experience />
      </div>
      <div className="between-section-spacer"></div>
      <div id="Projects" className="previous-work-wrapper">
        <div className="h2-wrapper">
          <h2 className="text-color-primary section-title">Selected Project</h2>
          <div className="h2-left-line"></div>
          <div className="h2-top-line"></div>
        </div>
        <div className="spacer-large"></div>
        <ProjectsHome />
      </div>
      <Footer />
    </div>
  );
}
