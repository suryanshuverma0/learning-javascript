import Button from "./Button";
import Heading from "../Feed/Heading";
import suryanshu1 from "../../assets/suryanshu.jpg";
import suryanshu2 from "../../assets/suryanshu2.jpg";
import suryanshu3 from "../../assets/bg1.png";
import suryanshu4 from "../../assets/chintu.jpg";
import suryanshu5 from "../../assets/bg-3.avif";
function User() {
  return (
    <>
      <div>
        <div className="flex flex-row gap-2 justify-around items-center m-12">
          <div>
            <Heading
              username="suryanshu_0"
              label="Suryanshu Verma"
              image={suryanshu1}
            />
          </div>
          <div>
            <Button text="Switch" />
          </div>
        </div>

        <div className="flex flex-row gap-3 justify-around items-center">
          <div>
            <p className="text text-slate-200">Suggested for you</p>
          </div>
          <div>
            <button className="bg-transparent text-white hover:text-gray-500">
              See All
            </button>
          </div>
        </div>

        <div>
          <div className="flex flex-row gap-4 justify-around items-center m-12">
            <div>
              <Heading
                username="roman_69"
                label="Roman Humagain"
                image={suryanshu3}
              />
            </div>
            <div>
              <Button text="Follow" />
            </div>
          </div>

          <div className="flex flex-row gap- justify-around items-center m-12">
            <div>
              <Heading
                username="chintu_verma"
                label="Chintu Verma"
                image={suryanshu2}
              />
            </div>
            <div>
              <Button text="Follow" />
            </div>
          </div>

          <div className="flex flex-row gap-4 justify-around items-center m-12">
            <div>
              <Heading
                username="john_doe"
                label="John Doe"
                image={suryanshu5}
              />
            </div>
            <div>
              <Button text="Follow" />
            </div>
          </div>

          <div className="flex flex-row gap-4 justify-around items-center m-12">
            <div>
              <Heading
                username="suryanshu_verma"
                label="Suryanshu Verma"
                image={suryanshu4}
              />
            </div>
            <div>
              <Button text="Follow" />
            </div>
          </div>

          <div className="flex flex-row gap-4 justify-around items-center m-12">
            <div>
              <Heading
                username="surya_36"
                label="Surya Joshi"
                image={suryanshu3}
              />
            </div>
            <div>
              <Button text="Follow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
