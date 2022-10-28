import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons'

function MenuControll({text}) {
  return (
    <>
    <Menu>
  <MenuButton  fontSize={"sm"} fontWeight="600" margin={"0px"} padding="0px" as={Button} rightIcon={<ChevronDownIcon />}>
    {text}
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
    
    </>
  )
}

export default MenuControll