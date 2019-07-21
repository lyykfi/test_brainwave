import { createContext } from 'react';

/**
 * Init state.
 */
export const initState: any = {
  countries: null,
  filters: {},
};

/**
 * Context.
 */
export const CountriesContext = createContext<any>(initState);