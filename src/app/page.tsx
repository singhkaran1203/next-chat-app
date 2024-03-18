import ChatPage from "@/components/ChatPage";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <div className="hidden md:block w-1/3">
          <Sidebar />
        </div>
        <div className="w-full md:w-2/3">
          <ChatPage/>
        </div>
      </div>
    </div>
  );
}
