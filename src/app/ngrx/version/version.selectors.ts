import { Dictionary } from '@ngrx/entity';
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { IVersionDto, LoadingStatus } from 'src/app/core/model';
import { adapter, versionsFeatureKey, VersionState } from './version.reducer';

export const selectFeature: MemoizedSelector<
  unknown,
  VersionState
> = createFeatureSelector<VersionState>(versionsFeatureKey);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
}: {
  selectIds: (state: unknown) => string[] | number[];
  selectEntities: (state: unknown) => Dictionary<IVersionDto>;
  selectAll: (state: unknown) => IVersionDto[];
  selectTotal: (state: unknown) => number;
} = adapter.getSelectors(selectFeature);

export const selectStatus: MemoizedSelector<
  unknown,
  LoadingStatus
> = createSelector(selectFeature, ({ status }) => status);
