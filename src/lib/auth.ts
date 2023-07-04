import axios from "axios";

export const boothAdminAuth = (pw: string) => {
	const res = axios.post("/api/auth/boothadmin", {
		password: pw,
	});

	return res;
};
