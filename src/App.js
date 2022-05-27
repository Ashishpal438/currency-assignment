import { useEffect, useState } from "react";
import CoinList from "./components/CoinList";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [coins, setCoins] = useState([]);
  const [screenCoins, setScreenCoins] = useState([]);

  useEffect(() => {
    fetch(`https://comms.globalxchange.com/coin/vault/get/all/coins`)
      .then((res) => res.json())
      .then((data) => {
        setCoins(data.coins);
        setScreenCoins(data.coins);
      });
  }, []);

  const searchCurrency = (text) => {
    const filteredCoins = coins.filter((item) =>
      item.coinName.toLowerCase().includes(text.toLowerCase())
    );
    setScreenCoins(filteredCoins);
  };

  useEffect(() => {
    searchCurrency(value);
  }, [value]);

  return (
    <>
      <div className="container">
        <div className="header">BANKER</div>

        <Search value={value} setValue={setValue} />

        <CoinList screenCoins={screenCoins} />

        <div className="footer">Reset to USD</div>
      </div>
    </>
  );
}

export default App;
