import React from "react";
import ReactMarkdown from "react-markdown";
import { Typo, Flexbox, AvatarGroup, Button, Card, CardMedia, CardHeader } from "w-design";
import { CodeBlock } from "../components/CodeBlock";

const api = `
| Props       | type    | default | description          |
| ----------- | ------- | ------- | -------------------- |

`;

const CardPage = () => (
  <>
    <Typo appearance="h1">Card</Typo>
    <p>A content container</p>
    <Typo appearance="h3">Example</Typo>
    <Flexbox>
      <Flexbox.Column width={[1, 1 / 2, 1 / 3]}>
        <Card>
          <CardMedia
            imageUrl="https://photo.foodgawker.com/wp-content/uploads/2019/04/3425217.jpg"
            alt=""
          />
          <CardHeader title="Beautiful salad" description="24/12/2019" />
        </Card>
      </Flexbox.Column>

      <Flexbox.Column width={[1, 1 / 2, 1 / 3]}>
        <Card raised>
          <CardHeader>
            <AvatarGroup
              size="sm"
              avatarUrl="https://api.adorable.io/avatars/80/tr"
              name="Hello world"
              description="24/12/2019"
              actions={<Button appearance="clean" iconBefore="fas fa-ellipsis-h" iconOnly />}
            />
          </CardHeader>
          <CardMedia
            imageUrl="https://dak95nwic4sny.cloudfront.net/73/cheetah-safari-41193237-1554105425-ImageGalleryLightboxLarge.jpg"
            alt=""
          />
        </Card>
      </Flexbox.Column>
    </Flexbox>
    <CodeBlock
      exampleCode={`
  import { Card, CardMedia } from "w-design";
    `}
    />
    <h4>Api</h4>
    <ReactMarkdown source={api} />
  </>
);

export default CardPage;
