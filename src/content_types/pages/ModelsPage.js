/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Redirect } from "react-router";

// import Layout from "../../components/layout";
import ModelsPageComp from "./comp/ModelsPageComp";
import NavTabs from "./comp/NavTabs";
// import Content_model_page from "./Content_model_page";
import Content_Tab from "./Content_Tab";
import MediaPage from "./ApiPage";
import Gallery from "./gallery/Gallery";

export default function ModelsPage({ model, setRefresh, refresh, loading }) {
  const [currentTab, setCurrentTab] = useState("content-model");
  // tabs content-model,content
  const changeTab = (ref) => {
    setCurrentTab(ref);
  };
  return (
    <section>
      <div>
        <NavTabs changeTab={changeTab} currentTab={currentTab} />
      </div>
      {/* {JSON.stringify(model)} */}

      <div className="lg:py-2 lg:w-5/6 lg:mx-auto">
        {currentTab === "projects" && <Redirect to="/projects" />}
        {currentTab === "content-model" && (
          <ModelsPageComp
            model={model}
            setRefresh={setRefresh}
            refresh={refresh}
            loading={loading}
          />
        )}
        {currentTab === "content-tab" && <Content_Tab model={model} />}
        {currentTab === "api-tab" && <MediaPage model={model} />}
        {currentTab === "gallery" && <Gallery />}
      </div>
    </section>
  );
}
