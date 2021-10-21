// import axios from "axios";
// import { useUser } from "../../../firebase/useUser";
import api from "../../../api/axios";
export function postMediaToGallery(info, user) {
  return api.post("/gallery", {
    user: user,
    userId: user.id,
    info,
  });
}
