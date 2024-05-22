import React, { Fragment, useState } from "react";
//import Multistep from "react-multistep";
import { Stepper, Step } from 'react-form-stepper';

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import PageTitle from "../../../layouts/PageTitle";
import { Col, Image, Row } from "react-bootstrap";
import Student from "../../../../../src/assets/images/student.webp"

const Wizard = () => {
	const [goSteps, setGoSteps] = useState(0);
	
	return (
		<Fragment>
			<PageTitle activeMenu="Admission" motherMenu="Form" />		
			<div className="row">
				<div className="col-xl-12 col-xxl-12">
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">ِAdmission Form</h4>

							</div>
							<Row className="p-3">
								<Col lg={4} sm={12}>
									<Image  src={Student} alt="student" className="mw-100 w-75 d-block m-auto img-responsive student-admission rounded-circle"/>
								</Col>

								<Col lg={8} sm={12}>
									<h3 className="text-primary pb-2"> REQUIRED DOCUMENTS FOR THE ADMISSION’S APPLICATION</h3>

									<ul className=" admission-list">
										<li>12 recent personal photos of the student</li>
										<li>Original birth certificate (Computer generated)</li>
										<li>Original baptismal certificate</li>
										<li>Original report card</li>
										<li>Original certificate of good moral character</li>
										<li>Last academic report obtained by the student from the previous school</li>
									</ul>
									<p className="text-primary mt-3">For immigrant students and students transferring from a school within Egypt, additional documents might be required and they are determined by the Educational District. </p>
									<ul className=" admission-list">
										<li>Please refer to the Student Affairs Office on 01142222863 for any additional inquires</li>
										<li>Fixed dates are set with key stage principals. For any additional inquiries throughout the academic year</li>
										
									</ul>
								</Col>
							</Row>
							<h2 className="text-center text-primary mt-5">Admission Process</h2>
						<div className="card-body">							
							<div className="form-wizard ">
								<Stepper className="nav-wizard mb-2" activeStep={goSteps}>
									<Step className="nav-link" onClick={() => setGoSteps(0)} />
									<Step className="nav-link" onClick={() => setGoSteps(1)} />
									<Step className="nav-link" onClick={() => setGoSteps(2)} />
									<Step className="nav-link" onClick={() => setGoSteps(3)} />
								</Stepper>
							{goSteps === 0 && (
								<>
									<StepOne />	
									<div className="text-end toolbar toolbar-bottom p-2">
										<button className="btn btn-primary sw-btn-prev disabled me-1">Prev</button>
										<button  className="btn btn-primary sw-btn-next" onClick={() => setGoSteps(1)}>Next</button>
									</div>	
								</>
							)}
							{goSteps === 1 && (
								<>
									<StepTwo />
									<div className="text-end toolbar toolbar-bottom p-2">
										<button  className="btn btn-secondary sw-btn-prev me-1" onClick={() => setGoSteps(0)}>Prev</button>
										<button className="btn btn-primary sw-btn-next ms-1" onClick={() => setGoSteps(2)}>Next</button>
									</div>	
								</>
							)}
							{goSteps === 2 && (
								<>
									<StepThree />
									<div className="text-end toolbar toolbar-bottom p-2">
										<button  className="btn btn-secondary sw-btn-prev me-1" onClick={() => setGoSteps(1)}>Prev</button>
										<button className="btn btn-primary sw-btn-next ms-1"  onClick={() => setGoSteps(3)}>Next</button>
									</div>	
								</>
							)}
							{goSteps === 3 && (
								<>
									<StepFour />
									<div className="text-end toolbar toolbar-bottom p-2">
										<button  className="btn btn-secondary sw-btn-prev me-1" onClick={() => setGoSteps(2)}>Prev</button>
										<button className="btn btn-primary sw-btn-next ms-1"  onClick={() => setGoSteps(1)}>Submit</button>
									</div>	
								</>	
							)}
							
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</Fragment>
	);
};

export default Wizard;
