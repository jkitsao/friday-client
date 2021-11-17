/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import Header from "./comp/Header";
import Projects from "./comp/Projects";
import { useUser } from "../../firebase/useUser";
import Head from "../../components/seo/Head";
export default function Manage() {
  const [refresh, setRefresh] = useState(false);
  const { user } = useUser();

  return (
    <section>
      <Head
        title={`projects | ${user?.name}`}
        name="lucidcms"
        content="projects"
      />
      <div className=" p-4  bg-gray-700 rounded-md">
        <Header refresh={refresh} setRefresh={setRefresh} name={user?.name} />
      </div>
      <div
        className="border border-dashed mt-8 bg-blue-50"
        style={{
          minHeight: "70vh",
        }}
      >
        <Projects refresh={refresh} setRefresh={setRefresh} />
      </div>
    </section>
  );
}
