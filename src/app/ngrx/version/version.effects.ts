import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DataService } from 'src/app/core/data.service';
import {
  LoadVersions,
  RequestErrorVersions,
  VersionActions,
  VersionActionTypes,
} from './version.actions';

@Injectable()
export class VersionEffects {
  @Effect() public request: Observable<Action> = this.actions.pipe(
    ofType(VersionActionTypes.RequestVersions),
    switchMap((action) => {
      return this.dataService.getVersions(action.payload.listId).pipe(
        map((versions) => new LoadVersions({ versions })),
        catchError((error) => [new RequestErrorVersions({ error })])
      );
    })
  );

  constructor(
    private dataService: DataService,
    private actions: Actions<VersionActions>
  ) {}
}
