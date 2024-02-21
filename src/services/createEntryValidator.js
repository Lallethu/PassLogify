import AsyncStorage from '@react-native-async-storage/async-storage';

const doLoginAllreadyExist = async entry => {
	try {
		const keys = await AsyncStorage.getAllKeys();
		const keysLowerCase = keys.map(key => key.trim().toLowerCase());
		const groupLabelLowerCase = entry.groupLabel.trim().toLowerCase();
		return keysLowerCase.includes(groupLabelLowerCase);
	} catch (error) {
		console.log(error);
	}
};

export const createEntryValidator = async (entry, toaster) => {
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

	if (await doLoginAllreadyExist(entry)) {
		toaster('This entry already exists');
		return false;
	}

	return true;
};

export const updateEntryValidator = async (entry, oldData, toaster) => {
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

  if (entry.groupLabel !== oldData.groupLabel) {
    if (await doLoginAllreadyExist(entry)) {
      toaster('This entry already exists');
      return false;
    }
  }

  return true;
}