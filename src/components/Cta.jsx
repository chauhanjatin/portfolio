import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <div className="mt-[100px]">
      <div className=" startConversation_img border-[10px] border-white rounded-[40px] p-[50px]">
        <div className="sm:flex grid items-center gap-[60px] justify-between">
          <h2 className="font-medium">
            Start a Conversation That <br /> Brings Ideas to Life
          </h2>
          <div >
            <Link to="/contactus" className="bg-[--primary-color] py-3 px-6 border-[--primary-color] border border-1 rounded-[40px] text-center inline-block transition-all duration-300 hover:bg-transparent hover:border-black">
              <h4 className="font-light text-nowrap">Say "Hello Jatin"</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}