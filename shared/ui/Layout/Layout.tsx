import React from "react";
import { LayoutProps } from "./type";

import classes from "./Layout.module.scss";

export const Layout = ({ children }: LayoutProps) => {
	return <div className={classes.layout}>{children}</div>;
};
