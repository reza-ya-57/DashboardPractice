import { Box } from '@mui/material';
import ReactECharts from 'echarts-for-react';

function ValueChart() {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  };
  // render echarts option.
  return (
    <Box
      sx={{
        width: '100%',
        height: '270px',
      }}
    >
      <ReactECharts option={option} />
    </Box>
  );
}

export default ValueChart;
