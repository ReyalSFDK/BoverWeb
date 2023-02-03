import * as React from "react";
import { observer } from "mobx-react-lite";
import {
  Text,
  Input,
  Button,
  Stack,
  FormControl, FormErrorMessage
} from "@chakra-ui/react";

interface IProps {
  onCreateRoomCliclk: (title: string, videoUrl: string) => void;
  isLoading: boolean;
  hasError: boolean;
  onCleanError: VoidFunction;
}

export const CreateRoomSection: React.FC<IProps> = observer((props) => {
  const [roomTitle, setRoomTitle] = React.useState("");
  const [roomURL, setRoomURL] = React.useState("");
  const { onCreateRoomCliclk, onCleanError, isLoading, hasError } = props;

  return (
      <Stack spacing={5}>
        <Text
            fontSize="3xl"
            textAlign="center"
            textShadow="1px 1px #F600FF"
            color="white"
        >
          Achou aquele video bacana e quer mostrar para os amigos de forma fácil e rápida?
        </Text>
        <FormControl isInvalid={hasError}>
          <Input
              type="text"
              borderColor="purple"
              variant="filled"
              placeholder="Titulo da Sala"
              disabled={isLoading}
              value={roomTitle}
              _placeholder={{
                color: "gray.500"
              }}
              onChange={(e) => {
                setRoomTitle(e.target.value);
                if (hasError) {
                  onCleanError();
                }
              }}
              mb={5}
          />
          <Input
              type="url"
              variant="filled"
              borderColor="purple"
              placeholder="Link para o video (youtube apenas)"
              disabled={isLoading}
              value={roomURL}
              _placeholder={{
                color: "gray.500"
              }}
              onChange={(e) => {
                setRoomURL(e.target.value);
                if (hasError) {
                  onCleanError();
                }
              }}
          />
          {
            hasError && (
                <FormErrorMessage>Dados inválidos</FormErrorMessage>
            )
          }
        </FormControl>
        <Button
            colorScheme="purple"
            variant="outline"
            disabled={isLoading}
            isLoading={isLoading}
            onClick={() => {
              onCreateRoomCliclk(roomTitle, roomURL);
            }}
        >
          Criar sala
        </Button>
      </Stack>
  );
})
