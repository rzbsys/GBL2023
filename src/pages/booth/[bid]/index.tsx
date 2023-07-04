import { useRouter } from "next/router";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import useElementHeight from "@/hooks/useElementHeight";
import { useEffect, useState } from "react";
import GetMaxLineProperty from "@/utils/linelimit";
import Image from "next/image";
import useScroll from "@/hooks/useScroll";
import Stack from "@mui/material/Stack";
import withAuth from "@/utils/withAuth";

import VerticalBoxLayout, {
	LeftTitle,
	RightTitle,
} from "@/layouts/verticalbox-layout";

const BoothDetail = () => {
	const router = useRouter();
	const { bid } = router.query;
	const element_height_ref = useElementHeight();
	const [Scrolled, SetScrolled] = useState(false);
	const { scrollRef, scrollPosition } = useScroll(0);

	useEffect(() => {
		if (scrollPosition.scrollTop > 3) {
			SetScrolled(true);
		} else {
			SetScrolled(false);
		}
	}, [scrollPosition]);

	return (
		<Box ref={element_height_ref} overflow={"hidden"}>
			<Box ref={scrollRef} height={"100%"} overflow={"scroll"}>
				<AppBar
					position='absolute'
					elevation={0}
					sx={{
						backgroundColor: Scrolled
							? "rgb(230, 230, 230)"
							: "rgba(255, 255, 255, 0)",
						transition: "0.3s",
						borderBottomRightRadius: "20px",
						borderBottomLeftRadius: "20px",
						height: "300px",
						transform: Scrolled ? "translateY(-230px)" : "translateY(0px)",
					}}
				>
					<Typography
						fontSize={"20px"}
						position={"absolute"}
						top={"25px"}
						left={"25px"}
						fontWeight={900}
						color={"rgb(230, 230, 230)"}
						zIndex={100}
					>
						GBL2023
					</Typography>
					<Image
						fill
						style={{
							objectFit: "cover",
							filter: "brightness(70%)",
							transition: "0.3s",
							opacity: Scrolled ? "0" : "1",
						}}
						alt='BoothImage'
						src='https://cdn.pixabay.com/photo/2020/09/09/02/12/smearing-5556288_1280.jpg'
					></Image>
					<Toolbar
						sx={{
							marginBottom: "10px",
							position: "absolute",
							bottom: "0px",
						}}
					>
						<div style={GetMaxLineProperty(2)}>
							<Typography
								fontSize={"40px"}
								fontWeight={800}
								color={Scrolled ? "rgb(100, 100, 100)" : "white"}
								px={"10px"}
								sx={{
									transform: Scrolled ? "scale(0.4)" : "",
									transformOrigin: "left bottom",
									flexGrow: 1,
									alignSelf: "flex-end",
									transition: "0.3s",
								}}
							>
								부스 목록부스 목록부스 목록부스 목록부스
							</Typography>
						</div>
					</Toolbar>
				</AppBar>
				<Box height={"300px"}></Box>

				<Typography variant='h6' fontWeight={800} ml={"20px"} mt={"30px"}>
					필요 역량
				</Typography>
				<Typography
					width={"calc(100% - 80px)"}
					mt={"10px"}
					ml={"20px"}
					py={"20px"}
					px='20px'
					fontWeight={600}
					bgcolor={"rgb(240, 240, 240)"}
					variant='body1'
					color='rgb(100, 100, 100)'
					borderRadius={"10px"}
				>
					부스, 소개부스, 소개부스, 소개부스, 소개부스, 소개부스, 소개부스,
					소개부스, 소개
				</Typography>

				<Typography variant='h6' fontWeight={800} ml={"20px"} mt={"30px"}>
					프로젝트 소개 영상
				</Typography>

				<video
					src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
					style={{
						width: "calc(100% - 50px)",
						marginLeft: "25px",
						marginTop: "10px",
						borderRadius: "10px",
					}}
					// autoPlay
					// muted
					playsInline
					controls
				></video>

				<Typography variant='h6' fontWeight={800} ml={"20px"} mt={"30px"}>
					프로젝트 개요
				</Typography>

				<Box mt={"20px"}>
					<VerticalBoxLayout>
						<LeftTitle>부스 혼잡도</LeftTitle>
						<RightTitle color={"rgb(0, 100, 255)"}>혼잡</RightTitle>
					</VerticalBoxLayout>
				</Box>

				<Box mt={"20px"}>
					<VerticalBoxLayout>
						<LeftTitle>체험 인원수</LeftTitle>
						<RightTitle color={"rgb(255, 149, 0)"}>5명</RightTitle>
					</VerticalBoxLayout>
				</Box>

				<Box height={"200px"}></Box>
				<Stack
					width={"calc(100% - 40px)"}
					ml={"20px"}
					direction={"row"}
					position={"fixed"}
					bottom={"15px"}
					height={"50px"}
					gap={"15px"}
				>
					<Button
						fullWidth
						sx={{
							bgcolor: "rgb(240, 240, 240)",
							borderRadius: "10px",
							color: "#ffd400",
							fontSize: "16px",
							"&:hover": {
								bgcolor: "rgb(240, 240, 240)",
							},
							fontWeight: "900",
						}}
						disableRipple
						onClick={() => {
							router.push("/booth");
						}}
					>
						부스목록
					</Button>
					<Button
						fullWidth
						disableRipple
						sx={{
							bgcolor: "#ffd400",
							borderRadius: "10px",
							color: "white",
							fontSize: "16px",
							fontWeight: "900",
							"&:hover": {
								bgcolor: "#ffd400",
							},
						}}
						onClick={() => {
							router.push(`/problem/${bid}`);
						}}
					>
						문제풀기
					</Button>
				</Stack>
			</Box>
		</Box>
	);
};

export default withAuth(BoothDetail);
