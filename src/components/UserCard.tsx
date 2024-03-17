import { FaRegUser } from "react-icons/fa";

type userCardProp = {
  name: string;
};

const UserCard = (props: userCardProp) => {
  return (
    <div className="flex m-2 shadow-lg items-center p-1 rounded-md bg-white">
      <div className="text-slate-500 text-2xl p-3">
        <FaRegUser />
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <h1 className="font-bold text-md">{props.name}</h1>
          <p className="text-xs font-medium text-gray-700">3:14</p>
        </div>
        <h3 className="text-xs text-gray-600">recent text message!!!</h3>
      </div>
    </div>
  );
};

export default UserCard;
