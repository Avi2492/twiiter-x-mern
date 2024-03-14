import React from "react";
import { VStack } from "@chakra-ui/layout";
import { Flex, Box, Avatar, Text, Button } from "@chakra-ui/react";
import {
  RiCalendarLine,
  RiLink,
  RiMapPinLine,
  RiSuitcaseLine,
  RiUserLocationLine,
} from "@remixicon/react";
import { Link } from "react-router-dom";

const UserHeader = () => {
  return (
    <VStack gap={4} alignItems="start">
      <Flex justifyContent={"space-between"} w={"full"} alignItems={"center"}>
        <Box>
          <Avatar
            name="Avinash Pandey"
            src="https://twitter.com/Avinash2492"
            size={"xl"}
          />
        </Box>
        <Box>
          <Button>Edit Profile</Button>
        </Box>
      </Flex>
      <Box>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Avinash Pandey
        </Text>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"sm"}>@avinash2492</Text>
          {/* <Text
            fontSize={"xs"}
            bg={"gray.dark"}
            color={"gray.light"}
            p={1}
            borderRadius={"full"}
          >
            x.net
          </Text> */}
        </Flex>
      </Box>
      <Text>
        Passionate about Paisa 💲 and Open Source 🌟. I am a Full Stack
        Developer who is always learning something new. Currently working on
        MERN stack development with NodeJS, Express, MongoDB, Angular &amp;
        ReactJS.
      </Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <RiSuitcaseLine color={"gray"} />
          <Text color={"gray"}>Software Developer</Text>
        </Flex>
      </Flex>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <RiMapPinLine color={"gray"} />
          <Text color={"gray"}>Ludhiana, Punjab</Text>
        </Flex>
      </Flex>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <RiLink color={"gray"} />
          <Link color={"blue"}>avinashpandey.com</Link>
        </Flex>
      </Flex>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <RiCalendarLine color={"gray"} />
          <Text color={"gray"}>Joined in March 2024</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
