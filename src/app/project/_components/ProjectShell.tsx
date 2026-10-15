import type { ReactNode } from "react";
import "@/style/style.scss";
import "@/app/project/_styles/layout-project.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import BackToPrev from "@/components/back-to-previous/BackToPrev";

type ProjectShellProps = {
  children: ReactNode;
  /** Back link; omit for default `/project` */
  backTo?: string;
  footerFull?: boolean;
  trailingSpace?: boolean;
};

export default function ProjectShell({
  children,
  backTo,
  footerFull = true,
  trailingSpace = true,
}: ProjectShellProps) {
  return (
    <section className="section-main">
      <div className="container-main">
        <Header variant="project" />
        <main className="main-layout-main --project">
          <BackToPrev {...(backTo !== undefined ? { link_to: backTo } : {})} />
          {children}
          <Footer full={footerFull} />
          {trailingSpace && (
            <>
              <br />
              <br />
            </>
          )}
        </main>
      </div>
    </section>
  );
}
