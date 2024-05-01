import { FaCalendarAlt } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";

const EventsBar = () => {
  return (
    <aside className="float-right border bg-white w-full rounded-lg relative flex flex-row pl-8 pr-8 pt-8 md:h-1/2 md:max-w-[20rem] md:flex-col md:mr-2">
      <div className="w-1/2 pr-8 md:pr-0 md:w-full">
        <h2 className="border-b-2 pb-2 flex flex-row items-center text-xs md:text-base">
          <span className="text-[#134467] pr-2">
            <FaCalendarAlt />
          </span>
          Upcoming Events
        </h2>
        <ul className="pt-2 text-[#299DCF] mb-5 list-disc pl-5 hover:cursor-pointer text-xs md:text-base">
          <li className="pt-1 pb-1">Web Sig part 2</li>
          <li className="pt-1 pb-1">Figma SIG</li>
        </ul>
      </div>
      <div className="w-1/2 md:w-full">
        <h2 className="border-b-2 pb-2 flex flex-row items-center text-xs md:text-base">
          <span className="text-[#134467] pr-2">
            <FaFireAlt />
          </span>
          Latest News
        </h2>
        <ul className="pt-2 text-[#299DCF] mb-5 list-disc pl-5 hover:cursor-pointer text-xs md:text-base">
          <li className="pt-1 pb-1">New Council Announced</li>
          <li className="pt-1 pb-1">Alumni version 1 release</li>
          <li className="pt-1 pb-1">Blog website work started</li>
        </ul>
      </div>
    </aside>
  );
};

export default EventsBar;
