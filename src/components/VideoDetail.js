import React from "react";

const VideoDetail = ({ video }) => {
	if (!video) {
		return (
			<div className="ui segment">
				<p></p>
				<div className="ui active inverted dimmer">
					<div className="ui loader"></div>
				</div>
			</div>
		);
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<div className="ui embed">
				<iframe title="Video player" src={videoSrc} />
			</div>
			<div className="ui segment">
				<h4 className="ui header">{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
