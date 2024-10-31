import  { useRef, useState } from "react";
import Webcam from "react-webcam";

const LivePhoto = () => {
  const webcamRef = useRef(null);
  const [photo, setPhoto] = useState(null);

    // Switch to back camera
    const videoConstraints = {
      width: 640,
      height: 480,
      facingMode: { exact: "environment" }, // This sets it to use the back camera
    };
  

  const capturePhoto = () => {
    const screenshot = webcamRef.current.getScreenshot();
    setPhoto(screenshot);
  };

  return (
    <div>
    <h1>Live Photo Capture with Back Camera</h1>
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <button className="btn bg-green-500" onClick={capturePhoto}>Capture Photo</button>
    </div>
    {photo && (
      <div>
        <h2>Captured Photo</h2>
        <img src={photo} alt="Captured" />
      </div>
    )}
  </div>
  );
};

export default LivePhoto;
