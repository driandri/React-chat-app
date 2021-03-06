import * as actions from '../type/contacts';

export const initiateContacts = (contacts) => {
	return {
		type: actions.INITIATE_CONTACTS,
		contacts
	}
}

export const updateContact = (id, contact) => {
	return {
		type: actions.UPDATE_CONTACT,
		id,
		contact
	}
}