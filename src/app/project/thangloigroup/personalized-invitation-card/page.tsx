import ProjectShell from '@/app/project/_components/ProjectShell';
import { Flex, Image, Title, Text } from "@mantine/core";
import Image1 from "./_assets/eThiep1.png";
import Image2 from "./_assets/eThiep2.png";
import { useViewportSize } from "@mantine/hooks";
import { NavLink } from "react-router-dom";

const EThiep = () => {
  const { width } = useViewportSize();
  return (
    <ProjectShell>
          <Flex className="m-auto" direction={"column"} gap={24}>
          <Title className="project__title" order={width < 573 ? 4 : 2}>
              Personalized invitation card
            </Title>
            <div className="w-fit flex items-center rounded-full bg-blue-300/10 px-3 py-1 font-medium leading-6 text-blue-500">
              Internal Application
            </div>
            <Flex direction={"column"} gap={12} ml={12}>
              <Text fs={"italic"}>
                🏢 Company:{" "}
                <NavLink
                  to={"/project/thangloigroup"}
                  className={"text-blue-500"}
                >
                  Thang Loi Group
                </NavLink>
              </Text>
              <Text fs={"italic"}>🤖 Internal name: E-Thiep</Text>
              <Text fs={"italic"}>📅 Year: 2021</Text>
              <Text fs={"italic"}>✅ Role: Developer</Text>
              <Text fs={"italic"}>
                👩‍💻 Technologies used: HTML, CSS, JavaScript.
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
                <Text className="inline" lh={"175%"} size="md" >
                  The Personalized invitation card application, which
                  personalizes and automatically sends invitations with QR codes
                  for check-in, mini-games, and enhances the customer experience
                  at sales events.
                </Text>
              </Flex>
            </Flex>

            <Title className="project__description" order={width < 573 ? 5 : 4}>
              Gallery
            </Title>
            <Image
              className="project__image--hero"
              h={"80%"}
              fit="cover"
              src={Image1}
              alt="EThiep - Image"
            />
            <Image
              className="project__image--hero"
              h={"80%"}
              fit="cover"
              src={Image2}
              alt="EThiep - Image"
            />
          </Flex>
    </ProjectShell>
  );
};

export default EThiep;
