/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Box } from '@mui/material';
import ReactECharts from 'echarts-for-react';
import { IRightBottomType } from '../api/services/RightBottomChart/rightBottomChartService';

// const fakeData = [
//   {value : 1 ,  caption : 'tes'}
//   {value : 2 ,  caption : 'tes'},
//   {value : 3,  caption : 'tes'}
// ]

type IChart = {
  data: IRightBottomType['data'][0];
  value: keyof IRightBottomType['data'][0];
  caption: keyof IRightBottomType['data'][0];
};

function Chart({ data, value, caption }: IChart) {
  const dataFormatter = () => {
    console.log(data);
    const formattedData = data?.map((item) => {
      console.log(value, caption);
      return {
        value: item[value as keyof IChart['value']],
        caption: item[caption as keyof IChart['caption']],
      };
    });
    return formattedData;
  };

  const formattedData = dataFormatter();
  const option = {
    label: {
      show: true,
      position: 'top',
      color: 'black',
      fontSize: 12,
    },
    xAxis: {
      type: 'category',
      data: formattedData.map((i) => i.caption),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: formattedData.map((i) => i.value),
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

export default Chart;
