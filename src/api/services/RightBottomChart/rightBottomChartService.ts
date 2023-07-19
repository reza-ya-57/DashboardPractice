import { request } from '../../constance';

export type IRightBottomType = {
  data: {
    Id: number;
    InsDate: string;
    DSIScore: number;
    Rank: number;
    FinalScore: number;
    AgenciesScore: number;
    ASISystem: number;
    CustomerSatisfaction: number;
    PeriodDate: number;
    CompanyId: number;
    PerformanceResult: number;
    AgencyCount: number;
    Tag: number;
    VehicleTypeId: number;
    VehicleTypeCaption: string;
  }[][];
  isSuccess: boolean;
  statusCode: number;
  message: string;
};

async function rightBottomChartService() {
  const res = await request.post<IRightBottomType>(
    'api/v1/Generics/ServiceDynamic',
    {
      controllerId: 'd4af0e68-8ea8-4f18-926f-9bec5395892d',
      dynamicProperty: {},
    }
  );
  return res.data;
}

export default rightBottomChartService;
