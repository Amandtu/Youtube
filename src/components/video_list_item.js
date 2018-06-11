import React from "react";

const VideoListItem = ({ video, VideoSelect }) => {
  const url = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => VideoSelect(video)} className="list-group-item">
      <div className="media video-list">
        <div className="media-left">
          <img className="media-object" src={url} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
