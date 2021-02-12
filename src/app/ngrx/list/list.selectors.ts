import { Dictionary } from '@ngrx/entity';
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { IListDto, LoadingStatus } from 'src/app/core/model';
import { adapter, listsFeatureKey, ListState } from './list.reducer';

export const selectFeature: MemoizedSelector<
  unknown,
  ListState
> = createFeatureSelector<ListState>(listsFeatureKey);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
}: {
  selectIds: (state: unknown) => string[] | number[];
  selectEntities: (state: unknown) => Dictionary<IListDto>;
  selectAll: (state: unknown) => IListDto[];
  selectTotal: (state: unknown) => number;
} = adapter.getSelectors(selectFeature);

export const selectStatus: MemoizedSelector<
  unknown,
  LoadingStatus
> = createSelector(selectFeature, ({ status }) => status);
