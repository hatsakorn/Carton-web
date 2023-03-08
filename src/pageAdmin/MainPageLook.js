import { useState } from "react";
import { Link } from "react-router-dom";
import Carton from "../img/Carton_Logo.png";

export default function MainPageLook() {
  const [colorNav, setColorNav] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 900) {
      setColorNav(true);
    } else {
      setColorNav(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <>
      <div className=" min-w-screen min-h-screen bg-white">
        <div
          className={`fixed min-w-full h-[100px] flex  justify-center z-50 
         
          `}
        >
          <nav className="flex w-11/12 justify-between ">
            <div className="  flex">
              <div className="w-32 h-32 bg-no-repeat  mr-8">
                <img src={Carton} alt="Side Image1" />
              </div>
              <div
                className={`flex justify-center items-center text-5xl font-semibold ${
                  colorNav ? "text-sky-700" : ""
                }`}
              >
                Carton
              </div>
            </div>
            <div className="flex  items-center">
              <Link to={"/login"}>
                <button
                  className={`w-28 h-14 text-2xl font-semibold border-4  rounded-full  ${
                    colorNav
                      ? "border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white"
                      : "border-slate-800 hover:bg-slate-800 hover:text-white"
                  } `}
                >
                  Login
                </button>
              </Link>
            </div>
          </nav>
        </div>
        <div className="bg-cover bg-no-repeat  ">
          <div className="absolute text-white w-[550px] h-[200px] top-[500px]  right-4 ">
            <div className="text-3xl font-semibold flex justify-end mr-16 mb-12">
              What is Carton ?
            </div>
            <div className=" text-xl font-semibold  ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </div>
          </div>
          <div className="absolute  top-[850px] left-[820px]  z-50  h-32">
            <Link to={"/login"}>
              <button className="w-80  h-16 text-2xl font-semibold border-4 border-neutral-50 text-white rounded-full hover:bg-slate-800 hover:text-white hover:border-none  ">
                Welcome to our website
              </button>
            </Link>
          </div>
          <img
            src="https://images.pexels.com/photos/5604045/pexels-photo-5604045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="warehouse"
          />
        </div>
        <br />
        <br />
        <br />
        <div className=" flex justify-center">
          <div className="w-6/12 ">
            <div className="flex">
              <div className="w-[1000px] h-[400px] bg-no-repeat">
                <img
                  src="https://images.pexels.com/photos/6170451/pexels-photo-6170451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="warehouse"
                />
              </div>
              <div className=" flex justify-center items-center w-[800px] ">
                <div className="w-[300px] text-sky-700 text-xl font-semibold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="flex">
              <div className=" flex justify-center items-center w-[800px] ">
                <div className="w-[300px] text-sky-700 text-xl font-semibold">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </div>
              </div>
              <div className=" w-[1400px] h-[400px] bg-no-repeat ">
                <img
                  src="https://images.pexels.com/photos/6170140/pexels-photo-6170140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="warehouse"
                />
              </div>
            </div>
            <br />
            <br />
            <div className="flex">
              <div className=" w-[1000px] h-[600px] bg-cover bg-no-repeat ">
                <img
                  src="https://images.pexels.com/photos/6170465/pexels-photo-6170465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="warehouse"
                  className=" h-[600px] bg-cover bg-no-repeat"
                />
              </div>
              <div className="flex justify-center items-center w-[800px] ">
                <div className="w-[450px] bg-s text-xl font-semibold text-sky-700">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="h-96 flex justify-center    ">
          <div className="w-6/12 ">
            <div className="text-sky-700 text-3xl font-extrabold flex justify-center">
              Why you should do business with us ?
            </div>
            <br />
            <br />
            <div className="text-sky-700 text-2xl font-semibold flex justify-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Link to={"/login"}>
              <div className="flex justify-center items-center h-16  text-sky-700  text-3xl font-semibold   border-4 border-sky-700   rounded-full hover:bg-sky-700 hover:text-yellow-300">
                Join our side
              </div>
            </Link>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
