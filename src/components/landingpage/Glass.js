import React from "react";

function Glass() {
  return (
    <div
      style={{
        backgroundImage:
          "url(" + "https://lucidcms.imgix.net/glass_section.jpg" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // minHeight: "700px",
      }}
    >
      <div
        className="flex flex-row justify-center items-center min-h-screen bg-app bg-center bg-no-repeat bg-cover"
        style={{
          minHeight: "80vh",
        }}
      >
        <main className="flex flex-col lg:flex-row bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden w-full max-w-5xl shadow-lg m-4 lg:m-6">
          <div className="flex-1 p-4 lg:p-6">
            <div className="text-lg text-white mb-8 flex items-center">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="ml-4 text-2xl font-semibold">
                <span>How it works</span>
              </div>
            </div>
            <div className="grid grid-rows-4 grid-cols-1 gap-4 md:grid-rows-2 md:grid-cols-2">
              <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                <div className="text-white absolute right-2">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    viewBox="0 0 231.087 231.087"
                    enableBackground="new 0 0 231.087 231.087"
                  >
                    <g>
                      <path d="m230.042,142.627c-1.871-2.744-5.612-3.452-8.355-1.581l-65.513,44.667-14.55-19.473c-1.526-2.036-4.241-2.977-6.788-2.129-3.185,1.06-4.908,4.501-3.848,7.686l11.908,35.785c0.45,1.33 1.184,2.645 2.18,3.757 3.94,4.401 10.702,4.776 15.104,0.836l.777-.695 68.129-60.985c2.216-1.981 2.676-5.346 0.956-7.868z" />
                      <path d="m120.211,190.676h-108.211v-162.49h158.43v124.823c0,3.313 2.687,6 6,6s6-2.687 6-6v-130.823c0-3.313-2.687-6-6-6h-170.43c-3.313,0-6,2.687-6,6v174.49c0,3.313 2.687,6 6,6h114.211c3.313,0 6-2.687 6-6 0-3.314-2.687-6-6-6z" />
                      <path d="m139.694,53.855h-96.959c-3.313,0-6,2.687-6,6s2.687,6 6,6h96.959c3.313,0 6-2.687 6-6s-2.686-6-6-6z" />
                      <path d="m139.694,79.79h-96.959c-3.313,0-6,2.687-6,6s2.687,6 6,6h96.959c3.313,0 6-2.687 6-6s-2.686-6-6-6z" />
                      <path d="m139.694,105.725h-96.959c-3.313,0-6,2.687-6,6s2.687,6 6,6h96.959c3.313,0 6-2.687 6-6s-2.686-6-6-6z" />
                      <path d="m145.694,137.659c0-3.313-2.687-6-6-6h-96.959c-3.313,0-6,2.687-6,6s2.687,6 6,6h96.959c3.314,0 6-2.686 6-6z" />
                      <path d="M42.735,156.329c-3.313,0-6,2.687-6,6s2.687,6,6,6h48.479c3.313,0,6-2.687,6-6s-2.687-6-6-6H42.735z" />
                    </g>
                  </svg>
                </div>
                <div className="text-white text-lg font-medium mb-2 mt-4">
                  Create a project
                </div>
                <div className="text-white font-normal">
                  Visual page, graphic pages, colors, button positions and
                  interfaces Required skills are HTML ,CSS , JAVASCRIPT.
                </div>
              </div>
              <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                <div className="text-white absolute right-2">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                    />
                  </svg>
                </div>
                <div className="text-white text-lg font-medium mb-2 mt-4">
                  Create a model
                </div>
                <div className="text-white font-normal">
                  Writing the actual code for the site, as it controls
                  everything that happens behind the scenes of the site.
                </div>
              </div>
              <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                <div className="text-white absolute right-2">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>{" "}
                </div>
                <div className="text-white text-lg font-medium mb-2 mt-4">
                  Add fields to your model
                </div>
                <div className="text-white font-normal">
                  He works on designing interfaces and writing code in the
                  background. He has all the skills for both sides.
                </div>
              </div>
              <div className="rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-4 flex flex-col relative undefined">
                <div className="text-white absolute right-2">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div className="text-white text-lg font-medium mb-2 mt-4">
                  Add your content
                </div>
                <div className="text-white font-normal">
                  It is the design of the website interface and all its contents
                  before starting programming and development.
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Glass;
