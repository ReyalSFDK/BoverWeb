import * as React from "react";
import { observer } from "mobx-react-lite";
import { Flex, Image } from "@chakra-ui/react";

import { ColorModeSwitcher } from "../ColorModeSwitcher";

export const Navbar: React.FC = observer(() => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Image src="logo.png" alt="BoVer logo" w={20}/>
      <ColorModeSwitcher
          position="absolute"
          right={0}
          size="lg"
          fontSize="2xl"
          w={20}
      />
    </Flex>
  );
})
