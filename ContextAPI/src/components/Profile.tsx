import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const context = useContext(UserContext);
  if(!context) {
    <h2>Loading Profile....</h2>
    throw new Error("useContext must be used within a UserProvider");
  }
  const {user} = context;
  return (
    <div>
      <h2>Profile: {user?.userName} </h2>
    </div>
  );
}

export default Profile
