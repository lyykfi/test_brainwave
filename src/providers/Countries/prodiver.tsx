import React, { useState, useEffect } from 'react';
import { CountriesContext, initState } from './context';
import { getCountries } from 'api';

/**
 * Filtered data by name.
 * @param name 
 * @param data 
 */
function getFilters(data: any, filters: any[]) {
  const result: any = {};

  data.forEach((item: any) => {
    filters.forEach((filter) => {
      if (!result[filter]) {
        result[filter] = [];
      }

      if (item[filter]) {
        result[filter] = result[filter].concat(item[filter]);
      }
    });
  });
  
  Object.keys(result).forEach((key) => {
    result[key] = Array.from(new Set(result[key]));
  })

  return result;
}

/**
 * Countries provider.
 * @param props - A propos for the component.
 */
export const CryptoCurrencyProvider: React.FC<{}> = (props) => {
  const [countries, setCountries] = useState(initState.countries);
  const [filters, setFilters] = useState(initState.filters);

  /**
   * Get countries list.
   */
  useEffect(() => {
    if(!countries) {
      getCountries().then((data) => {
        setCountries(data);
        setFilters(getFilters(data, ["languages", "currencies"]));
      })
    }
  }, [countries]);
  
  return <CountriesContext.Provider value={{
      countries,
      setCountries,
      filters}}>
    {props.children}
  </CountriesContext.Provider>;
}