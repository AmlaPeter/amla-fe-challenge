import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromDetail from './ngrx/detail';
import * as fromList from './ngrx/list';
import * as fromVersion from './ngrx/version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'challenge-app';

  public lists: any;
  public versions: any;
  public details: any;

  constructor(private store: Store<unknown>) {
    store.dispatch(new fromList.RequestLists());

    this.lists = store.pipe(select(fromList.selectAll));

    this.versions = store.pipe(select(fromVersion.selectAll));

    store.pipe(select(fromDetail.selectIds)).subscribe((details) => {
      this.details = details;
    });
  }

  public selectList(listId: number) {
    this.store.dispatch(new fromVersion.RequestVersions({ listId }));
  }

    selectVersion(change) {
      this.store.dispatch(
        new fromDetail.RequestDetails({
          versionId: change.options[0].value.PrimaryKey,
        })
      );
  }
}
