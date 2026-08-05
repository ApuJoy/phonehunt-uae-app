"use client";

import { useState } from "react";

import SearchSection from "./SearchSection";
import FeaturedPhones from "./FeaturedPhones";
import TopBrands from "./TopBrands";
import WhyChoose from "./WhyChoose";
import LatestArticles from "./LatestArticles";

export default function HomeContent() {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchSection
        search={search}
        setSearch={setSearch}
      />

      <FeaturedPhones search={search} />

      <TopBrands />
      <WhyChoose />
      <LatestArticles />
    </>
  );
}