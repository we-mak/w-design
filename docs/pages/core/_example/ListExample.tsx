import * as React from "react";
import { List, ListItem, ListFooter, Button } from "@w-design/core";

export default () => {
  const listData = [
    {
      title: "White wheat",
      description:
        "W-design is give you an option to provide solution to make great UI for you web application",
      thumbnail: "https://source.unsplash.com/random?car/100x100"
    },
    {
      title: "Bread meat",
      description:
        "W-design is give you an option to provide solution to make great UI for you web application",
      thumbnail: "https://source.unsplash.com/random?food/100x100"
    },
    {
      title: "Michael Angelo",
      description:
        "W-design is give you an option to provide solution to make great UI for you web application",
      thumbnail: "https://source.unsplash.com/random?art/100x100"
    },
    {
      title: "Rocket man",
      description:
        "W-design is give you an option to provide solution to make great UI for you web application",
      thumbnail: "https://source.unsplash.com/random?scientist/100x100"
    }
  ];

  const [loadingState, setLoading] = React.useState(false);

  return (
    <>
      <div>Example full list</div>
      <List
        header="List header"
        sourceData={listData}
        isLoading={loadingState}
        rows={(item: any) => {
          return (
            <ListItem
              thumbnail={item.thumbnail}
              title={item.title}
              description={item.description}
              actions={[<Button key={0}>action 1</Button>, <Button key={1}>action 2</Button>]}
              hasDivider
            >
              this is the child content
            </ListItem>
          );
        }}
        footer={
          <ListFooter>
            <Button onClick={() => setLoading(!loadingState)}>Set Loading</Button>
          </ListFooter>
        }
      ></List>

      <br />
      <div>Empty list example</div>
      <List header="Empty list"></List>
    </>
  );
};
