import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, connectHits } from "react-instantsearch-dom";
import { Menu, MenuItem, Card, CardContent } from "w-design";

const searchClient = algoliasearch("K47BKENZVP", "2e87e4408c81b84b432074912e2174fa");

const Hits = connectHits(({ hits }) => (
  <div style={{ position: "absolute" }}>
    <Card>
      <CardContent>
        <Menu>
          {hits.map(hit => (
            <MenuItem key={hit.objectID}>{hit.name}</MenuItem>
          ))}
        </Menu>
      </CardContent>
    </Card>
  </div>
));

export const Search = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <InstantSearch searchClient={searchClient} indexName="w-design">
      <SearchBox
        style={{ fontSize: ".8rem" }}
        onFocus={() => setMenuOpen(true)}
        onBlur={() => setMenuOpen(false)}
      />
      {menuOpen && <Hits />}
    </InstantSearch>
  );
};
