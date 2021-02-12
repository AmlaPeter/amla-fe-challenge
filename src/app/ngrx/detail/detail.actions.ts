import { Action } from '@ngrx/store';
import { IDetailDto } from 'src/app/core/model';

export enum DetailActionTypes {
  RequestDetails = '[TestInstance] Request Details',
  RequestErrorDetails = '[TestInstance] Request Error Details',
  LoadDetails = '[TestInstance] Load Details',
}
export class RequestDetails implements Action {
  public readonly type = DetailActionTypes.RequestDetails;
  constructor(public payload: { versionId: number }) {}
}

export class LoadDetails implements Action {
  public readonly type = DetailActionTypes.LoadDetails;
  constructor(public payload: { details: IDetailDto[] }) {}
}

export class RequestErrorDetails implements Action {
  public readonly type = DetailActionTypes.RequestErrorDetails;

  constructor(public payload: { error: string }) {}
}

export type DetailActions = RequestDetails | RequestErrorDetails | LoadDetails;
