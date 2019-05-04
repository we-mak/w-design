import React from "react";
import ReactMarkdown from "react-markdown";
import {
  Typo,
  Flexbox,
  AvatarGroup,
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardFooter
} from "w-design";
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
          <CardContent>
            This strawberry spinach salad is a blend of baby spinach leaves, fresh strawberries, red
            onion, almonds, feta cheese and avocado!
          </CardContent>
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
          <CardContent>
            A safari is an overland journey, usually a trip by tourists in Africa. In the past, the
            trip was often a big-game hunt, but today, safaris are often to observe
          </CardContent>

          <CardFooter>
            <ButtonGroup>
              <Button appearance="primary">Primary action</Button>
              <Button>Secodary action</Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Flexbox.Column>

      <Flexbox.Column width={[1, 1 / 2, 1 / 3]}>
        <Card isLoading>
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
          <CardContent>
            A safari is an overland journey, usually a trip by tourists in Africa. In the past, the
            trip was often a big-game hunt, but today, safaris are often to observe
          </CardContent>

          <CardFooter>
            <ButtonGroup>
              <Button appearance="primary">Primary action</Button>
              <Button>Secodary action</Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Flexbox.Column>
    </Flexbox>
    <CodeBlock
      exampleCode={`
  import { Flexbox, Card, CardMedia } from "w-design";

  <Flexbox>
      <Flexbox.Column width={[1, 1 / 2, 1 / 3]}>
        <Card>
          <CardMedia
            imageUrl="https://photo.foodgawker.com/wp-content/uploads/2019/04/3425217.jpg"
            alt=""
          />
          <CardHeader title="Beautiful salad" description="24/12/2019" />
          <CardContent>
            This strawberry spinach salad is a blend of baby spinach leaves, fresh strawberries, red
            onion, almonds, feta cheese and avocado!
          </CardContent>
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
          <CardContent>
            A safari is an overland journey, usually a trip by tourists in Africa. In the past, the
            trip was often a big-game hunt, but today, safaris are often to observe
          </CardContent>

          <CardFooter>
            <ButtonGroup>
              <Button appearance="primary">Primary action</Button>
              <Button>Secodary action</Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Flexbox.Column>
    </Flexbox>
  <Flexbox>
    <Flexbox.Column width={[1, 1 / 2, 1 / 3]}>
      <Card>
        <CardMedia
          imageUrl="https://photo.foodgawker.com/wp-content/uploads/2019/04/3425217.jpg"
          alt=""
        />
        <CardHeader title="Beautiful salad" description="24/12/2019" />
        <CardContent>
          This strawberry spinach salad is a blend of baby spinach leaves, fresh strawberries, red
          onion, almonds, feta cheese and avocado!
        </CardContent>
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
        <CardContent>
          A safari is an overland journey, usually a trip by tourists in Africa. In the past, the
          trip was often a big-game hunt, but today, safaris are often to observe
        </CardContent>

        <CardFooter>
          <ButtonGroup>
            <Button appearance="primary">Primary action</Button>
            <Button>Secodary action</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Flexbox.Column>
  </Flexbox>
    `}
    />
    <h4>Api</h4>
    <ReactMarkdown source={api} />
  </>
);

export default CardPage;
