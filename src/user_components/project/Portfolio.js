import { useState } from "react";
import DraftEditor from "../DraftEditor";
import Editor from "../JoditEditor";
// import MyEditor from "../SlateEditor";
import Skills_input from "./comp/Skills_input";
import PopoverForm from "./comp/Popover";
import SocialComp from "./comp/SocialComp";
import ProjectComp from "./comp/ProjectComp";
import ProfilePic from "./comp/ProfilePic";
import Projects_modal from "./comp/Projects_modal";
export default function Portfolio_comp() {
  const [socialLinks, setSocialLinks] = useState([]);
  const [projects, setProjects] = useState([]);

  return (
    <>
      {/* <div>{JSON.stringify(projects, null, 2)}</div> */}
      <form className="h-full ">
        <div className="bg-gray-100 shadow-lg">
          <div className="px-4 py-5  sm:p-6">
            {/* profile photo upload */}

            <div>
              <ProfilePic />
            </div>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="job-title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job title
                </label>
                <input
                  type="text"
                  name="job-title"
                  id="job_title"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Skills
                </label>
                <Skills_input />
              </div>
              <div className="col-span-6 ">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium my-3 text-gray-700"
                >
                  Social links
                </label>
                <div>
                  <PopoverForm
                    socialLinks={socialLinks}
                    setSocialLinks={setSocialLinks}
                  />
                </div>
                {socialLinks ? (
                  <div>
                    <SocialComp
                      links={socialLinks}
                      setSocialLinks={setSocialLinks}
                    />
                  </div>
                ) : null}
                <div></div>
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="summary"
                  className="block text-sm font-medium text-gray-700 py-3"
                >
                  Profile summary
                </label>
                <div className="">
                  <Editor />
                </div>
              </div>
              <div className="col-span-6">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-700 py-3"
                >
                  Projects you've done
                </label>
                <div>
                  <Projects_modal
                    projects={projects}
                    setProjects={setProjects}
                  />
                </div>
                {projects && (
                  <div>
                    <ProjectComp
                      projects={projects}
                      setProjects={setProjects}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            disabled={true}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </form>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
