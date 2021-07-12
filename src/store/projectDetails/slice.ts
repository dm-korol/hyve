import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../../components/StatusPlate';

interface projectState {
  status: Status;
  name: string;
  owner: string;
  dateStart: string;
  dateEnd: string;
  currency: string;
  price: number;
  cap: number;
  offered: string;
  createdAt: string;
  description: string;
  additionalLinks: string[];
}

const initialState: { [index: string]: any } = {
  status: Status.new,
  name: 'An amazing token',
  owner: 'Admin',
  dateStart: '',
  dateEnd: '2021-05-07',
  currency: 'BNB',
  price: 0.00024631,
  cap: 20000,
  offered: '75,000,000.0000',
  createdAt: '2021-01-07',
  description: '',
  additionalLinks: [],
} as projectState;

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers: () => {},
});

const { reducer } = mainSlice;

export default reducer;
