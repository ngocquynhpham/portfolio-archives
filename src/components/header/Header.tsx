import "./Header.scss";
import { useDisclosure } from "@mantine/hooks";
import { Flex, Anchor, NavLink, Title, Drawer } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import HamburgerMenu from "../button-header/HamburgerMenu";
import CloseButton from "../button-header/CloseButton";
import { scrollToElement } from "@/lib/scroll-to-element";
import { useEffect } from "react";

type MenuItem = {
  title: string;
  id?: string;
  href?: string;
};

const HOME_MENU: MenuItem[] = [
  { title: "About", id: "About" },
  { title: "Experience", id: "Experience" },
  { title: "Projects", id: "Projects" },
];

const PROJECT_MENU: MenuItem[] = [{ title: "Home" }];

export type HeaderVariant = "home" | "project";

type HeaderProps = {
  variant?: HeaderVariant;
};

export default function Header({ variant = "home" }: HeaderProps) {
  const { pathname } = useLocation();
  const [openedMenu, { open: openMenu, close: closeMenu }] =
    useDisclosure(false);
  const menuList = variant === "home" ? HOME_MENU : PROJECT_MENU;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <header id="header" className="header">
      <Flex justify={"space-between"} align={"center"} className="w-full h-fit">
        <Anchor
          size="14px"
          fw={500}
          component={Link}
          to={"/"}
          c={"#212121"}
          className="flex-1 header__title"
        >
          <Flex
            align={"center"}
            gap={4}
            wrap={"wrap"}
            className={`is-group ${openedMenu ? "memu-open" : ""}`}
          >
            <Title order={6} className="uppercase header__title--large">
              Ngoc Quynh Pham,{" "}
            </Title>
            <Title order={6} className="uppercase header__title--large">
              Front-end Developer
            </Title>
          </Flex>
        </Anchor>
        {openedMenu ? (
          <CloseButton onClick={closeMenu} />
        ) : (
          <HamburgerMenu onClick={openMenu} />
        )}
      </Flex>

      <Drawer
        size={"100%"}
        className={"menuDrawer"}
        position="top"
        opened={openedMenu}
        onClose={closeMenu}
        overlayProps={{ backgroundOpacity: 0 }}
        withCloseButton={false}
        transitionProps={{
          transition: "slide-left",
          duration: 800,
          timingFunction: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        }}
      >
        <button className="opacity-0"></button>
        {menuList.map((itemMenu, index) => (
          <NavLink
            key={`quynhptn-${index}`}
            onClick={(e) => {
              closeMenu();
              if (variant === "home" && itemMenu.id) {
                scrollToElement(e, itemMenu.id, 100);
              }
            }}
            ta={"center"}
            className="itemMenu"
            label={itemMenu.title.toUpperCase()}
            target={variant === "home" ? "_blank" : undefined}
            href={itemMenu.href ?? "/"}
          />
        ))}
      </Drawer>
    </header>
  );
}
