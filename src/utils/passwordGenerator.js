// Numbers of scpecial chars inside the password : int default 4
const SPE_COUNT = 4;

class PasswordGenerator {
	constructor(
		patern = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
		paternSpe = '&#%*@!$',
		length = 16,
	) {
		this.patern = patern;
		this.paternSpe = paternSpe;
		this.length = length;
		this.password = '';
	}

	getPatern() {
		return this.patern;
	}

	getLength() {
		return this.length;
	}

	getPaternSpe() {
		return this.paternSpe;
	}

	getPassword() {
		return this.password;
	}

	setPatern(patern) {
		this.patern = patern;
	}

	setLength(length) {
		this.length = length;
	}

	setPassword(password) {
		this.password = password;
	}

	setPaternSpe(paternSpe) {
		this.paternSpe = paternSpe;
	}

	generatePassword() {
		const patern = this.getPatern();
		const length = this.getLength();
		let password = '';

		for (let i = 0; i < SPE_COUNT; i++) {
			password +=
				this.paternSpe[
					Math.floor(Math.random() * this.paternSpe.length)
				];
		}

		for (let i = SPE_COUNT; i < length; i++) {
			password += patern[Math.floor(Math.random() * patern.length)];
		}

		this.setPassword(password);
		this.shufflePassword();
	}

	shufflePassword() {
		let password = this.password.split('');
		password.sort(() => Math.random() - 0.5);
		password = password.join('');
		this.setPassword(password);
	}

	toString() {
		return this.password;
	}
}

export default PasswordGenerator;
