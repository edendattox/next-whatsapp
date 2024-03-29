import { Circle } from "better-react-spinkit";

const Loading = () => {
  return (
    <center>
      <div>
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt=""
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle color="#3CBC2B" size={60} />
      </div>
    </center>
  );
};

export default Loading;
