import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IVersionDto, LoadingStatus } from 'src/app/core/model';
import { VersionActions, VersionActionTypes } from './version.actions';
export const versionsFeatureKey = 'versions';

export interface VersionState extends EntityState<IVersionDto> {
  status: LoadingStatus;
  error?: string;
}

export const adapter: EntityAdapter<IVersionDto> = createEntityAdapter<IVersionDto>({
  selectId: (item) => item.PrimaryKey,
});

export const initialState: VersionState = adapter.getInitialState({
  status: LoadingStatus.Ready,
});

export function reducer(state = initialState, action: VersionActions): VersionState {
  switch (action.type) {
    case VersionActionTypes.RequestVersions: {
      return {
        ...state,
        error: undefined,
        status: LoadingStatus.Loading,
      };
    }

    case VersionActionTypes.RequestErrorVersions: {
      return {
        ...state,
        status: LoadingStatus.Errored,
        error: action.payload.error,
      };
    }

    case VersionActionTypes.LoadVersions: {
      return adapter.setAll(action.payload.versions, {
        ...state,
        status: LoadingStatus.Completed,
      });
    }

    default: {
      return state;
    }
  }
}
