import { useNavigate } from "react-router";
import "../style/profile.css";
import MainButton from "../UI/MainButton";

export default function ModalProfile({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;
  const nav = useNavigate();
  return (
    <div className="modal-profile" hidden={!isVisible}>
      <MainButton
        text="Выйти"
        dataTestId="logout"
        variant="profile-logout"
        fn={() => nav("/auth")}
      />
    </div>
  );
}
