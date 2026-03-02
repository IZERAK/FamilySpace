import Header from "../components/Header";
import "../style/home.css";

export default function Home() {
  return (
    <div className="home-page">
      <div className="top">
        <Header />
      </div>
      <div className="center">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </div>
  );
}
