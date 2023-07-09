import AppLayout from "@/layouts/app-layout";
import { FilledInput, Typography } from "@mui/material";
import Header from "@/components/header";
import Background from "@/components/background";
import useScroll from "@/hooks/useScroll";
import { useEffect, useState } from "react";
import BoothItem from "@/components/boothitem";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import QRCodePage from "@/components/qrcode";
import InputBase from "@mui/material/InputBase";

import ProgressBar from "@/components/progressbar";

import withAuth from "@/utils/withAuth";
import { getBooths } from "@/lib/booth";

const BoothList = () => {
	const { scrollRef, scrollPosition } = useScroll(0);
	const [scrolled, Setscrolled] = useState(false);
	const [progress, Setprogress] = useState(0);
	const [Loading, SetLoading] = useState(true);
	const [OpenModal, SetOpenModal] = useState(false);
	const [boothList, SetboothList] = useState([]);
	const openQr = () => {
		SetOpenModal(true);
	};

	const closeQr = () => {
		SetOpenModal(false);
	};

	const refreshBoothList = () => {
		getBooths().then((res) => {
			SetboothList(res.data.boothlist);
		});
	};

	useEffect(() => {
		refreshBoothList();

		const getBoothInterval = setInterval(() => {
			refreshBoothList();
		}, 5000);
		if (scrollPosition.scrollTop > 140) {
			Setscrolled(true);
		} else {
			Setscrolled(false);
		}
		Setprogress(
			(scrollPosition.scrollTop /
				(scrollPosition.scrollHeight - scrollPosition.clientHeight)) *
				100
		);
		return () => {
			clearInterval(getBoothInterval);
		};
	}, [scrollPosition]);

	useEffect(() => {
		SetLoading(false);
	}, []);

	return (
		<>
			<QRCodePage
				open={OpenModal}
				closeQr={closeQr}
				openQr={openQr}
			></QRCodePage>
			<ProgressBar value={progress}></ProgressBar>
			<Background></Background>

			<AppLayout scroll_ref={scrollRef}>
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
				<Header openModal={openQr} hide={scrolled}></Header>

				<InputBase
					sx={{
						bgcolor: "rgb(240, 240, 240)",
						width: "calc(100% - 50px)",
						ml: "25px",
						p: "10px 20px",
						backdropFilter: "blur(0.1px)",
						height: "45px",
						zIndex: "30",
						borderRadius: "10px",
					}}
					placeholder='부스명을 입력해주세요.'
				></InputBase>

				<Box
					ml={"25px"}
					padding={"8px 15px"}
					bgcolor={"rgb(240, 240, 240)"}
					mb={"20px"}
					display={"inline-block"}
					borderRadius={"20px"}
					fontSize={"13px"}
					fontWeight={600}
					color={"rgb(100, 100, 100)"}
					mt={"20px"}
				>
					체험가능 부스 : 0개
				</Box>

				<Slide in={!Loading} direction='up' timeout={400}>
					<Box>
						{boothList.map((item, index) => (
							<BoothItem item={item} key={index}></BoothItem>
						))}
						{/* {Array(50)
							.fill(0)
							.map((item, index) => (
								<BoothItem boothid={index} key={index}></BoothItem>
							))} */}
					</Box>
				</Slide>
			</AppLayout>
		</>
	);
};

export default withAuth(BoothList);
