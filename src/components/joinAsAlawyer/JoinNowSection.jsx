import JoinNowContent from "./JoinNowContent";
import { Box, Container, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BoxChart from "./BoxChart";
import { useEffect, useState } from "react";
import JoinNowLoader from "./JoinNowLoader";
const JoinNowSection = () => {
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <JoinNowLoader />;
  return (
    <Box sx={{ py: 8, px: 0, bgcolor: theme.palette.primary.main }}>
      <Container sx={{ maxWidth: "1540px !important" }}>
        <Grid
          container
          spacing={5}
          rowGap={{ xs: 5, lg: 3 }}
          columns={{ xs: 1, lg: 12 }}
          justifyContent={"space-between"}
        >
          <Grid size={5}>
            <BoxChart />
          </Grid>
          <Grid size={7}>
            <JoinNowContent />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default JoinNowSection;
