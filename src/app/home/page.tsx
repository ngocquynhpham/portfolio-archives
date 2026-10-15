import { Box } from "@mantine/core";
import Header from "@/components/header/Header";
import ContentLeft from "./_components/ContentLeft";
import ContentRight from "./_components/ContentRight";
import "./Homepage.scss";
import "./unit.scss";

export default function HomePage() {
  return (
    <section className="section-home">
      <div className="container-home">
        <Header />
        <main className="main-layout--home">
          <ContentLeft />
          <Box className="spacer-between-main" w={"20px"}></Box>
          <ContentRight />
        </main>
      </div>
    </section>
  );
}
