
type userCardProp = {
  id: number;
  name: string;
  active: boolean;
  recentMessage: boolean;
};

const UserCard = (props: userCardProp) => {
  return (
    <div
      className={`${
        props.active ? "bg-[#30323F] text-white" : ""
      } flex m-2 shadow-md items-center p-1 rounded-md`}
    >
      <div className="text-slate-500 text-2xl mx-3 my-1  h-12 w-12 flex items-center justify-center">
        <img src={`/profile/pic${props.id}.jpg`} alt="" className="rounded-full h-full w-full object-cover"/>
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <h1 className="font-bold text-md">{props.name}</h1>
          <p
            className={`${
              props.active ? "text-white" : "text-gray-700"
            } text-xs font-medium `}
          >
            3:14
          </p>
        </div>
        <div className="flex justify-between mr-3">
          <h3
            className={`${props.active ? "text-white" : "text-gray-600"} ${
              props.recentMessage ? "font-semibold" : ""
            } text-xs`}
          >
            recent text message!!!
          </h3>
          {props.recentMessage && (
            <span className="w-4 h-4 text-white rounded-full text-xs flex justify-center items-center bg-gradient-to-r from-[#7951F3] to-[#B04FEF]">
              1
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
