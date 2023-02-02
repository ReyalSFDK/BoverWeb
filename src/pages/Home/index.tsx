import * as React from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import {
  Box,
  Button,
  Container, Flex,
  Heading,
  Input,
  Spinner,
  Stack,
  Text
} from "@chakra-ui/react";
import { Navbar, RoomCard, FindRoomSection } from "../../components";
import { Store } from "./store";

export const Home: React.FC = observer(() => {
  const store = useLocalObservable(() => new Store());

  React.useEffect(
      () => {
        store.getLastedRoomsShelf.fetch();
      },
      [store],
  );

	return (
      <Box>
        <Navbar />
        <Flex px={50} pt={70} pb={70} alignItems="flex-end">
          <Container w={["50%", "full"]}>
            <FindRoomSection
                loading={false}
                onFindRoomClick={(roomId) => {
                  store.preFetchFindRoomShelf.fetch(roomId, () => {});
                }}
                onCleanFetchFindRoomError={() => store.preFetchFindRoomShelf.setHasError(false)}
                preFetchFindRoomError={store.preFetchFindRoomShelf.hasError}
            />
          </Container>
          <Container w={["50%", "full"]}>
            <Stack>
              <Text>Achou aquele video bacana e quer mostrar pra rapaize?</Text>
              <Input type="text"  variant="filled" placeholder="Titulo da Sala" />
              <Input type="url" variant="filled" placeholder="Link para o video (youtube apenas)" />
              <Button colorScheme="purple" variant="outline">
                Criar sala
              </Button>
            </Stack>
          </Container>
        </Flex>
        <Box p={10}>
          <Heading as="h3" size="lg" py={5}>
            Ultimas 10 Salas {store.getLastedRoomsShelf.isLoading && <Spinner color="#F600FF" />}
          </Heading>
          <Stack spacing={2} direction={["column", "row"]}>
            {store.getLastedRoomsShelf.rooms.map((room) => (
                <RoomCard title={room.title} videoURL={room.videoURL} id={room.id} />
            ))}
          </Stack>
        </Box>

      </Box>
	);
})
