import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DataService } from 'src/app/core/data.service';
import {
  DetailActions,
  DetailActionTypes,
  LoadDetails,
  RequestErrorDetails,
} from './detail.actions';

@Injectable()
export class DetailEffects {
  @Effect() public request: Observable<Action> = this.actions.pipe(
    ofType(DetailActionTypes.RequestDetails),
    switchMap((action) => {
      return this.dataService.getDetails(action.payload.versionId).pipe(
        map((details) => new LoadDetails({ details })),
        catchError((error) => [new RequestErrorDetails({ error })])
      );
    })
  );

  constructor(
    private dataService: DataService,
    private actions: Actions<DetailActions>
  ) {}
}
