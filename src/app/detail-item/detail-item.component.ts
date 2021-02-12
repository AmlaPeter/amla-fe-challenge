import { Component, Input, OnChanges } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IDetailDto } from '../core/model';
import { selectEntities } from '../ngrx/detail';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss'],
})
export class DetailItemComponent implements OnChanges {
  @Input() public detailId: number;

  public detail: IDetailDto;

  constructor(private store: Store<unknown>) {}

  public ngOnChanges() {
    if (this.detailId != undefined) {
    this.store.pipe(select(selectEntities)).subscribe((details) => {
    this.detail = details[this.detailId];
    });
    }
  }
}
