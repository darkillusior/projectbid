import axios from "axios";
import baseUrl from "./baseUrl";
import catchErrors from "./catchErrors";
import cookie from "js-cookie";

export const Axios = axios.create({
  baseURL: `${baseUrl}/api/profile`,
  headers: { Authorization: cookie.get("token") }
});




export const profileUpdate = async (profile, setLoading, setError, profilePicUrl) => {
  try {
    const { bio, facebook, youtube, twitter, instagram } = profile;

    await Axios.post(`/update`, {
      bio,
      facebook,
      youtube,
      twitter,
      instagram,
      profilePicUrl
    });

    setLoading(false);
    window.location.reload();
  } catch (error) {
    setError(catchErrors(error));
    setLoading(false);
  }
};

export const passwordUpdate = async (setSuccess, userPasswords) => {
  const { currentPassword, newPassword } = userPasswords;
  try {
    await Axios.post(`/settings/password`, { currentPassword, newPassword });

    setSuccess(true);
  } catch (error) {
    alert(catchErrors(error));
  }
};

export const toggleMessagePopup = async (setPopupSetting, setSuccess) => {
  try {
    await Axios.post(`/settings/messagePopup`);

    setPopupSetting(prev => !prev);
    setSuccess(true);
  } catch (error) {
    alert(catchErrors(error));
  }
};
