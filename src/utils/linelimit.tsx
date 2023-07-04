const GetMaxLineProperty = (maxline: number) => {
	const containerStyle: React.CSSProperties = {
		display: "-webkit-box",
		WebkitBoxOrient: "vertical",
		overflow: "hidden",
		textOverflow: "ellipsis",
		WebkitLineClamp: maxline,
	};
	return containerStyle;
};

export default GetMaxLineProperty;