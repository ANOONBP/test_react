import React, { useState } from "react";
import "./App.css";

const App = () => {
  const CURRENCY_CHANGER = {
    type: null,
    bath: null,
    dollar: null,
  };

  const [currency, setCurrency] = useState(CURRENCY_CHANGER);
  const onInput = (filed) => (event) => {
    //console.log(field,event.target.value);
    setCurrency({
      ...currency,
      [filed]: event.target.value,
    });
  };
  const onClickCurrency = (filed) => (event) => {
    if (currency.type === "dollar") {
      const sum = currency.bath / 33;
      setCurrency({
        ...currency,
        dollar: sum,
      });
    } else if (currency.type === "yen") {
      const sum = currency.bath / 10;
      setCurrency({
        ...currency,
        dollar: sum,
      });
    } else if (currency.type === "cny") {
      const sum = currency.bath * 100;
      setCurrency({
        ...currency,
        dollar: sum,
      });
    }
  };

  return (
    <>
      <div>
        <label>เงินบาท</label>
        <input type="number" value={currency.bath} onChange={onInput("bath")} />
        =
        <select onChange={onInput("type")}>
          <option value="" selected hidden>
            เลือกสกุลเงิน
          </option>
          <option value="dollar">เงินดอลล่า</option>
          <option value="yen">เงินเยน</option>
          <option value="cny">เงินหยวน</option>
        </select>
        <button type="button" onClick={onClickCurrency(currency.type)}>
          แปลงค่า
        </button>
      </div>
      <div>
        <input type="number" value={currency.dollar} readOnly />
      </div>
    </>
  );
};

export default App;
