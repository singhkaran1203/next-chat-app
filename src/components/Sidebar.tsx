import { FiMessageSquare } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import UserCard from "./UserCard";

const Sidebar = () => {
  const users = [
    {
      id: 1,
      name: "karan singh",
      active: true,
      recentMessage:false
    },
    {
      id: 2,
      name: "kanak dwivedi",
      active: false,
      recentMessage:true
    },
    {
      id: 3,
      name: "arya upadhyay",
      active: false,
      recentMessage:true,
    },
    {
      id: 4,
      name: "himanshu",
      active: false,
      recentMessage:false
    },
    {
      id: 5,
      name: "harsh raj",
      active: false,
      recentMessage:false
    },
  ];

  return (
    <div className="bg-[#FAFBFD] h-full">
      <div className="flex justify-between items-center p-5 text-2xl shadow-md bg-white">
        <div className="relative">
          <FiMessageSquare className="text-[#7951F3]" />
          <div className="text-xs text-white bg-[#D27179] absolute right-[-5px] top-[-5px] w-[15px] h-[15px] flex justify-center items-center rounded-full">
            2
          </div>
        </div>
        <IoCallOutline />
        <div className="relative">
          <CiMail />
          <div className="text-xs text-white bg-[#D27179] absolute right-[-5px] top-[-5px] w-[15px] h-[15px] flex justify-center items-center rounded-full">
            1
          </div>
        </div>
        <FaUserGroup />
        <FaRegUserCircle />
      </div>
      <div className="flex justify-between items-center p-6 text-3xl font-semibold">
        <h1 className="text-3xl">Chats</h1>
        <IoIosAddCircle className="text-[#7951F3]" />
      </div>
      <div className="flex px-5 gap-7 items-center font-medium text-slate-600">
        <h1 className="text-black">Direct</h1>
        <h1>Groups</h1>
        <h1>Public</h1>
      </div>
      <div className="relative mx-6 my-2">
        <input
          type="text"
          placeholder="Search"
          className="shadow-md min-w-max outline-none rounded-3xl px-3 py-1 pl-8 font-light"
        />
        <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div>
        {users.map((user) => {
          return (
            <UserCard key={user.id} id={user.id} name={user.name} active={user.active} recentMessage={user.recentMessage } />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
