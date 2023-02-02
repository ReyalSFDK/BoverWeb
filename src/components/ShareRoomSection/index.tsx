import * as React from "react";
import { observer } from "mobx-react-lite";
import { Button, Stack, Text, useToast } from "@chakra-ui/react";

export const ShareRoomSection: React.FC = observer(() => {
  const toast = useToast();

  return (
    <Stack>
      <Text pt={10}>Compartilhe a sala para seus amigos</Text>
      <Button
          variant="ghost"
          colorScheme="purple"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            toast({
              title: "Link copiado para sua area de transfêrencia!",
              colorScheme: "purple",
              status: "success",
            })
          }}
      >
        {window.location.href}
      </Button>
    </Stack>
  );
})
