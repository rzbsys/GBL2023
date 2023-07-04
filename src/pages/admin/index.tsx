import LoginLayout from "@/layouts/login-layout";
import Background from "@/components/background";
import { Typography, Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useRouter } from "next/router";
import InputBase from "@mui/material/InputBase";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import { signOut } from "firebase/auth";
import { auth } from "@/utils/firebaseInit";
import LoadingPage from "@/components/loading";
import { boothAdminAuth } from "@/lib/auth";

const AdminLoaginPage = () => {
	const [animation, setanimation] = useState(false);
	const [Password, SetPassword] = useState("");
	const router = useRouter();
	const [loading, Setloading] = useState({
		is_loading: false,
		msg: "",
	});
	useEffect(() => {
		localStorage.removeItem("auth");
		signOut(auth);
		setanimation(true);
	}, []);
	return (
		<>
			{loading.is_loading ? (
				<LoadingPage msg={loading.msg}></LoadingPage>
			) : null}

			<Background></Background>
			<LoginLayout width_pad={60} gap={4}>
				<Box position={"fixed"} top={"100px"}>
					<Typography fontWeight={800} variant='h2'>
						GBL
					</Typography>
					<Typography fontWeight={800} variant='h2'>
						2023
					</Typography>
					<Typography
						fontWeight={800}
						variant='h4'
						mb={"50px"}
						color={"rgb(255, 170, 86)"}
					>
						관리자 페이지
					</Typography>
					<Typography
						fontWeight={400}
						variant='subtitle2'
						color={"rgb(100, 100, 100)"}
						ml={"10px"}
					>
						관리자가 아니신가요?
					</Typography>

					<Button
						variant='contained'
						disableElevation
						startIcon={<VpnKeyIcon></VpnKeyIcon>}
						sx={{
							bgcolor: "rgb(208, 227, 255)",
							color: "rgb(0, 100, 255)",
							transition: "0.3s",
							borderRadius: "100px",
							fontSize: "13px",
							"&:hover": {
								backgroundColor: "rgb(0, 100, 255)",
								color: "white",
							},
						}}
						disableRipple
						disableTouchRipple
						disableFocusRipple
						onClick={() => {
							router.push("/");
						}}
					>
						일반 로그인 페이지 바로가기
					</Button>
				</Box>

				<Slide in={animation} timeout={600} direction='up'>
					<Stack>
						<Typography
							color={"rgb(150, 150, 150)"}
							fontWeight={400}
							variant='subtitle1'
						>
							사전에 부여받은
							<br />
							비밀번호로만 로그인이 가능합니다.
						</Typography>
						<Box height={20}></Box>

						<InputBase
							sx={{
								bgcolor: "rgb(240, 240, 240)",
								height: "50px",
								textAlign: "center",
								borderRadius: "10px",
								mb: "10px",
							}}
							value={Password}
							type='password'
							inputProps={{ style: { textAlign: "center" } }}
							placeholder='비밀번호를 입력하세요.'
							onChange={(e) => {
								SetPassword(e.target.value);
							}}
						></InputBase>

						<Button
							variant='contained'
							disableRipple
							disableTouchRipple
							disableFocusRipple
							disableElevation
							sx={{
								height: "50px",
								backgroundColor: "rgb(255, 170, 86)",
								borderRadius: "10px",
								"&:hover": {
									backgroundColor: "rgb(255, 170, 86)",
								},
								fontWeight: 800,
								fontSize: "16px",
								color: "white",
							}}
							onClick={() => {
								Setloading({
									...loading,
									msg: "어드민 페이지 로딩중",
									is_loading: true,
								});
								boothAdminAuth(Password).then((res) => {
									console.log(res);
								});
							}}
						>
							로그인
						</Button>
					</Stack>
				</Slide>
			</LoginLayout>
		</>
	);
};

export default AdminLoaginPage;
