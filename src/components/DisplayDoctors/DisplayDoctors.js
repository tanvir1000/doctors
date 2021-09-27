import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook, faUserCircle } from "@fortawesome/free-brands-svg-icons";
import './DisplayDoctors.css';

const DisplayDoctors = (props) => {
	const { img, name, age, Workplace, chamber, Fees } = props.doctor;
	const element = <FontAwesomeIcon className="appoinment" icon={faCalendarCheck} />;
	const fb = <FontAwesomeIcon className="fb" icon={faFacebook} />;

	return (
		<div className="display">
			<div className="doctors-container">
				<img className="img-c" src={img} alt="" />
				<h4>Name : {name}</h4>
				<h4>
					Workplace : <small> {Workplace}</small>
				</h4>
				<h4>
					Age: <small> {age}</small>
				</h4>
				<h4>
					Chamber : <small> {chamber}</small>{' '}
				</h4>
				<h4>Fees :${Fees}</h4>
				<button onClick={() => props.handelCount(props.doctor)}>{element} Appoinment</button>
				
				<button className="social-icon" onClick={() => props.handelCount(props.doctor)}>{fb} </button>
			</div>
		</div>
	);
};

export default DisplayDoctors;
