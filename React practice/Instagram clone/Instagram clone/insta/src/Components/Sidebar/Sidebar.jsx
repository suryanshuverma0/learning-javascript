import { FaHome, FaSearch , FaUserCircle } from "react-icons/fa";
import { FiCompass } from 'react-icons/fi';
import { IoCameraOutline,IoChatbubblesOutline ,IoNotificationsOutline,IoMenuOutline } from 'react-icons/io5';
import { BiAddToQueue } from 'react-icons/bi';


function Sidebar() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-start">
        <div className="px-4">
          <h1 className="heading font-serif text-3xl py-5  mt-5 ml-3 ">
            Instagram
          </h1>
        </div>

        <div className="flex flex-col gap-10 text-2xl mt-5 px-9">
          <div className="flex flex-row gap-5">
            <FaHome className="text-3xl" />
            <button className="">Home</button>
          </div>

          <div className="flex flex-row gap-5">
            <FaSearch className="text-3xl" />
            <button className="">Search</button>
          </div>

          <div className="flex flex-row gap-5">
            <FiCompass className="text-3xl" />
            <button className="">Explore</button>
          </div>

          <div className="flex flex-row gap-5">
            <IoCameraOutline className="text-3xl" />
            <button className="">Reels</button>
          </div>

          <div className="flex flex-row gap-5">
            <IoChatbubblesOutline className="text-3xl" />
            <button className="">Messages</button>
          </div>

          <div className="flex flex-row gap-5">
            <IoNotificationsOutline className="text-3xl" />
            <button className="">Notification</button>
          </div>

          <div className="flex flex-row gap-5">
            <BiAddToQueue className="text-3xl" />
            <button className="">Create</button>
          </div>

          <div className="flex flex-row gap-5">
            <FaUserCircle className="text-3xl" />
            <button className="">Profile</button>
          </div>

          <div className="flex flex-row gap-5">
            <IoMenuOutline className="text-4xl mt-12" />
            <button className="mt-12">More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
