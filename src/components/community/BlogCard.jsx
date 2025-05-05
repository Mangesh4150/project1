import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";

const BlogCard = ({ title, description, image, date, category }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        cursor: "pointer",
        flexDirection: "column",
        borderRadius: 4,
        border: `1px solid ${theme.palette.background.default}`,
        boxShadow: "none",
        marginInline: { xs: "auto", sm: 0 },
      }}
    >
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 1 }}
      >
        <img
          src={image}
          alt="blog"
          style={{
            width: "100%",
            height: 200,
            objectFit: "cover",
            borderRadius: 12,
          }}
        />
        <Box sx={{ display: "flex", gap: 3, mt: 1 }}>
          <Typography variant="subtitle2" color={theme.palette.secondary.main}>
            {date}
          </Typography>
          <Typography variant="subtitle2" color={theme.palette.secondary.main}>
            {category}
          </Typography>
        </Box>
        <Typography
          variant="h6"
          color={theme.palette.primary.main}
          sx={{ fontWeight: 800, lineHeight: 1.4 }}
        >
          {title}
        </Typography>

        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ mb: 1, lineHeight: 1.4 }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
