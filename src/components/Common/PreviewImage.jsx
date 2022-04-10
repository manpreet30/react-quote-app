import { useEffect, useState } from "react";

const PreviewImage = ({ image }) => {
  const [preview, setPreview] = useState(null);
  const [imgTag, setImgTag] = useState(false);

  useEffect(() => {
    setImgTag(false);
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        setPreview(reader.result);
        setImgTag(true);
      };
    }
  }, [image]);

  return <div>{imgTag ? <img src={preview} alt="Image" width="200" height="200" /> : ""}</div>;
};

export default PreviewImage;
