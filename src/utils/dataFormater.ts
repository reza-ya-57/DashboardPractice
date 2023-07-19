// import { IRightBottomType } from '../api/services/RightBottomChart/rightBottomChartService';
// import { IChart } from '../components/Chart';

// type IFormatter = {
//   data: IRightBottomType['data'][0];
//   value: keyof IRightBottomType['data'][0];
//   caption: keyof IRightBottomType['data'][0];
// };

// export const dataFormatter = ({ data, value, caption }: IFormatter) => {
//   console.log(data);
//   const formattedData: IChart['data'] = data?.map((item) => {
//     console.log(value, caption);
//     return {
//       value: item[value as keyof IFormatter['value']],
//       caption: item[caption as keyof IFormatter['caption']],
//     };
//   });
//   return formattedData;
// };
