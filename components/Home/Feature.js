import React from "react";
import ContentLoader from "react-content-loader";

const Feature = () => {
  const freeDelivery = false;
  const live247 = false;

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row ">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 uppercase">
            Store_name
          </h1>
          <p className="text-base leading-relaxed lg:w-3/4 mx-auto">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug.
          </p>
        </div>

        <div className="flex flex-col flex-wrap w-full lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {freeDelivery ? (
            <div className="p-2 w-full sm:w-1/2">
              <div className="bg-green-50 text-green-600 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Authentic Cliche Forage
                </span>
              </div>
            </div>
          ) : (
            <ContentLoader className="w-full lg:w-1/2" height={116}>
              <rect x="37" y="34" rx="0" ry="0" width="0" height="0" />
              <rect x="28" y="29" rx="0" ry="0" width="200" height="32" />
              <rect x="28" y="71" rx="0" ry="0" width="465" height="32" />
              <rect x="434" y="94" rx="0" ry="0" width="0" height="0" />
              <rect x="29" y="116" rx="0" ry="0" width="749" height="32" />
            </ContentLoader>
          )}

          {live247 ? (
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-green-50 text-green-600 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Authentic Cliche Forage
                </span>
              </div>
            </div>
          ) : (
            <ContentLoader className="w-full lg:w-1/2" height={116}>
              <rect x="37" y="34" rx="0" ry="0" width="0" height="0" />
              <rect x="28" y="29" rx="0" ry="0" width="200" height="32" />
              <rect x="28" y="71" rx="0" ry="0" width="465" height="32" />
              <rect x="434" y="94" rx="0" ry="0" width="0" height="0" />
              <rect x="29" y="116" rx="0" ry="0" width="749" height="32" />
            </ContentLoader>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feature;
