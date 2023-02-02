import * as React from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import {
  Box,
  Flex,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Navbar, ShareRoomSection } from "../../components";
import { Store } from "./store";
import { Link, useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { youtubeVideoId } from "../../utils/youtubeVideoId";

export const Room: React.FC = observer(() => {
  const store = useLocalObservable(() => new Store());
  const navigate = useNavigate();
  const { roomId } = useParams();

  React.useEffect(
      () => {
        store.findRoomShelf.fetch(roomId || "");
      },
      [store, roomId],
  );

	return (
      <Box>
        <Navbar onLogoPress={() => navigate("/")} />
        {store.findRoomShelf.isLoading && (
            <Flex justifyContent="center">
              <Spinner color="#F600FF" size="xl" my={20} />
            </Flex>
        )}
        {(!store.findRoomShelf.isLoading && store.findRoomShelf.hasError) && (
            <Text colorScheme="red" textAlign="center" my={20}>
              Não conseguimos encontrar essa sala.
              <Text fontWeight="bold" mt={2}>
                <Link to="/">Clique aqui para voltar para a tela inicial</Link>
              </Text>
            </Text>
          )}
        {(!store.findRoomShelf.isLoading && store.findRoomShelf.room) && (
            <Flex direction="column" justifyContent="center" alignItems="center">
              <Text fontWeight="bold" fontSize="2xl" py={5}>
                {store.findRoomShelf.room.title}
              </Text>
              <YouTube
                  videoId={youtubeVideoId(store.findRoomShelf.room.videoURL)}
              />
              <ShareRoomSection />
            </Flex>
        )}
      </Box>
	);
})
