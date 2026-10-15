import ProjectShell from '@/app/project/_components/ProjectShell';
import { Flex, Image, Title, Text, List, Blockquote } from "@mantine/core";
import ImageThermos from "./_assets/title_img.png";
import ImageAdminPros from "./_assets/admin-pros.png";
import ImageAdminPro from "./_assets/amin-pro.png";
import ImageWarranty from "./_assets/img_warranty.png";
import { NavLink } from "react-router-dom";
import { useViewportSize } from "@mantine/hooks";

const Thermos = () => {
  const { width } = useViewportSize();
  return (
    <ProjectShell>
          <Flex className="m-auto" direction={"column"} gap={24}>
          <Title className="project__title" order={width < 573 ? 4 : 2}>
              Thermos
            </Title>
            <div className="w-fit flex items-center rounded-full bg-teal-300/10 px-3 py-1 font-medium leading-6 text-[#0CA16E]">
              Currently in development.
            </div>
            <Flex direction={"column"} gap={12} ml={12}>
              <Text fs={"italic"}>📅 Year: 2024</Text>
              <Text fs={"italic"}>✅ Role: Analyst; Design & Developer</Text>
              <Text fs={"italic"}>
                👩‍💻 Technologies used: ReactJS, TypeScript, Tailwind CSS, and
                Mantine UI.
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
                  Back in 2019, I began learning about websites, HTML/CSS, and
                  JavaScript. I built a website to sell{" "}
                  <Text className="inline" fs={"italic"}>
                    <NavLink
                      to={"https://watches.ngocquynhpham.com"}
                      target="_blank"
                      className={"text-blue-500 inline"}
                    >
                      watches
                    </NavLink>
                  </Text>
                  , which has now been upgraded to Thermos - an ecommerce site
                  selling thermos flasks.
                </Text>
                {/* <Text lh={"175%"} ml={16} size="md" >
                I spent three months planning, analyzing, designing,
                and developing the Thermos website.
                </Text> */}
                <Blockquote fs={"italic"} p={16} color="blue" mb={16} mt={16}>
                  The project taught me how to led an end-to-end frontend
                  development, from setup a project, implementing modern and
                  responsive UI/UX designs, optimizing performance through
                  efficient state management and assets management, architecting
                  scalable and reusable components while collaborating with
                  backend developers.
                </Blockquote>
                <Text>
                  The project supports two user roles:{" "}
                  <strong> Admin</strong>{" "}
                  and <strong>User</strong>.
                </Text>
                <Flex direction={"column"} gap={12}>
                  <Title
                    c={"gray"}
                    td={"underline"}
                    order={width < 573 ? 6 : 5}
                  >
                    The Admin role
                  </Title>
                  <List size="md" className="hasOrder">
                    <List.Item mb={4}>
                      <Text lh={"175%"} size="md" >
                        You can manage store elements such as Products,
                        Categories, Collections, Quantities, Events, Discounts,
                        Coupons, and Orders (using{" "}
                        <strong className="underline text-blue-500">
                          {" "}
                          Django
                        </strong>{" "}
                        as the backend framework).
                      </Text>
                    </List.Item>
                    <List.Item mb={4}>
                      <Text lh={"175%"} size="md" >
                        Beside, you can view a real-time overview dashboard,
                        data on Product, Quantities, Orders, and revenue through
                        clear, visual charts. (using
                        <strong className="underline text-blue-500">
                          {" "}
                          Recharts
                        </strong>{" "}
                        the Recharts library)
                      </Text>
                    </List.Item>
                  </List>
                  <Title
                    c={"gray"}
                    td={"underline"}
                    order={width < 573 ? 6 : 5}
                  >
                    The User role
                  </Title>
                  <Text lh={"175%"} size="md" >
                    You can have a smooth shopping experience for Thermos
                    bottles, can easily browse Products, view detailed
                    descriptions, add items to your cart, apply discount codes
                    at checkout, even you can manage your discount codes and
                    track the status of orders.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Image
              className="project__image--hero"
              h={"80%"}
              fit="cover"
              src={ImageThermos}
              alt="Thermos - Image"
            />
            <Title className="project__description" order={width < 573 ? 5 : 4}>
              Gallery
            </Title>
            <Image
              className="project__image--hero"
              h={"80%"}
              fit="cover"
              src={ImageAdminPros}
              alt="Thermos - Image"
            />
            <Image
              className="project__image--hero"
              h={"80%"}
              fit="cover"
              src={ImageAdminPro}
              alt="Thermos - Image"
            />
            <Image
              className="project__image--hero"
              h={"80%"}
              fit="cover"
              src={ImageWarranty}
              alt="Thermos - Image"
            />
          </Flex>
    </ProjectShell>
  );
};

export default Thermos;
