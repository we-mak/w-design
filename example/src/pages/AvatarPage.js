import React from "react";
import { Typo, Avatar } from "w-design";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "../components/CodeBlock";

const avtApi = `
| Props       | Type | default | description |
| ----------- | ---- | ------- | ----------- |
| size        |      |         |             |
| presence    |      |         |             |
| avatarUrl   |      |         |             |
| dataInitial |      |         |             |
| alt         |      |         |             |
`;

const AvatarPage = () => {
  return (
    <>
      <Typo appearance="h1">Avatar</Typo>
      Avatar component represents user profile picture. The presence mark shows user status, it
      could optionally used.
      <Typo appearance="h3">Usage</Typo>
      <CodeBlock language="lang-js">{`import { Avatar } from "w-design";`}</CodeBlock>
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
      <p />
      <Typo appearance="h4">Data init</Typo>
      <p>
        Background color is random auto generate from theme colors. Initial data from user name if
        there is no avatar image is the uppercase of first 2 letters.
      </p>
      <Avatar m={1} size="xxl" dataInitial="Thomas Edison" />
      <Avatar m={1} size="xl" dataInitial="Jason mars" />
      <Avatar m={1} size="lg" dataInitial="jimmy hendrix" />
      <Avatar m={1} size="md" dataInitial="Thành Nam" />
      <Avatar m={1} size="sm" dataInitial="Thomas Edison" />
      <Avatar m={1} size="xs" dataInitial="Thomas Edison" />
      <p />
      <Typo appearance="h3">Api</Typo>
      <ReactMarkdown source={avtApi} />
    </>
  );
};

export default AvatarPage;
