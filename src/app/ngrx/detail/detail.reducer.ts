import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IDetailDto, LoadingStatus } from 'src/app/core/model';
import { DetailActions, DetailActionTypes } from './detail.actions';
export const detailsFeatureKey = 'details';

export interface DetailState extends EntityState<IDetailDto> {
  status: LoadingStatus;
  error?: string;
}

export const adapter: EntityAdapter<IDetailDto> = createEntityAdapter<IDetailDto>(
  {
    selectId: (item) => item.PrimaryKey,
  }
);

export const initialState: DetailState = adapter.getInitialState({
  status: LoadingStatus.Ready,
});

export function reducer(
  state = initialState,
  action: DetailActions
): DetailState {
  switch (action.type) {
    case DetailActionTypes.RequestDetails: {
      return {
        ...state,
        error: undefined,
        status: LoadingStatus.Loading,
      };
    }

    case DetailActionTypes.RequestErrorDetails: {
      return {
        ...state,
        status: LoadingStatus.Errored,
        error: action.payload.error,
      };
    }

    case DetailActionTypes.LoadDetails: {
      return adapter.setAll(action.payload.details, {
        ...state,
        status: LoadingStatus.Completed,
      });
    }

    default: {
      return state;
    }
  }
}
