import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import GetMaxLineProperty from "@/utils/linelimit";

const RankItem = ({ rank }: { rank: number }) => {
	const router = useRouter();

	return (
		<Box
			width={"calc(100% - 40px)"}
			height={"100px"}
			bgcolor={"rgb(240, 240, 240)"}
			ml={"20px"}
			mb={"30px"}
			borderRadius={"20px"}
			display={"flex"}
			overflow={"hidden"}
		>
			<Stack position={"relative"} bgcolor={"rgb(250, 250, 250)"} alignItems={"center"} justifyContent={"center"}>
				<Typography width={"80px"} textAlign={"center"} variant="body1" color="initial" fontWeight={800}>{rank}등</Typography>
			</Stack>
			<Box
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"center"}
				px={"13px"}
				gap={"10px"}
			>
				<div style={GetMaxLineProperty(2)}>
					<Typography
						variant='h6'
						fontSize={"20px"}
						fontWeight={800}
						width={"100%"}
						sx={{ lineHeight: "30px !important", color: "rgb(30, 30, 30)" }}
					>
						전민국
					</Typography>
				</div>
				<div style={GetMaxLineProperty(1)}>
					<Typography
						variant='subtitle1'
						fontSize={"15px"}
						sx={{ lineHeight: "20px !important" }}
						color={"rgb(150, 150, 150)"}
					>
						마지막 부스명 ㅇ맞어ㅗ맞어모아ㅓ모아
					</Typography>
				</div>
			</Box>
		</Box>
	);
};

export default RankItem;
