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
  loading: boolean;
  preFetchFindRoomError: boolean;
  onCleanFetchFindRoomError: VoidFunction;
}

export const FindRoomSection: React.FC<IProps> = observer((props) => {
  const [roomIdText, onSetRoomIdText] = React.useState("");
  const { onFindRoomClick, onCleanFetchFindRoomError, loading, preFetchFindRoomError } = props;

  return (
      <Stack spacing={5}>
        <Text fontSize="2xl" textAlign="center">
          Deseja se juntar com a galerinha para ver aquele video legalzim?
        </Text>
        <FormControl isInvalid={preFetchFindRoomError}>
          <InputGroup>
            <InputLeftAddon children="#" />
            <Input
                variant="filled"
                type="tel"
                placeholder="ID da sala"
                disabled={loading}
                value={roomIdText}
                onChange={(e) => {
                  onSetRoomIdText(e.target.value);
                  if (preFetchFindRoomError) {
                    onCleanFetchFindRoomError();
                  }
                }}
            />
          </InputGroup>
          {
            preFetchFindRoomError && (
                <FormErrorMessage>Sala não encontrada</FormErrorMessage>
            )
          }
        </FormControl>
        <Button
            colorScheme="purple"
            variant="outline"
            disabled={loading}
            onClick={() => {
              onFindRoomClick(roomIdText);
            }}
        >
          Entrar na sala
        </Button>
      </Stack>
  );
})
