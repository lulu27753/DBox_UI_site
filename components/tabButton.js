import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import cx from 'classnames';

export const styles = ({ space, color, fontFamily, fontSize, buttonTextTransform }) => ({
	button: {
		padding: [[space[1], 0]],
		fontFamily: fontFamily.base,
		fontSize: fontSize.base,
		color: color.light,
		background: 'transparent',
		textTransform: buttonTextTransform,
		transition: 'color 750ms ease-out',
		border: 'none',
		cursor: 'pointer',
		'&:hover, &:focus': {
			isolate: false,
      outline: 0,
      border: 'none',
			color: color.linkHover,
			transition: 'color 150ms ease-in',
		},
		'&:focus:not($isActive)': {
			isolate: false,
			outline: [[1, 'dotted', color.linkHover]],
		},
		'& + &': {
			isolate: false,
			marginLeft: space[1],
		},
  },
  caret: {
    width: 0,
    height: 0,
    marginTop: '10px',
    borderTop: '8px solid #13b886',
    borderBottom: '8px solid transparent',
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
  },
	isActive: {
		borderBottom: [[2, color.linkHover, 'solid']],
	},
});

export function TabButtonRenderer({ classes, name, className, onClick, active, children }) {
	const classNames = cx(classes.button, className, {
		[classes.isActive]: active,
	});

	return (
		<button type="button" name={name} className={classNames} onClick={onClick}>
			<i className={classes.caret}></i>
		</button>
	);
}

TabButtonRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	name: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	active: PropTypes.bool,
	children: PropTypes.node,
};

export default Styled(styles)(TabButtonRenderer);
