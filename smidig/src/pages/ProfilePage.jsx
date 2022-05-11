import React from "react";
import AvatarCreationBubble from "../components/AvatarCreationBubble";
import Badges from "../components/Badges";
import ProfileHeader from "../components/ProfileHeader";


const ProfilePage = () => {
    return(
        <>
            <ProfileHeader/>
            <Badges/>
            <AvatarCreationBubble />
        </>
    );
}


export default ProfilePage;