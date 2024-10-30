import React from 'react';

export default function SideBar(props) {
	const { handleToggleModal, data } = props;
	return (
		<div className='sideBar'>
			<div
				onClick={handleToggleModal}
				className='bgOverlay'></div>
			<div className='sideBarContents'>
				<h2>{data?.title}</h2>
				<div className='descriptionContainer'>
					<p className='descriptionTitle'>{data?.date}</p>
					<p>{data?.explanation ? data?.explanation : 'No description available'}</p>
				</div>
				<button onClick={handleToggleModal}>
					<i className='fa-solid fa-chevron-right'></i>
				</button>
			</div>
		</div>
	);
}
