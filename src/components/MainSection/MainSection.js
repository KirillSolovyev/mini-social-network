import React from 'react';

import './MainSection.sass';

export default class MainSection extends React.Component {
	render() {
		return (
			<section className="main pt-3">
				<div className="container" style={{display: 'flex', flexDirection: 'column', flex: '1 1 auto'}}>
					<div className="row" style={{flex: '1 1 auto'}}>
						{this.props.children}
					</div>
				</div>
			</section>
		);
	}
}