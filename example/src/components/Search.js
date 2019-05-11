import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

const searchClient = algoliasearch("K47BKENZVP", "18a3b3cc83a287d9693cb5ce1691279d");

export const Search = () => (
  <InstantSearch searchClient={searchClient} indexName="w-design" style={{ display: "inherit" }}>
    <SearchBox />
    <Hits />
  </InstantSearch>
);
