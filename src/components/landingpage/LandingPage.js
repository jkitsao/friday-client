/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Head from "../seo/Head";
import Player from './Player'
// import Landing_Image from "./Landing_Image";
// import Landing_Text from "./Landing_Text";
// import CarouselPage from "../carousel/CarouselPage";
import Glass from "./Glass";
import "../../App.css";
const navigation = [];
const projectImage =
  "https://lucidcms.imgix.net/screely-1635156694087.png?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80";
const apiImage =
  "https://lucidcms.imgix.net/screely-1635157126513.png?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80";
const modelsImage =
  "https://lucidcms.imgix.net/models.png?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80";
const fieldsImage =
  "https://lucidcms.imgix.net/fields.png?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80";
const contentImage =
  "https://lucidcms.imgix.net/content.png?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80";

export default function LandingPage() {
  return (
    <div className="relative bg-white h-full">
      <Head
        title="lucidcms | simple headless cms"
        name="lucidcms"
        content="simple headless cms for side projects"
      />
      <div className="">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-5/6 mx-auto lg:pb-28 xl:pb-32">
          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="/" className="flex items-center">
                      <span className="sr-only">booo</span>
                      <img
                        className="h-8 w-auto sm:h-12 sm:-12 object-cover"
                        src={logo}
                      />
                      <span className="logo-text text-2xl">Lucidcms.co</span>
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                  <Link
                    to="/auth"
                    className="px-8 py-2 border border-transparent text-base font-medium rounded text-white bg-indigo-400 hover:bg-indigo-700 md:py-3 md:text-sm "
                  >
                    Sign in
                  </Link>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img className="h-8 w-auto" src={logo} alt="" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="/auth"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center ">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  Content management for
                  <br />
                </span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  your side projects
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto">
                A simple free to use headless content management system that
                acts as a content repository, makes content accessible via an
                API without a built-in front-end or presentation layer.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex justify-center ">
                <div className="rounded-md shadow">
                  <a
                    href="/projects"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Dashboard
                  </a>
                </div>
                {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div> */}
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* <Landing_Text />
      <Landing_Image image_src={projectImage} />
      <Landing_Text />
      <Landing_Image image_src={modelsImage} />
      <Landing_Text />
      <Landing_Image image_src={fieldsImage} />
      <Landing_Text />
      <Landing_Image image_src={contentImage} />
      <Landing_Text />
      <Landing_Image image_src={apiImage} /> */}
      {/* <CarouselPage /> */}
      {/* <Glass /> */}
      
      <div className='w-full flex justify-center'>
      <Player/>
      </div>

      <div className="mx-auto h-10 flex items-center justify-center  bg-gray-900 text-gray-200 sticky bottom-0 w-full rounded-t-sm opacity-95">
        <div className="text-center text-base">
          <span>made with &#10084;&#65039; by{""}</span>
          <a
            href="https://www.twitter.com/j_kitsao"
            target="_blank"
            className="text-yellow-400 hover:text-blue-400 transition-all duration-200 hover:bg-gray-800 px-1 py-1"
          >
            @Jacksonkitsao &#128513;
          </a>
        </div>
      </div>
    </div>
  );
}
