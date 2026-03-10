import { useState } from "react";
import Title from "../UI/Title";
import "../style/header.css";
import ModalProfile from "./ModalProfile";
import Profile from "./Profile";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false); // Закрыто по умолчанию
  const openProfileModal = () => {
    setIsVisible((prev) => !prev);
    console.log(isVisible);
  }; // Открываем

  return (
    <div className="header-container">
      <Title text="Family Space" variant="header-title" dataTestId="Title" />
      <Profile litName="U" litSurname="N" fn={openProfileModal} />
      <ModalProfile isVisible={isVisible} />
    </div>
  );
}
