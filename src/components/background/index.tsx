import useElementHeight from "@/hooks/useElementHeight";
import { Box } from "@mui/material";
import { memo, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Fade from "@mui/material/Fade";

interface BackgroundProps {
	hide? : boolean;
}

const Background = ({hide=false} : BackgroundProps) => {
	const full_height_ref = useElementHeight(30);
	const [rotation, setRotation] = useState(0);
	const [animation, setanimation] = useState(false);

	useEffect(() => {
		const RandomDgree = (Math.random() * 1000) % 360;
		setRotation(RandomDgree);
		setanimation(true);
	}, []);

	return (
		<Fade in={!hide}>
			<Box
				position={"fixed"}
				top={0}
				left={0}
				zIndex={-1}
				ref={full_height_ref}
				sx={{ width: "100%" }}
				overflow={"hidden"}
			>
				<div
					className={styles.triangle}
					style={{ transform: `rotate(${rotation}deg)` }}
				></div>
				<div
					className={styles.rectangle}
					style={{ transform: `rotate(${rotation + 20}deg)` }}
				></div>
				<div
					className={styles.circle}
					style={{ transform: `rotate(${rotation + 80}deg)` }}
				></div>
			</Box>
		</Fade>
	);
};

export default memo(Background);
