import { IUpdateRowRequest } from './services/outlay/types';

export interface Project {
  id: number;
  title: string;
  checked: boolean;
}

export interface IRow {
  equipmentCosts: string;
  estimatedProfit: string;
  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: string;
  parentId: number | null;
  rowName: string;
  salary: string;
  supportCosts: number;
}
export interface IRowMutation extends IUpdateRowRequest {
  parentId: number | null;
}
