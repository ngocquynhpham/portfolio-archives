import ProjectShell from '@/app/project/_components/ProjectShell';
import { Flex, Image, Title, Text, Blockquote } from "@mantine/core";
import ImageNAB from "./_assets/nab_desktop.png";
import ImageNABMobile from "./_assets/nab_mobile.png";
import ImageTitleSmall from "./_assets/nab_hero_small.png";
import { NavLink } from "react-router-dom";
import { useViewportSize } from "@mantine/hooks";

const NamABank = () => {
  const { width } = useViewportSize();
  return (
    <ProjectShell>
          <Flex direction={"column"} gap={24}>
          <Title className="project__title" order={width < 573 ? 4 : 2}>
              Online Running Tournament 🪴
            </Title>
          <Flex gap={12}>
          <div className="w-fit flex items-center rounded-full bg-gray-300/20 px-3 py-1 font-medium leading-6 text-gray-500">
              Outsource Project
            </div>
            <div className="w-fit flex items-center rounded-full bg-red-300/20 px-3 py-1 font-medium leading-6 text-red-500">
            Expired
            </div>
          </Flex>
            <Flex direction={"column"} gap={12} ml={12}>
              <Text fs={"italic"}>
                🌐{" "}
                <NavLink
                  to={"https://chayvituonglaixanh.com.vn/"}
                  className={"text-blue-500"}
                >
                  https://chayvituonglaixanh.com.vn
                </NavLink>
              </Text>
              <Text fs={"italic"}>📅 Year: 2024</Text>
              <Text fs={"italic"}>✅ Role: UI Design; Front-end Developer</Text>
              <Text fs={"italic"}>
                👩‍💻 Technologies used: HTML/CSS, Javascript
              </Text>
              <Text fs={"italic"}>
                🪴 Note: To show respect for the product, I will use its
                original Vietnamese name and image.
              </Text>
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 573 ? 5 : 4}
              >
                Project Description
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                {" "}
                <Text lh={"175%"} size="md">
                  Chay Vi Tuong Lai Xanh is an online running tournament by{" "}
                  <a
                    href="https://www.namabank.com.vn/"
                    rel="noreferrer noopener"
                  >
                    <strong className="text-blue-500">Nam A Bank </strong>
                  </a>
                  and the{" "}
                  <a href="https://5h30.vn/" rel="noreferrer noopener">
                    <strong className="text-blue-500"> 5h30 </strong>
                  </a>
                  running community, promoting a green lifestyle in the
                  community.
                </Text>
                <Blockquote fs={"italic"} p={16} color="blue" mb={16} mt={16}>
                  The 2024 tournament helps create green learning spaces for
                  young people and encourages eco-friendly habits through
                  physical activity.
                </Blockquote>
                <Text lh={"175%"} size="md">
                  I developed this product by generating ideas from customer
                  requirements, creating design layouts and color schemes based
                  on the key visual. Built the online running tournament using
                  HTML, CSS, and JavaScript, and integrated{" "}
                  <a href="https://www.strava.com/" rel="noreferrer noopener">
                    <strong className="text-orange-500"> Strava API </strong>
                  </a>{" "}
                  to retrieve activity data. The website includes dynamic
                  leaderboards, allowing runners to track and compare their
                  performance in real time.
                </Text>
              </Flex>
            </Flex>
            {/* <Flex direction={"column"} gap={12}>
              {" "}
              <Title
                className="project__description"
                 order={width < 573 ? 3 : 2}
              >
                Project Role(s):
              </Title>
              <List ml={12} size="md">
                <List.Item mb={4}>UI Design</List.Item>
                <List.Item mb={4}>Front-end Develop</List.Item>
              </List>
            </Flex> */}

            <NavLink to={"https://chayvituonglaixanh.com.vn/"}>
              <Image
                className="project__image--hero"
                h={"80%"}
                fit="cover"
                src={width < 768 ? ImageTitleSmall : ImageNAB}
                alt="Online Running Tournament 🪴"
              />
            </NavLink>

            {width < 768 && (
              <Image
                className="project__image--show-case"
                fit="cover"
                src={ImageNABMobile}
                alt="Online Running Tournament 🪴"
              />
            )}
          </Flex>
    </ProjectShell>
  );
};

export default NamABank;
