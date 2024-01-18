import { utils } from '$lib';
import type { Form, Validation } from '$customTypes';

const typed = ({ name, email, phone, message }: Form): Validation => {
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

	if (name.length < 8) {
		errors.nameLimit = 'Name must be at least 8 characters';
	}

	if (email.length < 15) {
		errors.emailLimit = 'Email must be at least 15 characters';
	}

	if (message.length < 50) {
		errors.messageLimit = 'Message must be at least 50 characters';
	}

	if (utils.isValidEmail(email)) {
		errors.emailFormat =
			'Supported domains as of today are: .com, .edu, .org, .io. Please use a valid email address.';
	}

	if (phone !== undefined && utils.isValidPhone(phone)) {
		errors.phoneFormat = 'Please enter a valid phone number.';
	}

	return errors;
};

export default typed;
