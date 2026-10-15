import { ActionIcon, Flex, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import IconArrowBack from "../../assets/icons/IconArrowBack";

const BackToPrev = ({ link_to = "/project" }: { link_to?: string }) => {
  const navigate = useNavigate();
  return (
    <Flex
    w={"fit-content"}
      gap={8}
      py={12}
      align={"center"}
      className="cursor-pointer"
      onClick={() => {
        navigate(link_to);
      }}
    >
      <ActionIcon color="#000" variant={"transparent"}>
        <IconArrowBack />
      </ActionIcon>
      <Title className="project__title" order={4}>
        Back
      </Title>
    </Flex>
  );
};

export default BackToPrev;
