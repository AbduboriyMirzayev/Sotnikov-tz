import { useState, ChangeEvent, useEffect } from "react";
import Style from "./Home.style";
import {
  Alert,
  AlertTitle,
  FormControl,
  InputAdornment,
  Select,
  SelectChangeEvent,
  Snackbar,
  TextField,
} from "@mui/material";
import { ArrowDownIcon } from "assets/icons";
import { axiosInstance } from "utils/axios";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import Loader from "components/Loader";
import {
  setAmount,
  setCurrencies,
  setSelectedCurrencyType,
} from "store/reducers/conversion";
import {
  convertCurrencies,
  convertCurrencyValue,
  deleteLeters,
  getSelectOptions,
} from "./helpers";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorAlertVisible, setIsErrorAlertVisible] = useState(false);

  const dispatch = useAppDispatch();
  const conversion = useAppSelector((state) => state.conversion);

  const loadingVisibleHandler = () => setIsLoading((prev) => !prev);

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setAmount(parseInt(deleteLeters(e.target.value) || "1")));
  };

  const onCurrencyTypeChange = (e: SelectChangeEvent) => {
    dispatch(setSelectedCurrencyType(e.target.value));
  };

  useEffect(() => {
    loadingVisibleHandler();
    axiosInstance({})
      .then((res) => {
        dispatch(setCurrencies(convertCurrencies(res)));
        loadingVisibleHandler();
      })
      .catch(() => {
        loadingVisibleHandler();
        setIsErrorAlertVisible(true);
      });
  }, []);

  const convertedCurrency = convertCurrencyValue(
    conversion.amount,
    conversion.currency,
    conversion.lastReceivedCurrencies
  );

  return (
    <Style>
      {isLoading ? <Loader /> : null}
      <h1>Конвертер валют</h1>
      <FormControl className="home__wrapper" fullWidth margin="normal">
        <TextField
          className="home__input home__input-without-right-radius"
          value={conversion.amount.toLocaleString()}
          onChange={onValueChange}
        />
        <Select
          className="home__select"
          defaultValue={conversion.currency}
          onChange={onCurrencyTypeChange}
        >
          {getSelectOptions(conversion.lastReceivedCurrencies)}
        </Select>
      </FormControl>
      <ArrowDownIcon className="home__icon" />
      <FormControl margin="normal" fullWidth>
        <TextField
          className="home__input home__input--disabled"
          value={convertedCurrency}
          onChange={onValueChange}
          disabled
          InputProps={{
            endAdornment: <InputAdornment position="start">RUB</InputAdornment>,
          }}
        />
      </FormControl>
      <Snackbar open={isErrorAlertVisible} autoHideDuration={5000}>
        <Alert severity="error" sx={{ width: "100%" }}>
          <AlertTitle>Упс! Что-то пошло не так.</AlertTitle>
          <p className="home__alert-text">
            Не удалось загрузить актуальные данные. Пожалуйста, проверьте
            подключение к Интернету и перезагрузите страницу.
          </p>
        </Alert>
      </Snackbar>
    </Style>
  );
}

export default Home;
