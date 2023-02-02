import * as React from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Box, Heading, Spinner, Stack } from "@chakra-ui/react";
import { Navbar, RoomCard } from "../../components";
import { Store } from "./store";

export const Home: React.FC = observer(() => {
  const store = useLocalObservable(() => new Store());

  React.useEffect(
      () => {
        store.fetchRooms();
      },
      [store],
  );

	return (
      <Box>
        <Navbar />
        <Box p={10}>
          <Heading as="h3" size="lg" py={5}>
            Ultimas 10 Salas {store.loading && <Spinner color="#F600FF" />}
          </Heading>
          <Stack spacing={2} direction={["column", "row"]}>
            {store.rooms.map((room) => (
                <RoomCard title={room.title} videoURL={room.videoURL} />
            ))}
          </Stack>
        </Box>

      </Box>
	);
})
