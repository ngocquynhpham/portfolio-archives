import ProjectShell from '@/app/project/_components/ProjectShell';
import { Flex, Title, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { useViewportSize } from "@mantine/hooks";

const TechX = () => {
  const { width } = useViewportSize();
  return (
    <ProjectShell>
          <Flex className="m-auto" direction={"column"} gap={24}>
          <Title className="project__title" order={width < 573 ? 4 : 2}>
              UI Template Library for SaaS Platforms
            </Title>
            <Flex direction={"column"} gap={12} ml={12}>
              <Text className={"text-blue-500"} fs={"italic"}>
                🏢 Company: TechX Viet Nam
              </Text>
              <Text fs={"italic"}>
                🌐 Platform:{" "}
                <NavLink to={"https://easier.jp/"} className={"text-blue-500"}>
                  Easier
                </NavLink>
                ;{" "}
                <NavLink
                  to={"https://www.sungrove.co.jp/itszai/"}
                  className={"text-blue-500"}
                >
                  It'szai
                </NavLink>
              </Text>

              <Text fs={"italic"}>📅 Duration: ~10 months</Text>
              <Text fs={"italic"}>🎗️ Team-size: 20+</Text>
              <Text fs={"italic"}>✅ Role: Developer</Text>
              <Text fs={"italic"}>
                👩‍💻 Used: HTML, CSS, JavaScript, EChartJS, SwipperJS.
              </Text>
            </Flex>
            <Flex direction={"column"} gap={12}>
              <Title
                className="project__description"
                order={width < 768 ? 6 : 4}
              >
                Project Description
              </Title>
              <Flex direction={"column"} gap={8} mx={16}>
                <Text className="inline" lh={"175%"} size="md">
                  Developed a library of 10+ responsive HTML/CSS/JavaScript themes for landing pages across multiple business domains. Each theme was structured with modular UI components such as sliders (Swiper), interactive charts (ECharts – bar, pie, line), tables, and banners, enabling flexible assembly and faster customization.
                </Text>
              </Flex>
              <Flex direction={"column"} gap={8} mx={16}>
                <Text className="inline" lh={"175%"} size="md">
                 Worked closely with Japanese designers to translate UI/UX requirements into production-ready templates, applying semantic HTML, SEO, and MEO best practices.
                </Text>
              </Flex>
              <Flex direction={"column"} gap={8} mx={16}>
                <Text className="inline" lh={"175%"} size="md">
                The templates were integrated into two business platforms (Easier, It’szai), supporting SMEs in Japan with scalable and effective digital marketing solutions.
                </Text>
              </Flex>
            </Flex>
          </Flex>
    </ProjectShell>
  );
};

export default TechX;
