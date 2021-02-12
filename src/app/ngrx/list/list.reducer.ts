import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IListDto, LoadingStatus } from 'src/app/core/model';
import { ListActions, ListActionTypes } from './list.actions';
export const listsFeatureKey = 'lists';

export interface ListState extends EntityState<IListDto> {
  status: LoadingStatus;
  error?: string;
}

export const adapter: EntityAdapter<IListDto> = createEntityAdapter<IListDto>({
  selectId: (item) => item.PrimaryKey,
});

export const initialState: ListState = adapter.getInitialState({
  status: LoadingStatus.Ready,
});

export function reducer(state = initialState, action: ListActions): ListState {
  switch (action.type) {
    case ListActionTypes.RequestLists: {
      return {
        ...state,
        error: undefined,
        status: LoadingStatus.Loading,
      };
    }

    case ListActionTypes.RequestErrorLists: {
      return {
        ...state,
        status: LoadingStatus.Errored,
        error: action.payload.error,
      };
    }

    case ListActionTypes.LoadLists: {
      return adapter.setAll(action.payload.lists, {
        ...state,
        status: LoadingStatus.Completed,
      });
    }

    default: {
      return state;
    }
  }
}
