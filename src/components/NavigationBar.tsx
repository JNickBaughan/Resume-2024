import React from "react";
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({//https://www.rosachae.com/
	  navigationSection: {
		display: 'flex',
		alignContent: 'center',
		alignItems: 'center',
		position: 'fixed',
		color: 'white',
		fontStyle: 'normal',
		backgroundColor: "#1d1d1d",
		width: '100%',
		height: '150px',
		top: '12px',
		left: '0'
	  }
});

export const NavigationBar = () => {
 return (
	    <div {...stylex.props(styles.navigationSection)}>
			Bio  |  Portfolio  |  Experience  |  Education
		</div>);
};
