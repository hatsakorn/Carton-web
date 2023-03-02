import { Avatar, Carousel } from "flowbite-react";
import Carton from "../img/pic1.jpg";
import Carton1 from "../img/pic2.jpg";
import CartonLogo from "../img/Carton_Logo.png";

export default function MainPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src={Carton}
            alt="Side Image1"
            className=" w-[100%] h-[100%] mr-4"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src={Carton1}
            alt="Side Image1"
            className=" w-[100%] h-[100%] mr-4"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src={Carton}
            alt="Side Image1"
            className=" w-[100%] h-[100%] mr-4"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src={Carton}
            alt="Side Image1"
            className=" w-[100%] h-[100%] mr-4"
          />
        </div>
      </Carousel>
      {/* <!-- Side Image -->
      <div className="md:w-1/2 bg-gray-500 flex flex-col justify-center">
        <img
          src={Carton}
          alt="Side Image6"
          className="w-full object-cover mt-4"
        />
        <div className="flex justify-center">
          <img src={Carton} alt="Side Image1" className="w-16 h-16 mr-4" />
          <img src={Carton1} alt="Side Image2" className="w-16 h-16 mr-4" />
          <img src={Carton} alt="Side Image3" className="w-16 h-16 mr-4" />
          <img src={Carton} alt="Side Image4" className="w-16 h-16 mr-4" />
          <img src={Carton} alt="Side Image5" className="w-16 h-16" />
        </div>
      </div> */}

      {/* <!-- Main Content --> */}
      <div className="md:w-1/2 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8  bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex flex-wrap items-center gap-2 rounded-2xl">
          <Avatar img={CartonLogo} size="xl" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to my website
        </h1>
        <p className="text-lg mb-8 text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          velit eget ipsum vulputate ultrices. Phasellus id turpis id magna
          luctus elementum eu in nulla.
        </p>
        <a
          href="#"
          className=" bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        >
          Enter Website
        </a>
      </div>
    </div>
  );
}
