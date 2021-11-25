
import api from "../../../api/axios";
export function postMediaToGallery(image, info, user) {
  return api.post("/gallery", {
    user,
    info: { ...image, ...info },
    image,
  });
}
