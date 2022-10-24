import React from 'react';
import PropTypes from 'prop-types';

function UsersListItem({ userData: { average, name, attendance } }) {
	return (
		<li>
			<div>{average}</div>
			<div>
				<p>{name}</p>
				<p>{attendance}</p>
			</div>
			<button>XbtnX</button>
		</li>
	);
}

UsersListItem.propTypes = {
	userData: PropTypes.shape({
		average: PropTypes.number,
		name: PropTypes.string,
		attendance: PropTypes.string,
	}),
};

export default UsersListItem;
