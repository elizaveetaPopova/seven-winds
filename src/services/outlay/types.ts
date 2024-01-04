export interface EntityResponse {
  id: number;
  rowName: string;
}

export interface GetRowsResponse extends IRowResponse {
  child: GetRowsResponse[];
}

export interface IRowRequest {
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  parentId: number | null;
  rowName: string;
  salary: number;
  supportCosts: number;
}
export interface IRowResponse {
  equipmentCosts: number;
  estimatedProfit: number;
  id: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
  total: number;
}
export interface IActionRowResponse {
  changed: IRowResponse[];
  current: IRowResponse;
}
