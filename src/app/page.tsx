import {
  IconBriefcase,
  IconBulb,
  IconChevronDown,
  IconCopy,
  IconDeviceSpeaker,
  IconHeart,
  IconLanguage,
  IconLink,
  IconMicrophone,
  IconMoodSmile,
  IconMoodSmileDizzy,
  IconPaperclip,
  IconSchool,
  IconSearch,
  IconStar,
  IconThumbDown,
  IconThumbUp,
  IconVolume,
  IconWriting,
} from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="relative overflow-hidden h-screen ">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-neutral-200">
              Lingua<span className="text-[#f87315]">Speak</span>
            </h1>

            <p className="mt-3 text-gray-600 dark:text-neutral-400">
              LinguaSpeak: Bridging Voices, Connecting Worlds.
            </p>

            <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <div className="relative z-10 flex flex-col space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                  <div className="flex-[1_0_0%] ">
                    <label className="block text-sm text-gray-700 font-medium dark:text-white">
                      <span className="sr-only">Source Language</span>
                    </label>
                    <textarea
                      rows={5}
                      name="hs-search-article-1"
                      id="hs-search-article-1"
                      className="py-2.5 px-4 border-none focus:outline-none block w-full border-transparent rounded-lg  dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 "
                      placeholder="Source Language"
                    />
                  </div>
                  <div className="">
                    <div className="flex flex-row justify-between w-full">
                      <span className="cursor-pointer flex space-x-2 flex-row">
                        <IconMicrophone size={22} className="text-gray-400" />
                        <IconVolume size={22} />
                        <IconPaperclip size={21} />
                        <IconLink size={21} />
                      </span>
                      <span className="text-sm">0 / 2000</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                  <div className="flex-[1_0_0%] ">
                    <label className="block text-sm text-gray-700 font-medium dark:text-white">
                      <span className="sr-only">Target Language</span>
                    </label>
                    <textarea
                      rows={5}
                      name="hs-search-article-1"
                      id="hs-search-article-1"
                      className="py-2.5 px-4 block w-full border-transparent rounded-lg  focus:outline-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 "
                      placeholder="Target Language"
                    />
                  </div>
                  <div className="">
                    <div className="flex flex-row justify-between w-full">
                      <span className="cursor-pointer flex items-center space-x-2 flex-row">
                        <span className="bg-[#000000] px-3 flex flex-row rounded-full py-1">
                          <IconLanguage size={22} />
                          <IconChevronDown size={21} />
                        </span>
                        <IconVolume size={22} />
                      </span>
                      <div className="flex flex-row space-x-2 cursor-pointer">
                        <IconCopy size={22} />
                        <IconThumbUp size={22} />
                        <IconThumbDown size={22} />
                        <IconStar size={22} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden z-[200] md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="round"
                  />
                </svg>
              </div>

              <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                <svg
                  className="w-40 h-auto text-cyan-500"
                  width="347"
                  height="188"
                  viewBox="0 0 347 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                    stroke="currentColor"
                    stroke-width="7"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-10 sm:mt-20">
              <a
                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                href="#"
              >
                <IconBriefcase size={20} />
                Business
              </a>
              <a
                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                href="#"
              >
                <IconSchool size={20} />
                Education{" "}
              </a>
              <a
                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                href="#"
              >
                <IconHeart size={20} />
                Health
              </a>
              <a
                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                href="#"
              >
                <IconBulb size={20} />
                Creative
              </a>
              <a
                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                href="#"
              >
                <IconWriting size={20} />
                Journeling
              </a>
              <a
                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                href="#"
              >
                <IconMoodSmile size={20} />
                Communication
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
