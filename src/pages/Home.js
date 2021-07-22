import React from "react";
import Loading from "../components/loading";
import { useUser } from "../firebase/useUser";
export default function Home() {
  const { user, logout } = useUser();

  if (user) {
    return (
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        {JSON.stringify(user, null, 2)}

        <div>
          <button onClick={() => logout()}>logout</button>
        </div>
      </div>
    );
  } else {
    return <div className="text-3xl">unauthenticated</div>;
  }
}
