import React from "react";
import { Icon } from "antd";

import "./style.less";

/**
 * Loader component.
 * @param props - Props for the component.
 */
export const Loader: React.StatelessComponent<{}> = (props) => {
  return <div className="loader"><Icon type="loading" /></div>;
};

export default Loader;
