import React from "react";
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({ 
	//https://www.sitebuilderreport.com/inspiration/resume-websites
	//https://www.hi-im-julian.com/
	//https://www.rosachae.com/
	header: {
		gridColumnStart: "1",
		gridColumnEnd: "3",
		backgroundColor: "#1d1d1d",
		color: "white",
		alignContent: "center",
		paddingLeft: "1vw",
		fontSize: "20px",
		fontWeight: "bold"
	}
});

export const Header = () => {
 return (
	<div {...stylex.props(styles.header)}>
	[ J. Nick Baughan ]
</div>);
};
