import { useState, ChangeEvent } from "react";

export const FormVideo = () => {
  const [video, setVideo] = useState<string>("");
  const [videoError, setVideoError] = useState<string>("");

  const handleVideoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const video = e.target.value;
    setVideo(video);
    if (video.length > 0) {
      setVideoError("");
    }
  };

  return (
    <div>
      <label htmlFor="video">Video</label>
      <input
        type="text"
        name="video"
        id="video"
        value={video}
        onChange={handleVideoChange}
      />
      {videoError && <p>{videoError}</p>}
    </div>
  );
}