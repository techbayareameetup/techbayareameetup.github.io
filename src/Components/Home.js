import React from 'react';
import './Home.css'
import qrImage from '../assets/qr_code.png'
import EmailSubscribe from "./MailChamp/EmailSubscribe";

export default function Home() {
	return (<div style={{flex: 1}}>
		<div class="title-bar">
			<p>TechBayArea</p>
		</div>
		
		{/*<EmailSubscribe/>*/}
		{/*<div class="separator"></div>*/}
		<div className="container">
			<h4>Crack your next Tech Interview</h4>
			<h6 style={{color: "grey", marginTop: "50px"}}>We offer you 1:1 sessions for</h6>
			<div className="row">
				<div className="col-md-4">
					<div className="box" style={{backgroundColor: "rgb(58,107,82)"}}>
						<h2>Code Practice</h2>
						<span>Join our code practice sessions to improve your coding skills and learn from fellow developers.</span>
					
					</div>
				</div>
				<div className="col-md-4">
					<div className="box" style={{backgroundColor: "rgb(134,82,245"}}>
						<h2>System Design</h2>
						<p>Explore the world of system design and learn how to architect scalable and efficient software systems.</p>
					
					</div>
				</div>
				<div className="col-md-4">
					<div className="box" style={{backgroundColor: "rgb(83,133,247"}}>
						<h2>Mock Interview</h2>
						<p>Prepare for technical interviews by participating in our mock interview sessions and receiving feedback.</p>
					</div>
				</div>
			</div>
			<div className="row" style={{textAlign: "center", justifyContent: "center", display: "flex", marginTop: "50px"}}>
				<div className="col-md-4">
					<div style={{color: "grey", textAlign: "center", fontSize: "20px", marginTop: "2px"}}>
						Agenda
					</div>
					<div className="box">
						<ul style={{paddingLeft: "0px"}}>
							<h4>
								<a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vR0Hw4jSq-s86UPLd7Azj18sb4Vgmu9_UfSIMp-h4PhxojEANcnyu9Cwhconz4QdRCHmTU8KxQPmsrY/pubhtml">
									View Schedule</a>
							</h4>
						</ul>
						<ul style={{color: "black"}}>
							<ul style={{
								paddingLeft: "0px",
								display: "inline-flex",
								textAlign: "center",
								justifyContent: "center",
								verticalAlign: "middle",
								marginBottom: "0px"
							}}>
								<p style={{fontSize: "20px", verticalAlign: "middle"}}>Session: 5 days a week</p>
							</ul>
							<ul style={{
								paddingLeft: "0px",
								marginTop: "0px",
								display: "inline-flex",
								textAlign: "center",
								justifyContent: "center",
								verticalAlign: "middle"
							}}>
								<p style={{fontSize: "20px", verticalAlign: "middle"}}>Time: 8:30-9:30PM (PST)</p>
							</ul>
						</ul>
					</div>
				</div>
				<div className="col-md-4">
					<div style={{color: "grey", textAlign: "center", fontSize: "20px", marginTop: "2px"}}>
						Pricing
					</div>
					<div className="box" style={{color: "black"}}>
						<h4>Basic</h4>
						<ul style={{paddingLeft: "0px"}}>$99/month</ul>
						<ul style={{marginBottom: "0px", paddingLeft: "0px"}}><a
							href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LCCXZPNLWM2ZS"
							style={{display: "inline-flex", justifyContent: "center", maxWidth: "100px"}}
						>
							<div className="paymentbutton" style={{
								border: "1px solid grey",
								borderRadius: "20px",
								minHeight: "33px",
								width: "100px",
								display: "flex",
								justifyContent: "center"
							}}>
								<img
									style={{width: "100px", padding: "15px"}}
									src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png" alt='paypal'>
								</img>
							</div>
						</a></ul>
						<ul style={{fontSize: "10px", marginTop: "0px", paddingLeft: "0px"}}>Billed as you go</ul>
					</div>
				</div>
				<div className="col-md-4">
					<div style={{color: "grey", textAlign: "center", fontSize: "20px", marginTop: "2px"}}>
						Let's Talk
					</div>
					<div className="box">
						<h4 style={{color: "rgb(40,40,40)"}}><a href="https://wa.me/4089405728">
							Contact Us <img
							style={{maxHeight: "40px"}}
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png'
						/></a></h4>
						<img style={{maxHeight: "100px", padding: "0px", margin: "0px"}} src={qrImage} alt="QR Code"/>
					</div>
				</div>
			</div>
			<EmailSubscribe/>
		</div>
		{/*<EmailSubscribe/>*/}
	</div>)
}