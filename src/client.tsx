import React from "react";
import ReactDOM from "react-dom";
import * as stylex from '@stylexjs/stylex';

import { NavigationBar } from "./components/NavigationBar";

const styles = stylex.create({
	mainContainer: {
		position: 'relative',
		overflow: 'hidden',
		height: '100%',
		marginTop: '150px'
	  },

	  scrollContainer: {
		overflow: "hidden",
		position: "absolute",
		left: "4%",
		width: '98%',
		height: '98%',
		paddingRight: '20px',
		overflowY: "scroll"
	  },
	  sectionWrapper: {
		minHeight: "150px",
		marginTop: "8px",
		backgroundColor: "green"
	  },
	  sectionContainer: {}

});

const App = () => {
 return (
	<div {...stylex.props(styles.mainContainer)}>
		<NavigationBar />
		<div {...stylex.props(styles.scrollContainer)}>

			{/* <div {...stylex.props(styles.sectionWrapper)}>
				<p>{text}</p>
			</div>
			<br />
			<div {...stylex.props(styles.sectionWrapper)}>
				<p>{text}</p>
			</div>
            <br />
			<div {...stylex.props(styles.sectionWrapper)}>
				<p>{text}</p>
			</div>
            <br />
			<div {...stylex.props(styles.sectionWrapper)}>
				<p>{text}</p>
			</div>
            <br />
			<div {...stylex.props(styles.sectionWrapper)}>
				<p>{text}</p>
			</div> */}
		</div>
    </div>);
};

ReactDOM.render(<App />, document.getElementById("root"));
