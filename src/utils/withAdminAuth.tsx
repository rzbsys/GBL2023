import { NextPage } from "next";
import AdminLoaginPage from "@/pages/admin";
import { useEffect, useState } from "react";

const withAdminAuth = (Component: NextPage | React.FC) => {
	const Auth = () => {
		const [Authed, SetAuthed] = useState(false);
		useEffect(() => {
			const adminAuth = localStorage.getItem("adminAuth");
			console.log(adminAuth);
			console.log(adminAuth === null);
			if (adminAuth === null) {
				SetAuthed(false);
			} else {
				SetAuthed(true);
			}
		}, []);

		if (!Authed) {
			return <AdminLoaginPage></AdminLoaginPage>;
		}
		return <Component />;
	};

	return Auth;
};

export default withAdminAuth;
