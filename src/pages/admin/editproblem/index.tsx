import useElementHeight from "@/hooks/useElementHeight";
import { Box, Button, Fade, Stack, SxProps, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import Background from "@/components/background";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import CustomizedSteppers from "@/components/stepper";
import { CustomFileInput, CustomInput, CustomSelect } from "../makebooth";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { makeProblems } from "@/lib/admin";
import { fileUpload } from "@/lib/upload";
import LoadingPage from "@/components/loading";
import withAdminAuth from "@/utils/withAdminAuth";

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
	const AdminAuthState = useSelector((state: RootState) => state.adminauth);
	const [loading, Setloading] = useState({
		is_loading: false,
		msg: "",
	});

	useEffect(() => {
		if (PageNum === -1) {
			router.push(`/booth/${pid}`);
		}
		if (SwiperInstance !== null) {
			SwiperInstance.slideTo(PageNum);
		}
	}, [PageNum]);

	const problemData = {
		problem_type: "주관식",
		question: "",
		answer: "",
		score: 0,
		pdf_url: "",
	};

	const [Problems, SetProblems] = useState([
		{ ...problemData, score: 10 },
		{ ...problemData, score: 10 },
		{ ...problemData, score: 20 },
		{ ...problemData, score: 30 },
		{ ...problemData, score: 30 },
	]);

	const [UplaodFile, SetUploadFile] = useState([
		new Blob(),
		new Blob(),
		new Blob(),
		new Blob(),
		new Blob(),
	]);

	const EditProblems = (idx: number, data: typeof problemData) => {
		let temp = [...Problems];
		temp[idx] = data;
		SetProblems(temp);
	};

	const EditFiles = (idx: number, data: Blob) => {
		let temp = [...UplaodFile];
		temp[idx] = data;
		SetUploadFile(temp);
	};

	const onFileUpload = async () => {
		await Promise.all(
			UplaodFile.map(async (item, index) => {
				const formData = new FormData();
				if (item.size !== 0) {
					formData.append("file", item);
					await fileUpload(formData, (progress: number) => {
						Setloading({
							...loading,
							msg: `${index + 1}번째 파일 업로드중입니다.(${progress}%)`,
						});
					}).then((res) => {
						EditProblems(index, {
							...Problems[index],
							pdf_url: res.data.file,
						});
					});
				}
			})
		);
	};

	const onSubmit = async () => {
		if (confirm("문제를 저장하시겠습니까?")) {
			Setloading({
				...loading,
				is_loading: true,
				msg: "파일 업로드 대기중",
			});
			onFileUpload().then((res) => {
				makeProblems(AdminAuthState.bid, Problems).then((res) => {
					alert("문제를 저장했습니다");
					router.push("/admin/dashboard");
				});
			});
		}
	};

	return (
		<>
			{loading.is_loading ? (
				<LoadingPage msg={loading.msg}></LoadingPage>
			) : null}

			<Fade in={PageNum !== 0}>
				<Box>
					<CustomizedSteppers maxstep={6} now={PageNum}></CustomizedSteppers>
				</Box>
			</Fade>

			<Background></Background>
			<Box ref={element_height_ref}>
				<Swiper
					onSwiper={(swiper) => {
						setSwiperInstance(swiper);
					}}
					allowTouchMove={false}
					style={{
						height: "100%",
					}}
				>
					<SwiperSlide>
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
							GBL2023 문제 수정
						</Typography>
						<Typography
							fontSize={"30px"}
							width={"calc(100% - 80px)"}
							ml={"25px"}
							fontWeight={900}
							color={"rgb(50, 50, 50)"}
						>
							다음버튼을 눌러 문제를 추가해주세요.
						</Typography>
					</SwiperSlide>
					{Array(5)
						.fill(1)
						.map((item, index) => {
							return (
								<SwiperSlide
									key={index}
									style={{
										height: "100%",
										overflow: "scroll",
									}}
								>
									<Typography
										fontSize={"30px"}
										width={"calc(100% - 80px)"}
										ml={"25px"}
										mt={"40px"}
										fontWeight={900}
										color={"rgb(50, 50, 50)"}
									>
										{index + 1}번 문제 {Problems[index].score} 점
									</Typography>
									<Stack mt={"40px"} px={"20px"} mb={"100px"} gap={"20px"}>
										<CustomInput
											name='question'
											text='질문을 입력하세요.'
											multiline
											value={Problems[index].question}
											onChange={(e: ChangeEvent<HTMLInputElement>) => {
												EditProblems(index, {
													...Problems[index],
													question: e.target.value,
												});
											}}
										></CustomInput>
										<CustomFileInput
											text='문제해결에 필요한 pdf파일을 업로드해주세요.'
											name='pdf_url'
											filetype='pdf'
											InputLabelProps={{
												shrink: true,
											}}
											onChange={(file: File) => {
												EditFiles(index, file);
											}}
										></CustomFileInput>
										{/* <CustomSelect
											name='problem_type'
											label='문제 유형'
											options={["주관식", "객관식"]}
											value={Problems[index].problem_type}
											onChange={(e: ChangeEvent<HTMLInputElement>) => {
												EditProblems(index, {
													...Problems[index],
													problem_type: e.target.value,
												});
											}}
										></CustomSelect> */}
										{Problems[index].problem_type === "주관식" ? (
											<CustomInput
												name='answer'
												text='주관식 답을 입력해주세요.'
												multiline
												value={Problems[index].answer}
												onChange={(e: ChangeEvent<HTMLInputElement>) => {
													EditProblems(index, {
														...Problems[index],
														answer: e.target.value,
													});
												}}
											></CustomInput>
										) : (
											<>
												{/* {Array(4)
													.fill(1)
													.map((item, subindex) => {
														return (
															<CustomInput
																key={subindex}
																name='question'
																text={`${subindex + 1}번 선택지`}
																multiline
																value={Problems[index].choices[subindex]}
																onChange={(
																	e: ChangeEvent<HTMLInputElement>
																) => {
																	let choices = [...Problems[index].choices];
																	choices[subindex] = e.target.value;
																	EditProblems(index, {
																		...Problems[index],
																		choices: choices,
																	});
																}}
															></CustomInput>
														);
													})}

												<CustomInput
													name='answer'
													text='객관식 답을 입력해주세요.'
													multiline
													value={Problems[index].answer}
													onChange={(e: ChangeEvent<HTMLInputElement>) => {
														EditProblems(index, {
															...Problems[index],
															answer: e.target.value,
														});
													}}
												></CustomInput>
												<Typography variant='body1' color='initial'>
													숫자만 입력해주세요.(ex. 1)
												</Typography> */}
											</>
										)}
									</Stack>
								</SwiperSlide>
							);
						})}
				</Swiper>
			</Box>
			<Stack
				direction={"row"}
				height={"50px"}
				px={"20px"}
				width={"calc(100% - 40px)"}
				gap={"15px"}
				position={"absolute"}
				bottom={"20px"}
				zIndex={1000}
			>
				<CustomButton
					text={PageNum == 0 ? "돌아가기" : "이전"}
					sx={{
						width: PageNum == 0 ? "120px" : "100%",
					}}
					onClick={() => {
						SetPageNum(PageNum - 1);
					}}
				></CustomButton>
				<CustomButton
					text={PageNum !== 5 ? "다음" : "제출"}
					onClick={() => {
						if (PageNum === 5) {
							onSubmit();
						} else {
							SetPageNum(PageNum + 1);
						}
					}}
				></CustomButton>
			</Stack>
		</>
	);
}

export default withAdminAuth(ProblemPage);
