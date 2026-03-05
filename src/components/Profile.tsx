import type IProfile from "../interface/IProfile";
import "../style/profile.css";

export default function Profile({ litName, litSurname, fn }: IProfile) {
  return (
    <div className="profile-circle">
      <div className="profile-litter" onClick={fn}>
        {litName + litSurname}
      </div>
    </div>
  );
}
