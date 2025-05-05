import { Box, useTheme } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
import { hexToRgba } from "../../utils/utils";
const BoxChart = () => {
  const theme = useTheme();
  const options = {
    chart: {
      width: "100%",
      height: "auto",
      toolbar: {
        show: false,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
      },
      zoom: {
        enabled: false,
      },
      selection: {
        enabled: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: [
      hexToRgba(theme.palette.background.default, 0.2),
      hexToRgba(theme.palette.success.main, 0.4),
    ],
    fill: {
      opacity: 0.2,
      gradient: {
        shadeIntensity: 0.1,
        enabled: true,
        opacityFrom: 0.5,
        opacityTo: 0,
      },
    },

    xaxis: {
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 25, 50, 25, 10],
    },
    {
      name: "series-2",
      data: [23, 12, 54, 20, 25, 50],
    },
  ];
  return (
    <Box
      sx={{
        minHeight: 300,
        alignItems: "end",
        height: "100%",
        borderRadius: 5,
        outline: `10px solid ${hexToRgba(
          theme.palette.background.default,
          0.1
        )}`,
      }}
    >
      <Chart options={options} series={series} type="area" height={"100%"} />
    </Box>
  );
};

export default BoxChart;
