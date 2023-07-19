import React from 'react';
import { useQuery } from 'react-query';
import rightBottomChartService from './rightBottomChartService';

function useGetRightBottomCart() {
  return useQuery({
    queryKey: ['GET-RIGHT-BOTTOM'],
    queryFn: rightBottomChartService,
  });
}

export default useGetRightBottomCart;
