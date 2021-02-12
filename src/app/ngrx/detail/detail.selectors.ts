import { Dictionary } from '@ngrx/entity';
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { IDetailDto, LoadingStatus } from 'src/app/core/model';
import { adapter, detailsFeatureKey, DetailState } from './detail.reducer';

export const selectFeature: MemoizedSelector<
  unknown,
  DetailState
> = createFeatureSelector<DetailState>(detailsFeatureKey);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
}: {
  selectIds: (state: unknown) => string[] | number[];
  selectEntities: (state: unknown) => Dictionary<IDetailDto>;
  selectAll: (state: unknown) => IDetailDto[];
  selectTotal: (state: unknown) => number;
} = adapter.getSelectors(selectFeature);

export const selectStatus: MemoizedSelector<
  unknown,
  LoadingStatus
> = createSelector(selectFeature, ({ status }) => status);
