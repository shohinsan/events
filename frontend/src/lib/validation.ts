import { utils } from '$lib';
import type { Data, Validation } from '$customTypes';

const typed = ({ name, email, phone, message }: Data): Validation => {
	const errors: Validation = {};

	if (!name) {
		errors.nameMissing = 'Name is required';
	}

	if (!email) {
		errors.emailMissing = 'Email is required';
	}

	if (!message) {
		errors.messageMissing = 'Message is required';
	}

	if (utils.isValidEmail(email)) {
		errors.emailFormat =
			'Supported domains as of today are: .com, .edu, .org, .io. Please use a valid email address.';
	}


	if (phone !== undefined && utils.isCharacterLimit(phone)) {
		errors.phoneLimit = 'Phone number must be 10 digits long';
	}
	return errors;
};

export default typed;
