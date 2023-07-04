import AppLayout from "@/layouts/app-layout";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import { useRouter } from "next/router";
import Background from "@/components/background";

const AnnounceCard = () => {
	return (
		<Card
			sx={{ mt: "15px", bgcolor: "rgb(250, 250, 250)", borderRadius: "10px" }}
			elevation={0}
		>
			<CardContent>
				<Typography sx={{ fontSize: 10 }} color='text.secondary'>
					2023년 6월 17일 17시 23분
				</Typography>
				<Typography
					fontSize={"20px"}
					fontWeight={800}
					color={"rgb(50, 50, 50)"}
				>
					dawdaw
				</Typography>

				<Typography
					variant='body2'
					sx={{ wordBreak: "break-all", color: "rgb(100, 100, 100)" }}
				>
					dalwkdakwjdhakwdjhakwduhakwduhakwdjhauwkdajhwduakjwdhauwkdjawhduakwjdhauwkdajwhdauwkd
				</Typography>
			</CardContent>
		</Card>
	);
};

const AnnouncePage = () => {
	const AuthState = useSelector((state: RootState) => state.auth);
	const router = useRouter();
	return (
		<>
			<Background></Background>

			<AppLayout>
				<Typography
					fontSize={"20px"}
					mt={"25px"}
					ml={"25px"}
					fontWeight={900}
					color={"rgb(230, 230, 230)"}
				>
					GBL2023
				</Typography>
				<Typography fontSize={"35px"} ml={"25px"} fontWeight={900}>
					공지사항
				</Typography>

				<Box width={"calc(100% - 50px)"} ml={"25px"}>
					<AnnounceCard></AnnounceCard>
					<AnnounceCard></AnnounceCard>
					<AnnounceCard></AnnounceCard>
					<AnnounceCard></AnnounceCard>
					<AnnounceCard></AnnounceCard>
					<AnnounceCard></AnnounceCard>
				</Box>
			</AppLayout>
		</>
	);
};

export default AnnouncePage;
