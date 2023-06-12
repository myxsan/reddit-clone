import useDirectory from "@/src/hooks/useDirectory";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useOutsideClick,
  Image,
} from "@chakra-ui/react";
import { useRef } from "react";
import { TiHome } from "react-icons/ti";
import Communities from "./Communities";

const UserMenu: React.FC = () => {
  const { directoryState, toggleMenuOpen, setDirectoryState } = useDirectory();
  const menuListRef = useRef<HTMLDivElement>(null);
  const closeMenu = () => {
    setDirectoryState((prev) => ({ ...prev, isOpen: false }));
  };

  useOutsideClick({
    ref: menuListRef,
    handler: closeMenu,
  });

  return (
    <Menu isOpen={directoryState.isOpen}>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
        mr={2}
        ml={{ base: 0, md: 2 }}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
        onClick={toggleMenuOpen}
      >
        <Flex
          ref={menuListRef}
          align="center"
          justify="center"
          width={{ base: "auto", lg: "200px" }}
        >
          <Flex align="center">
            {directoryState.selectedMenuItem.imageURL ? (
              <Image
                src={directoryState.selectedMenuItem.imageURL}
                borderRadius="full"
                boxSize="24px"
                mr={2}
              />
            ) : (
              <Icon
                fontSize={24}
                mr={{ base: 1, md: 2 }}
                as={directoryState.selectedMenuItem.icon}
                color={directoryState.selectedMenuItem.iconColor}
              />
            )}
            <Flex display={{ base: "none", ls: "flex" }}>
              <Text fontWeight={600} fontSize="10pt">
                {directoryState.selectedMenuItem.displayText}
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon ml={0.5} />
        </Flex>
      </MenuButton>
      <MenuList>
        <Communities />
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
