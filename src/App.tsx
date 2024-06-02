import { FloatButton } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import Calculator from "./Calculator";

function App() {
  return (
    <div className="bg-[#18242e] flex justify-center">
      <div
        className="flex-1 bg-[url('/bg.webp')] min-h-screen w-full bg-no-repeat bg-cover
        bg-fixed max-w-[1700px] flex justify-center sm:px-20 lg:px-32"
      >
        <div
          className="w-full h-full sm:h-max bg-[#fffdf5] flex flex-col justify-center my-auto
          gap-y-5 sm:rounded-3xl sm:shadow-2xl max-w-3xl pt-3 sm:py-5 lg:py-7"
        >
          <img src="./pogo.webp" className="h-24 mx-auto" alt="Logo" />
          <Calculator />
        </div>
      </div>
      <FloatButton
        href="https://github.com/photkosee/pogo-powerup"
        target="_blank"
        badge={{ dot: true }}
        icon={<GithubOutlined />}
      />
    </div>
  );
}

export default App;
