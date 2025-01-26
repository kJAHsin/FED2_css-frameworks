export default function setPageTitle(
	page: string,
	userName: string | null,
): void {
	let title: string;

	switch (page) {
		case '/':
			title = 'FAKEbook|Home';
			break;
		case '/login/':
			title = 'FAKEbook|Login';
			break;
		case '/register/':
			title = 'FAKEbook|Register';
			break;
		case '/feed/':
			title = 'FAKEbook|Feed';
			break;
		case '/profile/':
			title =
				'FAKEbook| ' +
				(userName !== null ? userName : 'Some Person') +
				"'s Profile";
			break;
		default:
			title = 'FAKEbook|404';
			break;
	}

	document.title = title !== null ? title : 'FAKEbook';
}
