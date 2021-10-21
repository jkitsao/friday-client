/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import Header from "./comp/Header";
import Projects from "./comp/Projects";
import { useUser } from "../../firebase/useUser";

export default function Manage() {
  const [refresh, setRefresh] = useState(false);
  const { user } = useUser();

  return (
    <section>
      <div className=" p-4  bg-gray-700 rounded-md">
        <Header refresh={refresh} setRefresh={setRefresh} name={user?.name} />
      </div>
      <div
        className="border border-dashed mt-8 bg-gray-50"
        style={{
          minHeight: "60vh",
        }}
      >
        <Projects refresh={refresh} setRefresh={setRefresh} />
      </div>
    </section>
  );
}
