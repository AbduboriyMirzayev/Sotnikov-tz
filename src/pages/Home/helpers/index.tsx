import { MenuItem } from "@mui/material";
import { AxiosResponse } from "axios";
import { TCurrencies } from "store/reducers/conversion";

export const getSelectOptions = (currencies: TCurrencies) => {
  const labels = Object.keys(currencies);
  return labels.map((label) => (
    <MenuItem value={label} key={label}>
      {label}
    </MenuItem>
  ));
};

export const convertCurrencies = (res: AxiosResponse) => {
  const entriedCurrencies: [string, TCurrencies][] = Object.entries(
    res.data.Valute
  );
  const currencies: TCurrencies = {};
  entriedCurrencies.forEach(([key, object]) => {
    if (object.Nominal > 1) {
      currencies[key] = object.Value / object.Nominal;
    } else {
      currencies[key] = object.Value;
    }
  });
  return currencies;
};

export const deleteLeters = (value: string) => value.replace(/\D/g, "");
export const convertCurrencyValue = (
  amount: number,
  currency: string,
  currencies: TCurrencies
) => {
  return (amount * currencies[currency]).toLocaleString();
};
