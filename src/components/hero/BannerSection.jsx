import React, { useEffect, useState } from "react";
import BannerContent from "./BannerContent";
import ServicesListing from "./ServicesListing";
import FiltersCard from "./FiltersCard";
import { Box } from "@mui/material";
import BannerSectionLoader from "./BannerSectionLoader";

const BannerSection = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <BannerSectionLoader />;

  return (
    <Box sx={{ position: "relative" }}>
      <BannerContent />
      <FiltersCard />
      <ServicesListing />
    </Box>
  );
};

export default BannerSection;
