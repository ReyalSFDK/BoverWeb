import * as React from "react";
import { observer } from "mobx-react-lite";
import { Image, Badge, Box, Flex, Text } from "@chakra-ui/react";
import { youtubeCover } from "../../utils/youtubeCover";

interface IProps {
  id: string;
  title: string;
  videoURL: string;
}

export const RoomCard: React.FC<IProps> = observer((props) => {
  const { id, videoURL, title } = props;

  return (
      <Box
          w={300}
      >
        <Box
            position="relative"
            height={200}
        >
          <Image
              w="full"
              zIndex="-1"
              position="absolute"
              backgroundSize="cover"
              src={youtubeCover(videoURL, "big")}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
          />
          <Flex justifyContent="space-between">
            <Badge backgroundColor="red" color="white" m={3}>
              AO VIVO
            </Badge>
            <Badge backgroundColor="blackAlpha.500" color="white" m={3}>
              ID: #{id}
            </Badge>
          </Flex>
        </Box>
        <Text
            backgroundColor="blackAlpha.500"
            fontWeight="bold"
            py={3}
            textAlign="center"
        >
          {title}
        </Text>
      </Box>
  );
})
