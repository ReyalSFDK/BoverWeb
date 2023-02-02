import * as React from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import {
  Box,
  Container, Flex,
  Heading,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { Navbar, RoomCard, FindRoomSection, CreateRoomSection } from "../../components";
import { Store } from "./store";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = observer(() => {
  const store = useLocalObservable(() => new Store());
  const navigate = useNavigate();

  const onGoToRoomPage = (roomId: string) => navigate(`/rooms/${roomId}`);

  React.useEffect(
      () => {
        store.getLastedRoomsShelf.fetch();
      },
      [store],
  );

	return (
      <Box>
        <Navbar onLogoPress={() => navigate("/")} />
        <Flex
            position="relative"
            px={50}
            pt={70}
            pb={70}
            alignItems="flex-end"
            bgImage="url(https://cdn.shopify.com/s/files/1/2347/1863/articles/Banner_1d346cfa874e5343dfa5664dec26ca43_2000_1770x.png)"
            bgRepeat="no-repeat"
            bgSize="cover"
            wrap="wrap"
        >
          <Container
              w={{
                base: "50%",
                sm: "100%"
              }}
              zIndex={1}
          >
            <FindRoomSection
                isLoading={false}
                onFindRoomClick={(roomId) => {
                  store.preFetchFindRoomShelf.fetch(
                      roomId,
                      () => {
                        onGoToRoomPage(roomId);
                      });
                }}
                onCleanError={() => store.preFetchFindRoomShelf.setHasError(false)}
                hasError={store.preFetchFindRoomShelf.hasError}
            />
          </Container>
          <Container
              w={{
                base: "50%",
                sm: "100%"
              }}
              zIndex={1}
          >
            <CreateRoomSection
                onCreateRoomCliclk={(title, videoURL) => {
                  store.createRoomShelf.fetch(
                      title,
                      videoURL,
                      (roomId) => {
                        onGoToRoomPage(roomId);
                      },
                  );
                }}
                isLoading={store.createRoomShelf.isLoading}
                hasError={store.createRoomShelf.hasError}
                onCleanError={() => store.createRoomShelf.setHasError(false)}
              />
          </Container>

          <Box
              zIndex={0}
              pos="absolute"
              width="100%"
              height="100%"
              top={0}
              right={0}
              left={0}
              bottom={0}
              bgColor="rgba(0, 0, 0, 0.6)"
          />
        </Flex>
        <Box p={10}>
          <Heading as="h3" size="lg" py={5}>
            Bover as últimas 10 Salas {store.getLastedRoomsShelf.isLoading && <Spinner color="#F600FF" />}
          </Heading>
          <Stack spacing={2} direction={["column", "row"]} wrap="wrap">
            {store.getLastedRoomsShelf.rooms.map((room) => (
                <RoomCard
                    title={room.title}
                    videoURL={room.videoURL}
                    id={room.id}
                    key={room.videoURL}
                    onClick={() => onGoToRoomPage(room.id)}
                />
            ))}
          </Stack>
        </Box>

      </Box>
	);
})
