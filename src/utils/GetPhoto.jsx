import axios from "axios";

const GetPhoto = async (image) => {
  console.log(image);
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`,
    formData
  );
  console.log(data.data.display_url);
  return data.data.display_url;
};

export default GetPhoto;
