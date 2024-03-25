import suryanshu1 from "../../assets/suryanshu.jpg";
import { MdMoreHoriz } from "react-icons/md";
import { FaShare, FaComment, FaSave, FaHeart } from "react-icons/fa";
import Heading from "./Heading";
function Post() {
  return (
    <>
      <div>
        <div>
          <div className="flex justify-center gap-80">
           <Heading username = "suryanshu_0" label = "Paid Partnership" image = {suryanshu1}/>
            <div className="pr-2">
              <MdMoreHoriz className="text-3xl" />
            </div>
          </div>

          <div className="w-96 h-96 flex justify-center items-center text-center mx-56 my-12">
            <img src={suryanshu1} className=" w-full h-full " />
          </div>
          <div className="flex flex-row justify-center gap-80">
            <div className="flex gap-6" >
              <button>
                <FaHeart className="text-2xl hover:bg-red-400" />
              </button>
              <button className="text-white border border-black">
                <FaComment className="text-2xl hover:bg-red-400" />
              </button>
              <button>
                <FaShare className="text-2xl hover:text-red-400" />
              </button>
            </div>
            <div>
              <button>
                <FaSave className="text-2xl hover:bg-red-400" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Post;
