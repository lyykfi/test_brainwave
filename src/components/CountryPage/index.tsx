import React from "react";
import { CountriesContext } from "providers/Countries/context";
import Loader from "components/Loader";
import CountriesTable from "components/CountryTable";
import { CryptoCurrencyProvider } from "providers/Countries/prodiver";

import 'antd/dist/antd.css';

/**
 * Country page table component.
 * @param props - Props for the component.
 */
export const CountryPage: React.StatelessComponent<{}> = (props) => {
  return <CryptoCurrencyProvider><CountriesContext.Consumer>
    {({countries, filters}) => (
      countries ? <CountriesTable filters={filters} data={countries} /> : <Loader />
  )}</CountriesContext.Consumer></CryptoCurrencyProvider>;
};

export default CountryPage;