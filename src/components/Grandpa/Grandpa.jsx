/**
 * 1. create a context and export
 * 2. add provider with a context with a value, value could be anything
 * 3. useContext to access value in your context API
 */

import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);

const Grandpa = () => {
  const asset = "diamond";
  const [money, setMoney] = useState(1000);
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Net money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
