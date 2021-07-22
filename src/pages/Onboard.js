import React from "react";
import Onboarding from "../components/Onboarding";
import { useUser } from "../firebase/useUser";

function Onboard() {
  const { user, logout } = useUser();

  return (
    <main>
      <div className="mx-5 lg:w-1/2 lg:mx-auto xl:w-2/5">
        <Onboarding user={user} />
      </div>
    </main>
  );
}

export default Onboard;
