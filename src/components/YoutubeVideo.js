import React from "react";
import PropTypes from "prop-types";

const YoutubeVideo = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeVideo.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeVideo;
