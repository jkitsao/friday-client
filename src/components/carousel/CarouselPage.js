import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselInfo from "../landingpage/CarouselInfo";
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
function CarouselPage() {
  return (
    <section className="xl:w-2/3 mx-auto rounded shadow-lg bg-gray-100">
      <div>
        <Carousel>
          <div>
            <div className=" h-32 flex items-center justify-center bg-gray-700">
              <p className="text-xl font-semibold text-white">Legend 1</p>
            </div>
            <img
              src={projectImage}
              className="object-cover"
              style={{
                maxHeight: "700px",
              }}
            />
          </div>
          <div>
            <img
              src={modelsImage}
              className="object-cover"
              style={{
                maxHeight: "700px",
              }}
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img
              src={fieldsImage}
              className="object-cover"
              style={{
                maxHeight: "700px",
              }}
            />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img
              src={contentImage}
              className="object-cover"
              style={{
                maxHeight: "700px",
              }}
            />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img
              src={apiImage}
              className="object-cover"
              style={{
                maxHeight: "700px",
              }}
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default CarouselPage;
