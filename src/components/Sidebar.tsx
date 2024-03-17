import { FiMessageSquare } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import UserCard from "./UserCard";



const Sidebar = () => {
    const users=[
        {
            id:1,
            name:"karan singh"
        },
        {
            id:2,
            name:"kanak dwivedi"
        },
        {
            id:3,
            name:"arya upadhyay"
        },
        {
            id:4,
            name:"himanshu"
        },
        {
            id:5,
            name:"harsh raj"
        }
    ]


  return (
    <div className="bg-cyan-50 h-full"> 
        <div className="flex justify-between items-center p-5 text-2xl shadow-lg bg-white">
            <FiMessageSquare className="text-pink-600"/>
            <IoCallOutline />
            <CiMail />
            <FaUserGroup />
            <FaRegUserCircle />
        </div>
        <div className="flex justify-between items-center p-6 text-3xl font-semibold">
            <h1 className="text-3xl">Chats</h1>
            <IoIosAddCircle className="text-pink-600" />
        </div>
        <div className="flex px-5 gap-7 items-center font-medium text-slate-600">
            <h1 className="text-black">Direct</h1>
            <h1>Groups</h1>
            <h1>Public</h1>
        </div>
        <input type="text" placeholder="Search" className="shadow-md min-w-max mx-6 outline-none rounded-3xl px-3 py-1 font-light"/>
        <div>
            {users.map(user=>{
                return <UserCard key={user.id} name={user.name} />
            })}
        </div>
    </div>
  )
}

export default Sidebar