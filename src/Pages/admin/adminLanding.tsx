import { Box } from '@mui/material';

import useGetRightBottomCart from '../../api/services/RightBottomChart/useGetRightBottomCart';
import Chart from '../../components/Chart';
import { IRightBottomType } from '../../api/services/RightBottomChart/rightBottomChartService';

function AdminLanding() {
  const { data: rightBottomData, isLoading } = useGetRightBottomCart();
  if (isLoading) return;
  if (!rightBottomData) return;
  return (
    <Box sx={{ maxHeight: '100%', padding: '16px' }}>
      <Box sx={{ display: 'flex', width: '100%', gap: '16px', height: '50%' }}>
        <Box
          sx={{
            width: '50%',
            height: '100%',
            backgroundColor: 'white',
            borderRadius: '12px',
            marginY: '16px',
          }}
        >
          {/* <HorizontalChart /> */}
        </Box>
        <Box
          sx={{
            width: '50%',
            height: '100%',
            backgroundColor: 'white',
            borderRadius: '12px',
            marginY: '16px',
          }}
        >
          <Chart
            data={rightBottomData.data[0]}
            caption={'PeriodDate' as keyof IRightBottomType['data'][0]}
            value={'AgenciesScore' as keyof IRightBottomType['data'][0]}
          />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', width: '100%', gap: '16px', height: '50%' }}>
        <Box
          sx={{
            width: '50%',
            height: '100%',
            backgroundColor: 'white',
            borderRadius: '12px',
            marginY: '16px',
          }}
        >
          <Chart
            data={rightBottomData.data[0]}
            caption={'PeriodDate' as keyof IRightBottomType['data'][0]}
            value={'AgenciesScore' as keyof IRightBottomType['data'][0]}
          />
        </Box>
        <Box
          sx={{
            width: '50%',
            height: '100%',
            backgroundColor: 'white',
            borderRadius: '12px',
            marginY: '16px',
          }}
        >
          <Chart
            data={rightBottomData.data[0]}
            caption={'PeriodDate' as keyof IRightBottomType['data'][0]}
            value={'AgenciesScore' as keyof IRightBottomType['data'][0]}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default AdminLanding;
