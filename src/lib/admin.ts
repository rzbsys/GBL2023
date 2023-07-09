import axios from "axios";

interface ProblemsType {
	pdf_url: string;
	problem_type: string;
	question: string;
	answer: string;
	score: number;
}

export const makeProblems = (bid: string, problems: ProblemsType[]) => {
	const res = axios.post("/api/problem/make/" + bid, {
		problems: problems,
	});
	return res;
};
