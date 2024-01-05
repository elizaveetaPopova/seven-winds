export interface EntityResponse {
  id: number;
  rowName: string;
}

export interface GetRowsResponse extends IRowResponse {
  child: GetRowsResponse[];
}

export interface ICreateRowRequest extends IUpdateRowRequest {
  parentId: number | null;
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

export interface IUpdateRowRequest {
  equipmentCosts: number;
  estimatedProfit: number;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
}
