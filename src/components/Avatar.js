import React from "react";
import { useUser } from "../firebase/useUser";

function Avatar({ seed }) {
  const { user, logout } = useUser();

  return (
    <>
      {seed && (
        <img
          className="h-8 w-8 rounded-full"
          src={`https://avatars.dicebear.com/api/initials/${seed}.svg`}
          alt=""
        />
      )}
    </>
  );
}

export default Avatar;
