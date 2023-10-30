<template>
  <section class="h-[200vh] w-screen bg-sky-100">
    <the-header></the-header>
    <main class="flex flex-col gap-6 pt-10">
      <h2 class="text-2xl font-vazirmtn text-gray-800 text- pl-10 font-bold">
        What do you want <br />
        to learn today?
      </h2>
      <div class="flex items-center justify-between px-10">
        <h3 class="text-lg font-bold text-gray-800 font-vazirmtn">
          Categories
        </h3>
        <button
          class="text-sm p-1 font-vazirmtn font-semibold underline rounded-full hover:font-bold active:font-semibold"
        >
          view all
        </button>
      </div>
      <ul class="snap-x flex items-center px-10 pb-3 gap-4 overflow-y-auto">
        <li>
          <button
            class="text-sm font-vazirmtn font-bold bg-blue-200 hover:bg-blue-300 active:bg-blue-400 transform-color duration-200 px-5 py-2 rounded-full"
          >
            Design
          </button>
        </li>
        <li>
          <button
            class="text-sm font-vazirmtn font-bold bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-400 transform-color duration-200 px-5 py-2 rounded-full"
          >
            Marketing
          </button>
        </li>
        <li>
          <button
            class="text-sm font-vazirmtn font-bold bg-blue-200 hover:bg-blue-300 active:bg-blue-400 transform-color duration-200 px-5 py-2 rounded-full"
          >
            Finance
          </button>
        </li>
        <li>
          <button
            class="text-sm font-vazirmtn font-bold bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-400 transform-color duration-200 px-5 py-2 rounded-full"
          >
            English
          </button>
        </li>
        <li>
          <button
            class="text-sm font-vazirmtn font-bold bg-blue-200 hover:bg-blue-300 active:bg-blue-400 transform-color duration-200 px-5 py-2 rounded-full"
          >
            Fashion
          </button>
        </li>
        <li>
          <button
            class="text-sm font-vazirmtn font-bold bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-400 transform-color duration-200 px-5 py-2 rounded-full"
          >
            Computer
          </button>
        </li>
      </ul>
      <div class="flex items-center justify-between px-10">
        <h3 class="font-vazirmtn text-lg font-bold text-gray-800">
          Populer Courses
        </h3>
        <button
          class="text-sm font-vazirmtn font-semibold underline hover:font-bold active:font-semibold"
        >
          view all
        </button>
      </div>
      <section class="flex gap-7 overflow-y-auto px-10">
        <div class="flex flex-col flex-wrap-1 shadow-xl mb-2 rounded-b-lg">
          <div
            class="p-8 max-w-[220px] max-h-[250px] bg-yellow-300 rounded-t-lg"
          >
            <data-sience></data-sience>
          </div>
          <div class="pt-4 p-2 flex flex-wrap max-w-[220px] flex-col gap-1">
            <h4 class="text-sm font-vazirmtn font-semibold text-gray-800">
              The Data Science Course
            </h4>
            <div class="flex flex-row items-center justify-between">
              <div class="flex items-center flex-grow justify-between">
                <div
                  class="flex font-vazirmtn items-center justify-between gap-1 text-[12px]"
                >
                  5k+ Reviews
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="bevel"
                    class="fill-yellow-400"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon>
                  </svg>
                  4.5
                </div>
                <p class="text-[14px] font-vazirmtn font-bold">$24.99</p>
              </div>
            </div>
            <button
              class="py-1 text-sm font-vazirmtn font-semibold px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 active:rounded-lg transform-color duration-200 flex-grow-0 text-white mt-4 rounded-lg mb-5"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div class="flex flex-col flex-wrap-1 shadow-xl mb-2 rounded-b-lg">
          <div
            class="p-8 max-w-[220px] max-h-[250px] bg-green-400 rounded-t-lg"
          >
            <painting-course></painting-course>
          </div>
          <div class="pt-4 p-2 flex flex-wrap max-w-[220px] flex-col gap-1">
            <h4 class="font-vazirmtn text-sm font-semibold">
              The Paiting Course
            </h4>
            <div class="flex flex-row items-center justify-between">
              <div class="flex items-center flex-grow justify-between">
                <div
                  class="flex font-vazirmtn items-center justify-between gap-1 text-[12px]"
                >
                  9k+ Reviews
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="bevel"
                    class="fill-yellow-400"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon>
                  </svg>
                  4.9
                </div>
                <p class="text-[14px] font-vazirmtn font-bold">$99.99</p>
              </div>
            </div>
            <button
              class="py-1 text-sm font-vazirmtn font-semibold px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 active:rounded-lg transform-color duration-200 flex-grow-0 text-white mt-4 rounded-lg mb-5"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div class="flex flex-col flex-wrap-1 shadow-xl mb-2 rounded-b-lg">
          <div
            class="p-8 max-w-[220px] max-h-[250px] bg-orange-400 rounded-t-lg"
          >
            <html-course></html-course>
          </div>
          <div class="pt-4 p-2 flex flex-wrap max-w-[220px] flex-col gap-1">
            <h4 class="text-sm font-vazirmtn font-semibold">
              HTML & CSS Full Course
            </h4>
            <div class="flex flex-row items-center justify-between">
              <div class="flex items-center flex-grow justify-between">
                <div
                  class="flex font-vazirmtn items-center justify-between gap-1 text-[12px]"
                >
                  7k+ Reviews
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="bevel"
                    class="fill-yellow-400"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon>
                  </svg>
                  4.1
                </div>
                <p class="text-[14px] font-vazirmtn font-bold">$56.99</p>
              </div>
            </div>
            <button
              class="py-1 text-sm font-vazirmtn font-semibold px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 active:rounded-lg transform-color duration-200 flex-grow-0 text-white mt-4 rounded-lg mb-5"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div class="flex flex-col flex-wrap-1 shadow-xl mb-2 rounded-b-lg">
          <div
            class="p-8 max-w-[220px] max-h-[250px] bg-yellow-300 rounded-t-lg"
          >
            <guitar-course></guitar-course>
          </div>
          <div class="pt-4 p-2 flex flex-wrap max-w-[220px] flex-col gap-1">
            <h4 class="text-sm font-vazirmtn font-semibold">
              Guitar fot beginer
            </h4>
            <div class="flex flex-row items-center justify-between">
              <div class="flex items-center flex-grow justify-between">
                <div
                  class="flex font-vazirmtn items-center justify-between gap-1 text-[12px]"
                >
                  10k+ Reviews
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="bevel"
                    class="fill-yellow-400"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon>
                  </svg>
                  4.8
                </div>
                <p class="text-[14px] font-vazirmtn font-bold">$124.99</p>
              </div>
            </div>
            <button
              class="py-1 text-sm font-vazirmtn font-semibold px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 active:rounded-lg transform-color duration-200 flex-grow-0 text-white mt-4 rounded-lg mb-5"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </section>
      <div class="flex items-center justify-between px-10">
        <h3 class="text-lg font-vazirmtn font-bold text-gray-800">
          Most seen courses
        </h3>
        <button
          class="text-sm font-vazirmtn font-semibold underline hover:font-bold active:font-semibold"
        >
          view all
        </button>
      </div>
      <section class="flex gap-7 overflow-y-auto px-10">
        <div class="flex flex-col flex-wrap-1 shadow-xl mb-2 rounded-b-lg">
          <div
            class="p-8 max-w-[220px] max-h-[250px] bg-orange-400 rounded-t-lg"
          >
            <html-course></html-course>
          </div>
          <div class="pt-4 p-2 flex flex-wrap max-w-[220px] flex-col gap-1">
            <h4 class="text-sm font-vazirmtn font-semibold">
              HTML & CSS Full Course
            </h4>
            <div class="flex flex-row items-center justify-between">
              <div class="flex items-center flex-grow justify-between">
                <div
                  class="flex font-vazirmtn items-center justify-between gap-1 text-[12px]"
                >
                  7k+ Reviews
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="bevel"
                    class="fill-yellow-400"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon>
                  </svg>
                  4.1
                </div>
                <p class="text-[14px] font-vazirmtn font-bold">$56.99</p>
              </div>
            </div>
            <button
              class="py-1 text-sm font-vazirmtn font-semibold px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 active:rounded-lg transform-color duration-200 flex-grow-0 text-white mt-4 rounded-lg mb-5"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div class="flex flex-col flex-wrap-1 shadow-xl mb-2 rounded-b-lg">
          <div
            class="p-8 max-w-[220px] max-h-[250px] bg-yellow-300 rounded-t-lg"
          >
            <data-sience></data-sience>
          </div>
          <div class="pt-4 p-2 flex flex-wrap max-w-[220px] flex-col gap-1">
            <h4 class="text-sm font-vazirmtn font-semibold text-gray-800">
              The Data Science Course
            </h4>
            <div class="flex flex-row items-center justify-between">
              <div class="flex items-center flex-grow justify-between">
                <div
                  class="flex font-vazirmtn items-center justify-between gap-1 text-[12px]"
                >
                  5k+ Reviews
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="bevel"
                    class="fill-yellow-400"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon>
                  </svg>
                  4.5
                </div>
                <p class="text-[14px] font-vazirmtn font-bold">$24.99</p>
              </div>
            </div>
            <button
              class="py-1 text-sm font-vazirmtn font-semibold px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 active:rounded-lg transform-color duration-200 flex-grow-0 text-white mt-4 rounded-lg mb-5"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div class="flex flex-col flex-wrap-1 shadow-xl mb-2 rounded-b-lg">
          <div
            class="p-8 max-w-[220px] max-h-[250px] bg-green-400 rounded-t-lg"
          >
            <painting-course></painting-course>
          </div>
          <div class="pt-4 p-2 flex flex-wrap max-w-[220px] flex-col gap-1">
            <h4 class="text-sm font-vazirmtn font-semibold">
              The Paiting Course
            </h4>
            <div class="flex flex-row items-center justify-between">
              <div class="flex items-center flex-grow justify-between">
                <div
                  class="flex font-vazirmtn items-center justify-between gap-1 text-[12px]"
                >
                  9k+ Reviews
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="bevel"
                    class="fill-yellow-400"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon>
                  </svg>
                  4.9
                </div>
                <p class="text-[14px] font-vazirmtn font-bold">$99.99</p>
              </div>
            </div>
            <button
              class="py-1 text-sm font-vazirmtn font-semibold px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 active:rounded-lg transform-color duration-200 flex-grow-0 text-white mt-4 rounded-lg mb-5"
            >
              Enroll Now
            </button>
          </div>
        </div>

        <div class="flex flex-col flex-wrap-1 shadow-xl mb-2 rounded-b-lg">
          <div
            class="p-8 max-w-[220px] max-h-[250px] bg-yellow-300 rounded-t-lg"
          >
            <guitar-course></guitar-course>
          </div>
          <div class="pt-4 p-2 flex flex-wrap max-w-[220px] flex-col gap-1">
            <h4 class="text-sm font-vazirmtn font-semibold">
              Guitar fot beginer
            </h4>
            <div class="flex flex-row items-center justify-between">
              <div class="flex items-center flex-grow justify-between">
                <div
                  class="flex font-vazirmtn items-center justify-between gap-1 text-[12px]"
                >
                  10k+ Reviews
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="bevel"
                    class="fill-yellow-400"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon>
                  </svg>
                  4.8
                </div>
                <p class="text-[14px] font-vazirmtn font-bold">$124.99</p>
              </div>
            </div>
            <button
              class="py-1 text-sm font-vazirmtn font-semibold px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 active:rounded-lg transform-color duration-200 flex-grow-0 text-white mt-4 rounded-lg mb-5"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </section>
      <div class="flex items-center justify-between px-10">
        <h3 class="text-lg font-bold font-vazirmtn text-gray-800">
          New courses
        </h3>
        <button
          class="text-sm font-semibold font-vazirmtn underline hover:font-bold active:font-semibold"
        >
          view all
        </button>
      </div>
      <section class="flex gap-7 overflow-y-auto px-10">
        <div class="flex flex-col flex-wrap-1 shadow-xl mb-2 rounded-b-lg">
          <div
            class="p-8 max-w-[220px] max-h-[250px] bg-yellow-300 rounded-t-lg"
          >
            <guitar-course></guitar-course>
          </div>
          <div class="pt-4 p-2 flex flex-wrap max-w-[220px] flex-col gap-1">
            <h4 class="text-sm font-vazirmtn font-semibold">
              Guitar fot beginer
            </h4>
            <div class="flex flex-row items-center justify-between">
              <div class="flex items-center flex-grow justify-between">
                <div
                  class="flex font-vazirmtn items-center justify-between gap-1 text-[12px]"
                >
                  10k+ Reviews
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="bevel"
                    class="fill-yellow-400"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon>
                  </svg>
                  4.8
                </div>
                <p class="text-[14px] font-vazirmtn font-bold">$124.99</p>
              </div>
            </div>
            <button
              class="py-1 text-sm font-vazirmtn font-semibold px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 active:rounded-lg transform-color duration-200 flex-grow-0 text-white mt-4 rounded-lg mb-5"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div class="flex flex-col flex-wrap-1 shadow-xl mb-2 rounded-b-lg">
          <div
            class="p-8 max-w-[220px] max-h-[250px] bg-orange-400 rounded-t-lg"
          >
            <html-course></html-course>
          </div>
          <div class="pt-4 p-2 flex flex-wrap max-w-[220px] flex-col gap-1">
            <h4 class="text-sm font-vazirmtn font-semibold">
              HTML & CSS Full Course
            </h4>
            <div class="flex flex-row items-center justify-between">
              <div class="flex items-center flex-grow justify-between">
                <div
                  class="flex font-vazirmtn items-center justify-between gap-1 text-[12px]"
                >
                  7k+ Reviews
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="bevel"
                    class="fill-yellow-400"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon>
                  </svg>
                  4.1
                </div>
                <p class="text-[14px] font-vazirmtn font-bold">$56.99</p>
              </div>
            </div>
            <button
              class="py-1 text-sm font-vazirmtn font-semibold px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 active:rounded-lg transform-color duration-200 flex-grow-0 text-white mt-4 rounded-lg mb-5"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div class="flex flex-col flex-wrap-1 shadow-xl mb-2 rounded-b-lg">
          <div
            class="p-8 max-w-[220px] max-h-[250px] bg-yellow-300 rounded-t-lg"
          >
            <data-sience></data-sience>
          </div>
          <div class="pt-4 p-2 flex flex-wrap max-w-[220px] flex-col gap-1">
            <h4 class="text-sm font-vazirmtn font-semibold text-gray-800">
              The Data Science Course
            </h4>
            <div class="flex flex-row items-center justify-between">
              <div class="flex items-center flex-grow justify-between">
                <div
                  class="flex font-vazirmtn items-center justify-between gap-1 text-[12px]"
                >
                  5k+ Reviews
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="bevel"
                    class="fill-yellow-400"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon>
                  </svg>
                  4.5
                </div>
                <p class="text-[14px] font-vazirmtn font-bold">$24.99</p>
              </div>
            </div>
            <button
              class="py-1 text-sm font-vazirmtn font-semibold px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 active:rounded-lg transform-color duration-200 flex-grow-0 text-white mt-4 rounded-lg mb-5"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div class="flex flex-col flex-wrap-1 shadow-xl mb-2 rounded-b-lg">
          <div
            class="p-8 max-w-[220px] max-h-[250px] bg-green-400 rounded-t-lg"
          >
            <painting-course></painting-course>
          </div>
          <div class="pt-4 p-2 flex flex-wrap max-w-[220px] flex-col gap-1">
            <h4 class="text-sm font-vazirmtn font-semibold">
              The Paiting Course
            </h4>
            <div class="flex flex-row items-center justify-between">
              <div class="flex items-center flex-grow justify-between">
                <div
                  class="flex font-vazirmtn items-center justify-between gap-1 text-[12px]"
                >
                  9k+ Reviews
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="bevel"
                    class="fill-yellow-400"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon>
                  </svg>
                  4.9
                </div>
                <p class="text-[14px] font-vazirmtn font-bold">$99.99</p>
              </div>
            </div>
            <button
              class="py-1 text-sm font-vazirmtn font-semibold px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-600 active:rounded-lg transform-color duration-200 flex-grow-0 text-white mt-4 rounded-lg mb-5"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </section>
    </main>
  </section>
  <the-footer></the-footer>
</template>

<script>
import DataSience from "../UI/imgs/DataSience.vue";
import TheHeader from "../UI/TheHeader.vue";
import PaintingCourse from "../UI/imgs/PaintingCourse.vue";
import HtmlCourse from "../UI/imgs/HtmlCourse.vue";
import GuitarCourse from "../UI/imgs/GuitarCourse.vue";
export default {
  components: {
    DataSience,
    TheHeader,
    PaintingCourse,
    HtmlCourse,
    GuitarCourse,
  },
};
</script>
