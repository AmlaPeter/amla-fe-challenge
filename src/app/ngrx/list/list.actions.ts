import { Action } from '@ngrx/store';
import { IListDto } from 'src/app/core/model';

export enum ListActionTypes {
  RequestLists = '[TestInstance] Request Lists',
  RequestErrorLists = '[TestInstance] Request Error Lists',
  LoadLists = '[TestInstance] Load Lists',
}
export class RequestLists implements Action {
  public readonly type = ListActionTypes.RequestLists;
}

export class LoadLists implements Action {
  public readonly type = ListActionTypes.LoadLists;
  constructor(public payload: { lists: IListDto[] }) {}
}

export class RequestErrorLists implements Action {
  public readonly type = ListActionTypes.RequestErrorLists;

  constructor(public payload: { error: string }) {}
}

export type ListActions = RequestLists | RequestErrorLists | LoadLists;
