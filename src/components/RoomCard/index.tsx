import * as React from "react";
import { observer } from "mobx-react-lite";
import { Image, Badge, Box, Flex } from "@chakra-ui/react";
import { youtubeCover } from "../../utils/youtubeCover";

interface IProps {
  title: string;
  videoURL: string;
}

export const RoomCard: React.FC<IProps> = observer((props) => {
  const { videoURL } = props;

  return (
      <Box
          w={300}
      >
        <Box
            position="relative"
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
              2 VISUALIZAÇÕES
            </Badge>
          </Flex>
        </Box>
      </Box>
  );
})
