import Title from "../UI/Title";
import "../style/header.css";
import Profile from "./Profile";

export default function Header() {
  return (
    <div className="header-container">
      <Title
        text="Family Space"
        variant="header-title"
        dataTestId="Title"
      ></Title>
      <Profile litName="U" litSurname="N" />
    </div>
  );
}
