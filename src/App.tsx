import "./App.css";
import VideoPlayer from "./Components/VideoPlayer";

function App() {
  return (
    <>
      Live Streaming App
      <br />
      <VideoPlayer src={"http://localhost:8080/live/todo.flv"} />
    </>
  );
}

export default App;
