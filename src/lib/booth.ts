import axios from "axios";

interface makeBoothType {
	name: string;
	description: string;
	video_url: string;
	thumbnail_url: string;
	part: string;
}

export const makeBooth = (boothInfo: makeBoothType) => {
	console.log(boothInfo);
	const res = axios.post("/api/booth/make", boothInfo);
	return res;
};
