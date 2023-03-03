import axios from "axios";

const uploadPic = async files => {

let pick=[];
  for (let i = 0; i < files.length; i++) {
    const element = files[i]; 
  try {
    const form = new FormData();
    form.append("file", element);
    form.append("upload_preset", "debatable");
    form.append("cloud_name", "darkillisour");

    const res = await axios.post(process.env.CLOUDINARY_URL, form);
  
   pick.push( res.data.secure_url);
 
    console.log(pick,"1")
  } catch (error) {
    return;
  }
}
return pick
};

export default uploadPic;
