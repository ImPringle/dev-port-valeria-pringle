import Navbar from "./components/Navbar";
import Photo from "./assets/photo.jpeg";

function App() {
  return (
    <div className="flex flex-col w-screen">
      <Navbar />
      <div className="flex flex-col w-screen screenButNavbar items-center">
        {/* Name */}
        <div className="flex w-1/2 justify-between items-center ">
          <div className="flex flex-col">
            <p className=" text-gray-400 text-2xl">Welcome to my portfolio.</p>
            <p className=" font-bold text-7xl">
              I'm <span className="  text-violet-400">Valeria Pringle</span>,
            </p>
            <p className=" font-bold text-4xl">
              a Full Stack Software Engineer
            </p>
          </div>
          {/* Photo */}
          <img
            src={Photo}
            className=" rounded-[100%] w-[250px] h-[250px] border-[4px] drop-shadow-lg"
          />
        </div>

        <div className="w-1/2 ">
          <p className="text-gray-400 w-1/2 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad autem
            accusamus, magnam, corrupti eligendi dolorum harum perspiciatis enim
            maxime quae repudiandae accusantium adipisci nostrum voluptas soluta
            dignissimos exercitationem labore illum?
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
