import './mailchamp.css'
import {useState} from "react";

export default function EmailSubscribe() {
	const [formData, setFormData] = useState({
		email: ''
	});
	const [subscribing, setSubscribing] = useState(false);
	const handleChange = (e) => {
		setFormData({
			...formData, [e.target.name]: e.target.value
		});
	};
	
	async function handleSubmit(event) {
		event.preventDefault();
		setSubscribing(true);
		document.getElementById("subscribeMailChampBtn").innerText = 'Subscribing'
		try {
			const response = await fetch('https://mailchamp.ai:8080/clientsubscription', {
				method: 'POST', headers: {
					'Content-Type': 'application/json'
				}, body: JSON.stringify(formData)
			}).then(() => {
				document.getElementById("subscribeMailChampBtn").innerText = 'Confirmed !'
				setFormData({'email': ''})
			})
			if (!response.ok) {
				// throw new Error(`HTTP error! status: ${response.status}`);
			}
		} catch (error) {
			console.error('There was an error!', error);
		}
	}
	
	return (<div style={{textAlign: "center", marginTop: "40px", marginBottom: "10px"}}>
		<form onSubmit={handleSubmit}>
			<label className='label'>Email</label>
			<input id='email' name='email' type='email' className='input'
			       onChange={handleChange}
			       value={formData.email}
			       required={true}
			/>
			<button id='subscribeMailChampBtn' name='subscribeMailChampBtn' type="submit" className='subscribeButton' disabled={subscribing}>
				Subscribe: Free System Design Newsletter
			</button>
		</form>
	</div>)
}