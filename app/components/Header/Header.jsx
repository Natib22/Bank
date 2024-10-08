import React from "react";
import Image from "next/image";
import Messi from "@/app/assets/Header/MESSI.jpg";

const Header = () => {
  return (
    <div className="min-h-[101px] items-center h-auto w-full ">
      <div className="flex flex-wrap items-center max-mobile:justify-end mobile:justify-between  w-auto   py-5 tablet:px-9 ">
        <h1 className="desktop:text-[28px] mobile:text-xl tablet:text-2xl text-Dark-Slate-Blue leading-[34px]">
          Overview
        </h1>

        <div className="flex  justify-between items-center max-mobile:ml-24 w-[460px] max-mobile:w-12">
          <div className="flex max-mobile:hidden items-center justify-end bg-Very-Light-White rounded-3xl mobile:w-64 h-12 py-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3359 18.2109L14.7344 13.6094C15.875 12.2188 16.5625 10.4375 16.5625 8.49609C16.5625 4.04297 12.9492 0.429688 8.49609 0.429688C4.03906 0.429688 0.429688 4.04297 0.429688 8.49609C0.429688 12.9492 4.03906 16.5625 8.49609 16.5625C10.4375 16.5625 12.2148 15.8789 13.6055 14.7383L18.207 19.3359C18.5195 19.6484 19.0234 19.6484 19.3359 19.3359C19.6484 19.0273 19.6484 18.5195 19.3359 18.2109ZM8.49609 14.957C4.92969 14.957 2.03125 12.0586 2.03125 8.49609C2.03125 4.93359 4.92969 2.03125 8.49609 2.03125C12.0586 2.03125 14.9609 4.93359 14.9609 8.49609C14.9609 12.0586 12.0586 14.957 8.49609 14.957Z"
                fill="#718EBF"
              />
            </svg>

            <input
              type="text"
              placeholder="Search for something"
              className="bg-transparent ml-2 text-[#8BA3CB] text-sm"
            />
          </div>
          <span className=" flex max-mobile:hidden justify-center items-center bg-Very-Light-White rounded-3xl h-12 w-12">
            <svg
              width="25"
              height="25"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1588 7.53125H17.7342C17.5963 7.09961 17.4223 6.68031 17.2138 6.27746L17.5145 5.97676C18.2436 5.24844 18.2241 4.08125 17.5147 3.37266L16.6276 2.48555C15.9194 1.77645 14.752 1.7559 14.0235 2.48527L13.7225 2.78621C13.3197 2.57777 12.9004 2.40371 12.4688 2.26578V1.84113C12.4688 0.825937 11.6428 0 10.6276 0H9.37238C8.35719 0 7.53125 0.825937 7.53125 1.84113V2.26578C7.09965 2.40367 6.68031 2.57773 6.27746 2.78621L5.9768 2.48555C5.24973 1.75762 4.08234 1.77469 3.37273 2.48531L2.48551 3.37246C1.77645 4.08074 1.75594 5.24801 2.48527 5.97656L2.78621 6.2775C2.57773 6.68035 2.40371 7.09961 2.26578 7.53129H1.84117C0.825976 7.53125 0 8.35719 0 9.37238V10.6276C0 11.6428 0.825976 12.4688 1.84117 12.4688H2.26578C2.40371 12.9004 2.57773 13.3197 2.78621 13.7225L2.48551 14.0232C1.75641 14.7516 1.77594 15.9188 2.48527 16.6273L3.37242 17.5145C4.08059 18.2236 5.24801 18.2441 5.97652 17.5147L6.27746 17.2138C6.68031 17.4222 7.09965 17.5963 7.53125 17.7342V18.1589C7.53125 19.1741 8.35723 20 9.37242 20H10.6276C11.6428 20 12.4688 19.1741 12.4688 18.1589V17.7342C12.9004 17.5963 13.3197 17.4223 13.7226 17.2138L14.0232 17.5145C14.7503 18.2424 15.9177 18.2253 16.6273 17.5147L17.5145 16.6275C18.2236 15.9192 18.2441 14.752 17.5148 14.0234L17.2138 13.7225C17.4223 13.3196 17.5963 12.9004 17.7343 12.4687H18.1589C19.1741 12.4687 20 11.6427 20 10.6275V9.3723C20 8.35719 19.174 7.53125 18.1588 7.53125ZM10 14.3516C7.60051 14.3516 5.64844 12.3995 5.64844 10C5.64844 7.60055 7.60051 5.64844 10 5.64844C12.3995 5.64844 14.3516 7.60055 14.3516 10C14.3516 12.3995 12.3995 14.3516 10 14.3516Z"
                fill="#718EBF"
              />
            </svg>
          </span>

          <span className="flex max-mobile:hidden justify-center items-center bg-Very-Light-White rounded-3xl h-12 w-12">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.442 25C9.289 25 7.53577 23.2479 7.53577 21.0938C7.53577 20.6625 7.88577 20.3125 8.31702 20.3125C8.74827 20.3125 9.09827 20.6625 9.09827 21.0938C9.09827 22.3866 10.1504 23.4375 11.442 23.4375C12.7337 23.4375 13.7858 22.3866 13.7858 21.0938C13.7858 20.6625 14.1358 20.3125 14.567 20.3125C14.9983 20.3125 15.3483 20.6625 15.3483 21.0938C15.3483 23.2479 13.5952 25 11.442 25Z"
                fill="#FE5C73"
              />
              <path
                d="M20.0357 21.875H2.84824C1.84307 21.875 1.02539 21.0573 1.02539 20.0521C1.02539 19.5187 1.25771 19.0136 1.66283 18.6666C1.68896 18.6438 1.717 18.623 1.74618 18.6041C3.2753 17.2697 4.15039 15.35 4.15039 13.3228V10.4166C4.15039 6.39591 7.42226 3.125 11.442 3.125C11.6087 3.125 11.7889 3.12805 11.9556 3.15628C12.3816 3.22704 12.6692 3.63026 12.5982 4.05521C12.5275 4.48017 12.117 4.7678 11.6993 4.69685C11.6159 4.6833 11.5244 4.6875 11.442 4.6875C8.28381 4.6875 5.71289 7.25727 5.71289 10.4166V13.3228C5.71289 15.8396 4.60968 18.2209 2.68898 19.8551C2.67334 19.8677 2.6598 19.8792 2.64301 19.8906C2.61497 19.9261 2.58789 19.9802 2.58789 20.0521C2.58789 20.1937 2.70672 20.3125 2.84824 20.3125H20.0357C20.1775 20.3125 20.2963 20.1937 20.2963 20.0521C20.2963 19.9791 20.2692 19.9261 20.24 19.8906C20.2244 19.8792 20.2108 19.8677 20.1952 19.8551C18.2734 18.2198 17.1713 15.8396 17.1713 13.3228V12.1876C17.1713 11.7563 17.5213 11.4063 17.9525 11.4063C18.3838 11.4063 18.7338 11.7563 18.7338 12.1876V13.3228C18.7338 15.3511 19.6098 17.2718 21.1411 18.6073C21.1691 18.626 21.1962 18.6459 21.2212 18.6678C21.6265 19.0136 21.8588 19.5187 21.8588 20.0521C21.8588 21.0573 21.0411 21.875 20.0357 21.875Z"
                fill="#FE5C73"
              />
              <path
                d="M18.7338 10.4166C15.8619 10.4166 13.5254 8.08029 13.5254 5.2084C13.5254 2.3365 15.8619 0 18.7338 0C21.6057 0 23.942 2.3365 23.942 5.2084C23.942 8.08029 21.6057 10.4166 18.7338 10.4166ZM18.7338 1.5625C16.7233 1.5625 15.0879 3.19786 15.0879 5.2084C15.0879 7.21874 16.7233 8.8541 18.7338 8.8541C20.7441 8.8541 22.3795 7.21874 22.3795 5.2084C22.3795 3.19786 20.7441 1.5625 18.7338 1.5625Z"
                fill="#FE5C73"
              />
            </svg>
          </span>
          <span className="flex justify-center items-center bg-Very-Light-White rounded-3xl h-12 w-12">
            <Image
              src={Messi}
              alt="profile"
              className="rounded-3xl h-12 w-12 object-cover"
            />
          </span>
        </div>

        <div className="flex mobile:hidden mx-auto w-80 h-10 items-center mt-2 bg-Very-Light-White rounded-3xl  px-6 py-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3359 18.2109L14.7344 13.6094C15.875 12.2188 16.5625 10.4375 16.5625 8.49609C16.5625 4.04297 12.9492 0.429688 8.49609 0.429688C4.03906 0.429688 0.429688 4.04297 0.429688 8.49609C0.429688 12.9492 4.03906 16.5625 8.49609 16.5625C10.4375 16.5625 12.2148 15.8789 13.6055 14.7383L18.207 19.3359C18.5195 19.6484 19.0234 19.6484 19.3359 19.3359C19.6484 19.0273 19.6484 18.5195 19.3359 18.2109ZM8.49609 14.957C4.92969 14.957 2.03125 12.0586 2.03125 8.49609C2.03125 4.93359 4.92969 2.03125 8.49609 2.03125C12.0586 2.03125 14.9609 4.93359 14.9609 8.49609C14.9609 12.0586 12.0586 14.957 8.49609 14.957Z"
              fill="#718EBF"
            />
          </svg>

          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent  text-[#8BA3CB] text-sm "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
