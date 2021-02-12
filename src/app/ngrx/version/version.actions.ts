import { Action } from '@ngrx/store';
import { IVersionDto } from 'src/app/core/model';

export enum VersionActionTypes {
  RequestVersions = '[TestInstance] Request Versions',
  RequestErrorVersions = '[TestInstance] Request Error Versions',
  LoadVersions = '[TestInstance] Load Versions',
}
export class RequestVersions implements Action {
  public readonly type = VersionActionTypes.RequestVersions;
  constructor(public payload: { listId?: number }) {}
}

export class LoadVersions implements Action {
  public readonly type = VersionActionTypes.LoadVersions;
  constructor(public payload: { versions: IVersionDto[] }) {}
}

export class RequestErrorVersions implements Action {
  public readonly type = VersionActionTypes.RequestErrorVersions;

  constructor(public payload: { error: string }) {}
}

export type VersionActions =
  | RequestVersions
  | RequestErrorVersions
  | LoadVersions;
