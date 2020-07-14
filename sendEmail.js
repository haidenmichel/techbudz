import wixCrm from 'wix-crm-backend';
const verificationEmailId = 'RzLTaFe';

export function sendEmailVerification(contactId, approvalToken){
	const obj ={
		'url': `https://corvid-examples.wixsite.com/members-area/approve?tokenRegister=${approvalToken}`
	}
	sendEmail(verificationEmailId, contactId, obj);
} 

function sendEmail(emailId, contactId, variables) {
	try {
		wixCrm.emailContact(emailId, contactId, {
			"variables": variables
		})
		.then(() => {
			console.log('email sent successfully');
		})
		.catch((err) => {
			console.log('err in sendEmail is ', err.toString());
		});
	} catch (err) {
		console.log("err", err.toString())
	}	
}
