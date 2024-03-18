import { FaRegUser } from "react-icons/fa";

type userCardProp = {
  name: string;
  active:boolean;
};

const UserCard = (props: userCardProp) => {
  return (
    <div className={`${props.active? "bg-[#30323F] text-white":"" } flex m-2 shadow-lg items-center p-1 rounded-md`}>
      <div className="text-slate-500 text-2xl p-3">
        <FaRegUser />
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <h1 className="font-bold text-md">{props.name}</h1>
          <p className={`${props.active?"text-white":"text-gray-700"} text-xs font-medium `}>3:14</p>
        </div>
        <h3 className={`${props.active?"text-white":"text-gray-600"} text-xs`}>recent text message!!!</h3>
      </div>
    </div>
  );
};

export default UserCard;
