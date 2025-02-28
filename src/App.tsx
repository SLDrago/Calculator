import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen px-4 bg-[url(./assets/liquid-cheese.svg)] bg-no-repeat">
        <div className="container bg-[#131c25]/70 rounded-3xl p-8 text-white md:max-w-2/3 lg:max-w-2/3 w-dvh">
          <div className="text-right p-5">
            <div className="text-4xl py-4">100/5*6</div>
            <div className="text-6xl font-bold">=120</div>
          </div>
          <div className="grid grid-cols-4 gap-2 text-3xl text-center align-middle">
            <button className="bg-[#4e585f] hover:bg-[#3d4a4e] rounded-lg p-3">
              AC
            </button>
            <button className="bg-[#4e585f] hover:bg-[#3d4a4e] rounded-lg p-3">
              <FontAwesomeIcon icon={faDeleteLeft} />
            </button>
            <button className="bg-[#015db1] hover:bg-[rgb(1,57,177)] rounded-lg p-3">
              /
            </button>
            <button className="bg-[#015db1] hover:bg-[rgb(1,57,177)] rounded-lg p-3">
              *
            </button>
            <button className="text-[#4ba1d5] bg-[#22333d] hover:bg-[#33444e] rounded-lg p-3">
              7
            </button>
            <button className="text-[#4ba1d5] bg-[#22333d] hover:bg-[#33444e] rounded-lg p-3">
              8
            </button>
            <button className="text-[#4ba1d5] bg-[#22333d] hover:bg-[#33444e] rounded-lg p-3">
              9
            </button>
            <button className="bg-[#015db1] hover:bg-[rgb(1,57,177)] rounded-lg">
              -
            </button>
            <button className="text-[#4ba1d5] bg-[#22333d] hover:bg-[#33444e] rounded-lg p-3">
              4
            </button>
            <button className="text-[#4ba1d5] bg-[#22333d] hover:bg-[#33444e] rounded-lg p-3">
              5
            </button>
            <button className="text-[#4ba1d5] bg-[#22333d] hover:bg-[#33444e] rounded-lg p-3">
              6
            </button>
            <button className="bg-[#015db1] hover:bg-[rgb(1,57,177)] rounded-lg">
              +
            </button>
            <button className="text-[#4ba1d5] bg-[#22333d] hover:bg-[#33444e] rounded-lg p-3">
              1
            </button>
            <button className="text-[#4ba1d5] bg-[#22333d] hover:bg-[#33444e] rounded-lg p-3">
              2
            </button>
            <button className="text-[#4ba1d5] bg-[#22333d] hover:bg-[#33444e] rounded-lg p-3">
              3
            </button>
            <button className="row-span-2 bg-[#1893fc] hover:bg-[rgb(1,142,177)] rounded-lg">
              =
            </button>
            <button className="col-span-2 text-[#4ba1d5] bg-[#22333d] hover:bg-[#33444e] rounded-lg p-3">
              0
            </button>
            <button className="text-[#4ba1d5] bg-[#22333d] hover:bg-[#33444e] rounded-lg p-3">
              .
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
