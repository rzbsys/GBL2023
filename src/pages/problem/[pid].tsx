import useElementHeight from "@/hooks/useElementHeight";
import {
	Box,
	Button,
	Fade,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Stack,
	SxProps,
	TextField,
	Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Background from "@/components/background";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import CustomizedSteppers from "@/components/stepper";
import PdfViwer from "@/components/pdfviwer";

const PDFPage = () => {
	const element_height_ref = useElementHeight();

	return (
		<Box ref={element_height_ref}>
			<Typography
				fontSize={"20px"}
				pt={"35px"}
				ml={"25px"}
				fontWeight={900}
				color={"rgb(230, 230, 230)"}
			>
				STEP1
			</Typography>
			<Typography
				fontSize={"25px"}
				width={"calc(100% - 80px)"}
				ml={"25px"}
				mb={"20px"}
				fontWeight={900}
				color={"rgb(50, 50, 50)"}
			>
				아래 PDF를 참고하여 기본 개념을 학습하세요.
			</Typography>
			<PdfViwer fileUrl='/pdf-test.pdf'></PdfViwer>
		</Box>
	);
};

const SolvePage = () => {
	const element_height_ref = useElementHeight();

	return (
		<Box ref={element_height_ref}>
			<Typography
				fontSize={"20px"}
				pt={"35px"}
				ml={"25px"}
				fontWeight={900}
				color={"rgb(230, 230, 230)"}
			>
				STEP2
			</Typography>
			<Typography
				fontSize={"25px"}
				width={"calc(100% - 80px)"}
				ml={"25px"}
				fontWeight={900}
				color={"rgb(50, 50, 50)"}
			>
				다음 중 올바르지 않는 것은 무엇인가요?
			</Typography>
			<Typography
				fontSize={"15px"}
				width={"calc(100% - 80px)"}
				ml={"25px"}
				mb={"20px"}
				fontWeight={800}
				color={"rgb(150, 150, 150)"}
			>
				배점 : 30점
			</Typography>
			<TextField
				label='답을 입력하세요.'
				variant='outlined'
				sx={{
					bgcolor: "rgb(240, 240, 240)",
					width: "calc(100% - 50px)",
					ml: "25px",
					border: "none",
					borderRadius: "10px",
					"& .MuiOutlinedInput-notchedOutline": {
						border: 0,
					},
					mt: "40px",
				}}
				fullWidth
				InputProps={{
					disableUnderline: true,
				}}
			/>
			<Box
				sx={{
					bgcolor: "rgb(240, 240, 240)",
					width: "calc(100% - 80px)",
					ml: "25px",
					px: "15px",
					py: "15px",
					mt: "20px",
					borderRadius: "10px",
				}}
			>
				<FormControl>
					<RadioGroup
						aria-labelledby='demo-radio-buttons-group-label'
						defaultValue='female'
						name='radio-buttons-group'
						sx={{ gap: "15px" }}
					>
						<FormControlLabel
							value='1'
							control={<Radio />}
							label='1번 : ㅁㅈㅇㅁㅈ'
						/>
						<FormControlLabel
							value='2'
							control={<Radio />}
							label='2번 : ㅁㅈㅇㅁㅈㅁㅈㅇㅁㅈㅁㅈㅇㅁㅈㅁㅈㅇㅁㅈㅁㅈㅇㅁㅈ'
						/>
						<FormControlLabel
							value='3'
							control={<Radio />}
							label='3번 : ㅁㅈㅇㅁㅈ'
						/>
						<FormControlLabel
							value='4'
							control={<Radio />}
							label='4번 : ㅁㅈㅇㅁㅈ'
						/>
						<FormControlLabel
							value='5'
							control={<Radio />}
							label='5번 : ㅁㅈㅇㅁㅈ'
						/>
					</RadioGroup>
				</FormControl>
			</Box>
		</Box>
	);
};

const CustomButton = ({
	onClick,
	text,
	sx,
}: {
	onClick?: any;
	text?: string;
	sx?: SxProps;
}) => {
	return (
		<Button
			fullWidth
			sx={{
				bgcolor: "rgb(240, 240, 240)",
				borderRadius: "10px",
				fontSize: "16px",
				"&:hover": {
					bgcolor: "rgb(240, 240, 240)",
				},
				color: "rgb(100, 100, 100)",
				fontWeight: 900,
				transition: "0.3s",
				overflow: "hidden",
				display: "block",
				...sx,
			}}
			disableRipple
			onClick={onClick}
		>
			{text}
		</Button>
	);
};

function ProblemPage() {
	const element_height_ref = useElementHeight();
	const router = useRouter();
	const { pid } = router.query;
	const [SwiperInstance, setSwiperInstance] = useState<any>(null);
	const [PageNum, SetPageNum] = useState(0);
	const [MaxPage, SetMaxPage] = useState(0);

	useEffect(() => {
		if (PageNum === -1) {
			router.push(`/booth/${pid}`);
		}
		if (SwiperInstance !== null) {
			SwiperInstance.slideTo(PageNum);
		}
	}, [PageNum]);

	return (
		<>
			<Fade in={PageNum !== 0}>
				<Box>
					<CustomizedSteppers maxstep={5} now={PageNum}></CustomizedSteppers>
				</Box>
			</Fade>

			<Background></Background>
			<Swiper
				onSwiper={(swiper) => {
					setSwiperInstance(swiper);
				}}
				allowTouchMove={false}
			>
				<SwiperSlide>
					<Box ref={element_height_ref}>
						<Typography
							fontSize={"20px"}
							pt='25px'
							ml={"25px"}
							fontWeight={900}
							color={"rgb(230, 230, 230)"}
							zIndex={100}
							sx={{
								transition: "0.3s",
							}}
						>
							GBL2023 문제페이지
						</Typography>
						<Typography
							fontSize={"30px"}
							width={"calc(100% - 80px)"}
							ml={"25px"}
							fontWeight={900}
							color={"rgb(50, 50, 50)"}
						>
							부스이름부스이름부스이름부스이름부스이름부스이름부스이름부스이
						</Typography>
					</Box>
				</SwiperSlide>
				<SwiperSlide>
					<PDFPage></PDFPage>
				</SwiperSlide>
				<SwiperSlide>
					<SolvePage></SolvePage>
				</SwiperSlide>
			</Swiper>
			<Stack
				direction={"row"}
				height={"50px"}
				px={"20px"}
				width={"calc(100% - 40px)"}
				gap={"15px"}
				position={"fixed"}
				bottom={"20px"}
				zIndex={1000}
			>
				<CustomButton
					text={PageNum == 0 ? "부스 소개" : "이전"}
					sx={{
						width: PageNum == 0 ? "120px" : "100%",
					}}
					onClick={() => {
						SetPageNum(PageNum - 1);
					}}
				></CustomButton>
				<CustomButton
					text='다음'
					onClick={() => {
						SetPageNum(PageNum + 1);
					}}
				></CustomButton>
			</Stack>
		</>
	);
}

export default ProblemPage;
