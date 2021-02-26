import React from 'react'
import { Avatar, Anchor, Nav, Grommet, Header, Text } from "grommet";
import { grommet } from "grommet/themes";
import { User } from "grommet-icons"

const gravatarLink =
  "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80";

function Heading() {
    return (
      <Grommet theme={grommet}>
        <Header background="light-4" pad="small">
          <User size="medium" color="brand"></User>
          <Text color="brand" size="large">
            ListMe
          </Text>
          <Nav direction="row">
            <Anchor label="Home" href="#" />
            <Anchor label="Login" href="#" />
            <Anchor label="Profile" href="#" />
          </Nav>
        </Header>
      </Grommet>
    );
}

export default Heading