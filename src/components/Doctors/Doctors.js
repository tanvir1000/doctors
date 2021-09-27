import React, { useEffect, useState } from 'react';
import DisplayDoctors from '../DisplayDoctors/DisplayDoctors';
import DoctorAdded from '../doctorAdded/DoctorAdded';
import './Doctors.css';

const Doctors = () => {
	const [ doctors, setDoctors ] = useState([]);
	const [ count, setCoutn ] = useState([]);
	useEffect(() => {
		fetch('./doctors.json').then((res) => res.json()).then((data) => setDoctors(data));
	}, []);

	const handelCount = (doctor) => {
		const newCount = [ ...count, doctor ];
		setCoutn(newCount);
	};

	return (
		<div className="doctor-container">
			<div className="grid-display">
				{doctors.map((doctor) => (
					<DisplayDoctors key={doctor.name} doctor={doctor} handelCount={handelCount} />
				))}
			</div>
			<div>
				<DoctorAdded count={count} />
			</div>
		</div>
	);
};

export default Doctors;
