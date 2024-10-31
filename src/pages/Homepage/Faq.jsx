
import { useState } from "react";
import rope1 from "../../assets/faq/Group 18.svg";
import rope2 from "../../assets/faq/Group 19.svg";
// import logo2 from "../../assets/fff3.svg";
import logo2 from "/feature51.svg";
// import logo2 from "/feature5.svg";
import { FaPlus, FaMinus } from "react-icons/fa6";
import FaqItem from "./FaqItem";

const faqData = [
  {
    question:
      "How can I assign jobs to employees or contractors using the app?",
    answer:
      "To assign jobs, simply navigate to the “Jobs” section of the app, select the task you want to assign, and choose the employee or contractor from your team. You can add any specific instructions or deadlines before sending the assignment.",
  },
  {
    question: "Can employees update the status of their tasks in real time?",
    answer:
      "Yes! Employees can update the status of their tasks to “In Progress” or “Completed” at any time. This allows everyone on the team to stay informed about the progress of each job in real time.",
  },
  {
    question: "Can I export completed projects to share with clients?",
    answer:
      "Yes, you can easily export completed projects and share them with clients. This feature allows you to provide detailed reports and documentation, ensuring clear communication and transparency regarding project outcomes.",
  },
  {
    question: "How can I upload photos or documents related to a job?",
    answer:
      "You can easily upload photos and documents by selecting the job and clicking on the “Upload” button. This feature allows you to showcase completed work or provide additional information as needed.",
  },
  {
    question:
      "Is there a limit to how many jobs or files I can track in the app?",
    answer:
      "No, there’s no limit! You can track as many jobs and upload as many files as you need. Our application is designed to provide you with unlimited storage for your projects and documentation.",
  },
  {
    question: "How many employees can I add to the app?",
    answer:
      "You can add as many employees as you like, as long as they are registered as users within the app. This allows you to build a fully equipped team for efficient project management.",
  },
];

const Faq = () => {

  return (
    <div
      style={{
        backgroundImage: `url(${logo2})`,
       
      }}
      className=" relative min-h-[700px] md:min-h-[1000px] h-auto   max-h-[1400px] bg-no-repeat bg-center bg-cover    mt-24 px-5 md:px-12 py-28 lg:py-40   lg:px-40 xl:px-60"
    >
       <div className=" w-full ">
        <h2 className="text-3xl font-bold text-center mb-4 lg:mb-8 mt-6 text-white">
          Frequently Asked Questions
        </h2>
        <div className=" space-y-[14px]  w-full md:space-y-5">
          {faqData?.map((faq, ind) => (
           
            <FaqItem  key={ind}  title={faq?.question} desc={faq?.answer} />
          ))}
        </div>
      </div>
   
      <img
        className="absolute  w-[130px] lg:w-auto top-[10px] lg:top-4 inline-block md:hidden lg:inline-block right-0 "
        src={rope1}
        alt=""
      />
      <img
        className="absolute z-0  w-[130px] lg:w-auto inline-block md:hidden lg:inline-block bottom-[-40px] lg:bottom-12 left-0 "
        src={rope2}
        alt=""
      />
    </div>
  );
};

export default Faq;
