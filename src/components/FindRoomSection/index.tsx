import * as React from "react";
import { observer } from "mobx-react-lite";
import {
  Text,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
  Stack,
  FormControl, FormErrorMessage
} from "@chakra-ui/react";

interface IProps {
  onFindRoomClick: (roomId: string) => void;
  isLoading: boolean;
  hasError: boolean;
  onCleanError: VoidFunction;
}

export const FindRoomSection: React.FC<IProps> = observer((props) => {
  const [roomIdText, onSetRoomIdText] = React.useState("");
  const { onFindRoomClick, onCleanError, hasError, isLoading } = props;

  return (
      <Stack spacing={5}>
        <Text
            fontSize="3xl"
            textAlign="center"
            textShadow="1px 1px #5F1BE6"
            color="white"
        >
          Quer se juntar com aquela galerinha do mal pra ver aquele video maroto ou aquele meme muito bom pra resenhar?
        </Text>
        <FormControl isInvalid={hasError}>
          <InputGroup>
            <InputLeftAddon
                borderColor="purple"
                children="#"
            />
            <Input
                variant="filled"
                type="tel"
                borderColor="purple"
                _placeholder={{
                  color: "gray.500"
                }}
                placeholder="ID da sala"
                disabled={isLoading}
                value={roomIdText}
                onChange={(e) => {
                  onSetRoomIdText(e.target.value);
                  if (hasError) {
                    onCleanError();
                  }
                }}
            />
          </InputGroup>
          {
            hasError && (
                <FormErrorMessage>Sala não encontrada</FormErrorMessage>
            )
          }
        </FormControl>
        <Button
            colorScheme="purple"
            variant="outline"
            disabled={isLoading}
            isLoading={isLoading}
            onClick={() => {
              onFindRoomClick(roomIdText);
            }}
        >
          Entrar na sala
        </Button>
      </Stack>
  );
})
