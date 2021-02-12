import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DataService } from 'src/app/core/data.service';
import {
  ListActions,
  ListActionTypes,
  LoadLists,
  RequestErrorLists,
} from './list.actions';

@Injectable()
export class ListEffects {
  @Effect() public request: Observable<Action> = this.actions.pipe(
    ofType(ListActionTypes.RequestLists),
    switchMap((action) => {
      return this.dataService.getLists().pipe(
        map((lists) => new LoadLists({ lists })),
        catchError((error) => [new RequestErrorLists({ error })])
      );
    })
  );

  constructor(
    private dataService: DataService,
    private actions: Actions<ListActions>
  ) {}
}
