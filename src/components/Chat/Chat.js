import React from 'react';
import { withRouter } from 'react-router-dom';

import './Chat.sass';
import MainInput from '../MainInput/MainInput';
import catImg from '../../static/images/cat.jpeg';

class Chat extends React.Component {
	render() {
		return (
			<div className="chat col-sm-8 flex flex-column grow-1-1">
				<div className="block-bg chat__header flex justify-between items-center">
					<a onClick={this.props.history.goBack} className="btn-back">Back</a>
					<a href="#" className="chat__user-name">Kir Ill</a>
					<a href="#" className="chat__user-avatar">
						<img src={catImg} alt="Avatar" className="circle-avatar" />
					</a>
				</div>
				<div className="chat__box block-bg flex grow-1-1">
					<div className="chat__content flex flex-column">
						<div className="chat__messages-date">Jul 27</div>
						<div className="chat__message message flex mb-3">
							<a href="#" className="mr-2">
								<img src={catImg} alt="Avatar" className="circle-avatar" />
							</a>
							<div className="message__content">
								<div className="message__header">
									<a href="#" className="message__author-name mr-1">Kir Ill</a>
									<span className="message__time">11:54</span>
								</div>
								<p>Hello World!!!</p>
							</div>
						</div>
						<div className="chat__message message flex mb-3">
							<a href="#" className="mr-2">
								<img src={catImg} alt="Avatar" className="circle-avatar" />
							</a>
							<div className="message__content">
								<div className="message__header">
									<a href="#" className="message__author-name mr-1">Kir Ill</a>
									<span className="message__time">11:54</span>
								</div>
								<p>Hello World!!!</p>
							</div>
						</div>
						<div className="chat__message message flex mb-3">
							<a href="#" className="mr-2">
								<img src={catImg} alt="Avatar" className="circle-avatar" />
							</a>
							<div className="message__content">
								<div className="message__header">
									<a href="#" className="message__author-name mr-1">Kir Ill</a>
									<span className="message__time">11:54</span>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
						<div className="chat__message message flex mb-3">
							<a href="#" className="mr-2">
								<img src={catImg} alt="Avatar" className="circle-avatar" />
							</a>
							<div className="message__content">
								<div className="message__header">
									<a href="#" className="message__author-name mr-1">Kir Ill</a>
									<span className="message__time">11:54</span>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
						<div className="chat__message message flex mb-3">
							<a href="#" className="mr-2">
								<img src={catImg} alt="Avatar" className="circle-avatar" />
							</a>
							<div className="message__content">
								<div className="message__header">
									<a href="#" className="message__author-name mr-1">Kir Ill</a>
									<span className="message__time">11:54</span>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
						<div className="chat__message message flex mb-3">
							<a href="#" className="mr-2">
								<img src={catImg} alt="Avatar" className="circle-avatar" />
							</a>
							<div className="message__content">
								<div className="message__header">
									<a href="#" className="message__author-name mr-1">Kir Ill</a>
									<span className="message__time">11:54</span>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
						</div>
						<div className="chat__messages-date">Jul 28</div>
						<div className="chat__message message flex mb-3">
							<a href="#" className="mr-2">
								<img src={catImg} alt="Avatar" className="circle-avatar" />
							</a>
							<div className="message__content">
								<div className="message__header">
									<a href="#" className="message__author-name mr-1">Kir Ill</a>
									<span className="message__time">11:54</span>
								</div>
								<p>Hello World!!!</p>
							</div>
						</div>
					</div>
				</div>
				<div className="block-bg chat__footer">
					<MainInput />
				</div>
			</div>
		);
	}
}

export default withRouter(Chat);