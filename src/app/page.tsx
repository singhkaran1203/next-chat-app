import ChatPage from "@/components/ChatPage";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-full">
      <div className="hidden md:block basis-1/3">
        <Sidebar />
      </div>
      <div className="w-full md:basis-2/3">
        <ChatPage/>
      </div>
    </div>
  );
}
