import type IProfile from "../interface/IProfile";
import "../style/profile.css";

export default function Profile({ litName, litSurname }: IProfile) {
  return (
    <div className="profile-circle">
      <div className="profile-litter">{litName + litSurname}</div>
    </div>
  );
}
