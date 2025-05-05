import { Box, Container, Skeleton } from "@mui/material";
import NewsLetterCards from "./NewsLetterCards";

const NewsLetterLoader = () => {
  return (
    <>
      <Box
        sx={{
          paddingBottom: "40px",
          backgroundColor: "#F9F9FB",
          position: "relative",
          paddingTop: { xs: "40px", sm: "0", md: "0" },
        }}
      >
        <Container sx={{ maxWidth: "1540px !important" }}>
          <NewsLetterCards />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: { xs: "20px", sm: "40px", md: "70px" },
              flexWrap: { xs: "wrap", sm: "nowrap" },
              paddingTop: { xs: "40px", sm: "355px", md: "355px" },
            }}
          >
            <Box
              sx={{ width: { xs: "100%", sm: "50%", md: "40%", lg: "40%" } }}
            >
              <Skeleton
                variant="rounded"
                sx={{
                  background: "#E0E0E0",
                  mb: "10px",
                  maxWidth: {
                    xs: "100%",
                    sm: "464px",
                    md: "464px",
                    lg: "464px",
                  },
                  width: "100%",
                }}
                height={"29px"}
              />
              <Skeleton
                variant="rounded"
                sx={{
                  background: "#E0E0E0",
                  mb: "10px",
                  maxWidth: {
                    xs: "100%",
                    sm: "464px",
                    md: "464px",
                    lg: "464px",
                  },
                  width: "100%",
                }}
                height={"42px"}
              />
            </Box>
            <Box
              sx={{ width: { xs: "100%", sm: "50%", md: "60%", lg: "60%" } }}
            >
              <Skeleton
                variant="rounded"
                sx={{
                  background: "#E0E0E0",
                  mb: "10px",
                  maxWidth: {
                    xs: "100%",
                    sm: "543px",
                    md: "543px",
                    lg: "543px",
                  },
                  width: "100%",
                }}
                height={"55px"}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default NewsLetterLoader;
