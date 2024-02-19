export const createEntryValidator = (entry, toaster) => {
	const emailRegex = /\S+@\S+\.\S+/;

	if (!entry) {
		toaster('Please fill in the form');
		return false;
	}

	if (!entry.groupLabel) {
		toaster('Group Label is required');
		return false;
	}

	if (!entry.password) {
		toaster('Password is required');
		return false;
	}

	if (entry.email && !emailRegex.test(entry.email)) {
		toaster('Email is not valid');
		return false;
	}

	if (!entry.email && !entry.username) {
		toaster('Username or Email, at least one is required');
		return false;
	}

	if (entry.password.length < 8) {
		toaster('Password must be at least 8 characters long');
		return false;
	}

	if (entry.groupLabel.length < 3) {
		toaster('Group Label must be at least 3 characters long');
		return false;
	}

	if (entry.username && entry.username.length < 3) {
		toaster('Username must be at least 3 characters long');
		return false;
	}

	return true;
};
