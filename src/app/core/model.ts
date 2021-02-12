export interface IListDto {
  PrimaryKey: number;
}

export interface IVersionDto {
  PrimaryKey: number;
}

export interface IDetailDto {
  PrimaryKey: number;
  Name: string;
  HarvesterRecordChangeType: string;
}

export enum LoadingStatus {
  Ready = 0,
  Loading = 1,
  Completed = 2,
  Errored = 3,
}
