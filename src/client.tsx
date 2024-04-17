import React from "react";
import ReactDOM from "react-dom";
import * as stylex from '@stylexjs/stylex';

import { Header } from "./components/Header";

const styles = stylex.create({
	mainWrapper: {
		display: "grid",
		gridTemplateColumns: "1fr 5fr",
		gridTemplateRows: "1fr 5fr",
		height: "100%",
		width: "100%"
	},
});

const Resume = () => {
 return (
	<div {...stylex.props(styles.mainWrapper)}>
		<Header />
	</div>

	);
};

ReactDOM.render(<Resume />, document.getElementById("root"));
