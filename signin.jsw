 import wixCrm from 'wix-crm-backend';
 import wixData from 'wix-data';
 import { sendEmailVerification } from 'backend/sendEmail';

 export async function invalidateEmailToken(emailToken) {
 	return await wixData.remove("tokens", emailToken, { "suppressAuth": true });
 }

 export async function approveBy3rdParty(contactInfo) {
 	const contactId = await wixCrm.createContact({ "emails": [`${contactInfo.email}`] });
 	const tokenForEmail = await createToken(contactInfo, contactId);
 	sendEmailVerification(contactId, tokenForEmail);
 }

 export async function createToken(contactInfo, contactId) {
 	let item;
 	const objToInsert = {
 		'email': contactInfo.email,
 		"firstName": contactInfo.firstName,
 		"lastName": contactInfo.lastName,
 		"phone": contactInfo.phone,
 		"password": contactInfo.password,
 		"contactID": contactId,
 	}
 	item = await wixData.insert('tokens', objToInsert, { "suppressAuth": true });
 	return item._id;
