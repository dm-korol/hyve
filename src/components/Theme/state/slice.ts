import { createSlice, createAction, Action } from '@reduxjs/toolkit';
import { Mode } from '../../../theme/config';
import * as types from '../../../store/types';

interface mainState {
  mode: Mode;
}

interface PayloadAction<payload> extends Action {
  payload: payload;
}

export const switchTheme = createAction(types.SWITCH_THEME, function action(mode: Mode) {
  return { type: types.SWITCH_THEME, payload: { mode } };
});

const initialState = {
  mode: Mode.dark,
} as mainState;

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      types.SWITCH_THEME,
      (state = initialState, action: PayloadAction<{ mode: Mode }>) => {
        const { mode } = action.payload;
        state.mode = mode;
      }
    );
  },
});

const { reducer } = mainSlice;

export default reducer;
