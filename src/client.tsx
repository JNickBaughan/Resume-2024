import React from "react";
import ReactDOM from "react-dom";
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
	mainContainer: {
		borderRadius: '3px;',
		position: 'relative',
		overflow: 'hidden'
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
});

const App = ({ text }: { text: string }) => {
 return (
	<div {...stylex.props(styles.mainContainer)}>
		<div {...stylex.props(styles.scrollContainer)}>
			<p>{text}</p>
			<br />
			<div>{text}</div>
            <br />
			<div>{text}</div>
            <br />
			<div>{text}</div>
            <br />
			<div>{text}</div>
            <br />
			<div>{text}</div>
            <br />
			<div>{text}</div>
            <br />
			<div>{text}</div>
            <br />
			<div>{text}</div>
            <br />
			<div>{text}</div>
            <br />
			<div>{text}</div>
            <br />
			<div>{text}</div>
            <br />
			<br />
			<div>{text}</div>
            <br />
			<div>{text}</div>
			</div>
    </div>
 		);
};

ReactDOM.render(<App text={"React: hello world"} />, document.getElementById("root"));
