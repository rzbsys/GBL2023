import AppLayout from "@/layouts/app-layout";
import { Box, Typography, Button } from "@mui/material";

import Stack from "@mui/material/Stack";
import Profile from "@/components/profile";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import CustomDivider from "@/components/customdivider";

import VerticalBoxLayout, {
	LeftTitle,
	RightTitle,
} from "@/layouts/verticalbox-layout";
import { useRouter } from "next/router";

const MyPage = () => {
	const AuthState = useSelector((state: RootState) => state.auth);
	const router = useRouter();
	return (
		<AppLayout>
			<Typography
				fontSize={"20px"}
				position={"absolute"}
				top={"25px"}
				left={"25px"}
				fontWeight={900}
				color={"rgb(230, 230, 230)"}
			>
				GBL2023
			</Typography>

			<Profile {...AuthState.user}></Profile>
			<Box>
				<CustomDivider label='현재까지 받은 점수'></CustomDivider>

				<VerticalBoxLayout>
					<LeftTitle>총 점수</LeftTitle>
					<RightTitle color={"rgb(0, 100, 255)"}>800점</RightTitle>
				</VerticalBoxLayout>
			</Box>
			<Box>
				<CustomDivider mt={10} label='현재 등수'></CustomDivider>

				<VerticalBoxLayout>
					<LeftTitle>현재 등수</LeftTitle>
					<RightTitle color={"rgb(255, 165, 81)"}>
						<Stack alignItems={"end"}>
							<Typography variant='h5' fontWeight={800}>
								4등
							</Typography>
							<Button
								onClick={() => {
									router.push("/rank");
								}}
							>
								등수 전체보기
							</Button>
						</Stack>
					</RightTitle>
				</VerticalBoxLayout>
			</Box>
			<Box>
				<CustomDivider label='참여 부스 목록' mt={10}></CustomDivider>
				<Stack gap={"30px"} direction={"column"} mb={"50px"}>
					<VerticalBoxLayout>
						<LeftTitle>부스명</LeftTitle>
						<RightTitle color='rgb(39, 196, 89)'>+100점</RightTitle>
					</VerticalBoxLayout>

					<VerticalBoxLayout>
						<LeftTitle>부스명</LeftTitle>
						<RightTitle color='rgb(39, 196, 89)'>+100점</RightTitle>
					</VerticalBoxLayout>

					<VerticalBoxLayout>
						<LeftTitle>부스명</LeftTitle>
						<RightTitle color='rgb(39, 196, 89)'>+100점</RightTitle>
					</VerticalBoxLayout>

					<VerticalBoxLayout>
						<LeftTitle>부스명</LeftTitle>
						<RightTitle color='rgb(39, 196, 89)'>+100점</RightTitle>
					</VerticalBoxLayout>

					<VerticalBoxLayout>
						<LeftTitle>부스명</LeftTitle>
						<RightTitle color='rgb(39, 196, 89)'>+100점</RightTitle>
					</VerticalBoxLayout>

					<VerticalBoxLayout>
						<LeftTitle>부스명</LeftTitle>
						<RightTitle color='rgb(39, 196, 89)'>+100점</RightTitle>
					</VerticalBoxLayout>

					<VerticalBoxLayout>
						<LeftTitle>부스명</LeftTitle>
						<RightTitle color='rgb(39, 196, 89)'>+100점</RightTitle>
					</VerticalBoxLayout>

					<VerticalBoxLayout>
						<LeftTitle>부스명</LeftTitle>
						<RightTitle color='rgb(39, 196, 89)'>+100점</RightTitle>
					</VerticalBoxLayout>

					<VerticalBoxLayout>
						<LeftTitle>부스명</LeftTitle>
						<RightTitle color='rgb(39, 196, 89)'>+100점</RightTitle>
					</VerticalBoxLayout>

					<VerticalBoxLayout>
						<LeftTitle>부스명</LeftTitle>
						<RightTitle color='rgb(39, 196, 89)'>+100점</RightTitle>
					</VerticalBoxLayout>

					<VerticalBoxLayout>
						<LeftTitle>부스명</LeftTitle>
						<RightTitle color='rgb(39, 196, 89)'>+100점</RightTitle>
					</VerticalBoxLayout>

					<VerticalBoxLayout>
						<LeftTitle>부스명</LeftTitle>
						<RightTitle color='rgb(39, 196, 89)'>+100점</RightTitle>
					</VerticalBoxLayout>

					<VerticalBoxLayout>
						<LeftTitle>부스명</LeftTitle>
						<RightTitle color='rgb(39, 196, 89)'>+100점</RightTitle>
					</VerticalBoxLayout>

					<VerticalBoxLayout>
						<LeftTitle>부스명</LeftTitle>
						<RightTitle color='rgb(39, 196, 89)'>+100점</RightTitle>
					</VerticalBoxLayout>
				</Stack>
			</Box>
		</AppLayout>
	);
};

export default MyPage;
