import { createSlice } from "@reduxjs/toolkit";

export type TCurrencies = { [kay: string]: number };

interface LastConversionState {
  amount: number;
  currency: string;
  lastReceivedCurrencies: TCurrencies;
}

export const initialState: LastConversionState = {
  amount: 0,
  currency: "USD",
  lastReceivedCurrencies: {},
};

const slice = createSlice({
  name: "conversion",
  initialState,
  reducers: {
    setCurrencies(state, action) {
      state.lastReceivedCurrencies = action.payload;
    },
    setAmount(state, action) {
      state.amount = action.payload;
    },
    setSelectedCurrencyType(state, action) {
      state.currency = action.payload;
    },
  },
});

export default slice.reducer;

export const { setSelectedCurrencyType, setAmount, setCurrencies } =
  slice.actions;
