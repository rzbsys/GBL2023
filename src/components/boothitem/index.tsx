import { Box } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import GetMaxLineProperty from "@/utils/linelimit";

const BoothItem = ({ boothid }: { boothid: number }) => {
	const router = useRouter();

	return (
		<Box
			component={"div"}
			onClick={() => {
				router.push(`/booth/${boothid}`)
			}}
			width={"calc(100% - 40px)"}
			height={"160px"}
			bgcolor={"rgb(240, 240, 240)"}
			ml={"20px"}
			mb={"30px"}
			borderRadius={"20px"}
			display={"flex"}
			overflow={"hidden"}
		>
			<Box position={"relative"} bgcolor={"white"}>
				<Image
					src='https://images.velog.io/images/sdb016/post/34bdac57-2d63-43ce-a14c-8054e9e036de/test.png'
					width={300}
					height={160}
					style={{ objectFit: "cover", height: "160px", width: "150px" }}
					alt='Image'
				/>
			</Box>
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
						제목제
					</Typography>
				</div>
				<div style={GetMaxLineProperty(2)}>
					<Typography
						variant='subtitle1'
						fontSize={"15px"}

						sx={{ lineHeight: "20px !important" }}
						color={"rgb(150, 150, 150)"}
					>
						설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
					</Typography>
				</div>
			</Box>
		</Box>
	);
};

export default BoothItem;
