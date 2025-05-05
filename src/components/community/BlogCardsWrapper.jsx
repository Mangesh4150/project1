import { useTranslation } from "react-i18next";
import BlogCard from "./BlogCard";
import Grid from "@mui/material/Grid2";

const BlogCardsWrapper = () => {
  const { t } = useTranslation();
  const blogsData = [
    {
      title: t("community.blogsData.blog1.title"),
      date: t("community.blogsData.blog1.date"),
      category: t("community.blogsData.blog1.category"),
      description: t("community.blogsData.blog1.description"),
      image: "https://picsum.photos/200",
    },
    {
      title: t("community.blogsData.blog2.title"),
      date: t("community.blogsData.blog2.date"),
      category: t("community.blogsData.blog2.category"),
      description: t("community.blogsData.blog2.description"),
      image: "https://picsum.photos/200",
    },
    {
      title: t("community.blogsData.blog3.title"),
      date: t("community.blogsData.blog3.date"),
      category: t("community.blogsData.blog3.category"),
      description: t("community.blogsData.blog3.description"),
      image: "https://picsum.photos/200",
    },
  ];
  return (
    <>
      <Grid
        container
        spacing={3}
        rowGap={{ xs: 2, sm: 3 }}
        columns={{ xs: 1, sm: 2, md: 3 }}
      >
        {blogsData.map((card, index) => {
          return (
            <Grid key={index} size={1}>
              <BlogCard key={index} {...card} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default BlogCardsWrapper;
