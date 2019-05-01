import React from "react";
import { Typo, Avatar, AvatarGroup, Button, ButtonGroup } from "w-design";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "../components/CodeBlock";

const avtApi = `
| Props       | Type                                        | default | description                     |
| ----------- | ------------------------------------------- | ------- | ------------------------------- |
| size        | string: "xs", "sm", "md", "lg", "xl", "xxl" | "md"    | size of avatar                  |
| presence    | string: "online", "offline", "busy"         | N/A     | mark of user status             |
| avatarUrl   | string                                      |         |                                 |
| dataInitial | string                                      | "WM"    | initial data name inside avatar |
| alt         | string                                      |         | alt attribute                   |


Avatar is extended with props [space](https://styled-system.com/api#space) from **styled-system**.
`;

const avtGroupApi = `
Inherit all props from \`Avatar\`

| Props       | Type                     | default | description              |
| ----------- | ------------------------ | ------- | ------------------------ |
| name        | string                   |         | name of avatar           |
| description | string, ReactChild       |         | avatar group description |
| actions     | ReactChild, ReactChild[] |         | avatar group actions     |
`;

const AvatarPage = () => {
  return (
    <>
      <Typo appearance="h1">Avatar</Typo>
      Avatar component represents user profile picture. The presence mark shows user status, it
      could optionally used.
      <Typo appearance="h3">Example</Typo>
      <Avatar m={1} />
      <Avatar
        m={1}
        presence="online"
        size="xxl"
        avatarUrl="https://api.adorable.io/avatars/240/thunder"
      />
      <Avatar
        m={1}
        presence="offline"
        size="xl"
        avatarUrl="https://api.adorable.io/avatars/180/hammer"
      />
      <Avatar
        m={1}
        presence="busy"
        size="lg"
        avatarUrl="https://api.adorable.io/avatars/120/ginger"
      />
      <Avatar
        m={1}
        presence="online"
        size="md"
        avatarUrl="https://api.adorable.io/avatars/120/sharp"
      />
      <Avatar
        m={1}
        presence="offline"
        size="sm"
        avatarUrl="https://api.adorable.io/avatars/80/vn"
      />
      <Avatar m={1} size="xs" avatarUrl="https://api.adorable.io/avatars/60/kr" />
      <CodeBlock
        exampleCode={`
  import { Avatar } from "w-design";

  <Avatar m={1} />
  <Avatar
    m={1}
    presence="online"
    size="xxl"
    avatarUrl="https://api.adorable.io/avatars/240/thunder"
  />
  <Avatar
    m={1}
    presence="offline"
    size="xl"
    avatarUrl="https://api.adorable.io/avatars/180/hammer"
  />
  <Avatar
    m={1}
    presence="busy"
    size="lg"
    avatarUrl="https://api.adorable.io/avatars/120/ginger"
  />
  <Avatar
    m={1}
    presence="online"
    size="md"
    avatarUrl="https://api.adorable.io/avatars/120/sharp"
  />
  <Avatar
    m={1}
    presence="offline"
    size="sm"
    avatarUrl="https://api.adorable.io/avatars/80/vn"
  />
  <Avatar m={1} size="xs" avatarUrl="https://api.adorable.io/avatars/60/kr" />
`}
      />
      <p />
      <Typo appearance="h4">Data init</Typo>
      <p>
        Background color is random auto-generated from theme colors. Initial data from user name if
        there is no avatar image is the uppercase of first 2 letters.
      </p>
      <Avatar m={1} size="xxl" dataInitial="Thomas Edison" />
      <Avatar m={1} size="xl" dataInitial="Jason mars" />
      <Avatar m={1} size="lg" dataInitial="jimmy hendrix" />
      <Avatar m={1} size="md" dataInitial="Thành Nam" />
      <Avatar m={1} size="sm" dataInitial="Thomas Edison" />
      <Avatar m={1} size="xs" dataInitial="Thomas Edison" />
      <CodeBlock
        exampleCode={`
<Avatar m={1} size="xxl" dataInitial="Thomas Edison" />
<Avatar m={1} size="xl" dataInitial="Jason mars" />
<Avatar m={1} size="lg" dataInitial="jimmy hendrix" />
<Avatar m={1} size="md" dataInitial="Thành Nam" />
<Avatar m={1} size="sm" dataInitial="Thomas Edison" />
<Avatar m={1} size="xs" dataInitial="Thomas Edison" />
  `}
      />
      <p />
      <Typo appearance="h3">Api</Typo>
      <ReactMarkdown source={avtApi} />
      <p />
      <Typo appearance="h1">Avatar Group</Typo>
      <Typo appearance="h3">Example</Typo>
      <div style={{ maxWidth: "600px" }}>
        <AvatarGroup
          avatarUrl="https://api.adorable.io/avatars/80/vn"
          name="Hello world"
          description={
            <div>
              This is the description of the avatar, can be apply with string or react child
            </div>
          }
          actions={
            <ButtonGroup>
              <Button appearance="primary">Message</Button>
              <Button>More</Button>
            </ButtonGroup>
          }
        />
      </div>
      <CodeBlock
        exampleCode={`
  import { AvatarGroup } from "w-design";

  <AvatarGroup
    avatarUrl="https://api.adorable.io/avatars/80/vn"
    name="Hello world"
    description={
      <div>
        This is the description of the avatar, can be apply with string or react child
      </div>
    }
    actions={
      <ButtonGroup>
        <Button appearance="primary">Message</Button>
        <Button>More</Button>
      </ButtonGroup>
    }
  />
      `}
      />
      <p />
      <Typo appearance="h3">Api</Typo>
      <ReactMarkdown source={avtGroupApi} />
    </>
  );
};

export default AvatarPage;
