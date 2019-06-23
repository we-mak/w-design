import React from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox
  // Hits
} from "react-instantsearch-dom";

const searchClient = algoliasearch("K47BKENZVP", "2e87e4408c81b84b432074912e2174fa");

export const Search = () => (
  <InstantSearch searchClient={searchClient} indexName="w-design">
    <SearchBox />
    {/* <Hits /> */}
  </InstantSearch>
);
