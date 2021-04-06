import React from "react";
import classes from "./ProfileInfo.module.css";
import {UserProfileItemT} from "../../../redux/entities";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";

type ProfileInfoPropsT = {
    profile: UserProfileItemT
    status: string;
    updateUserStatus: (status: string) => void;
}

const ProfileInfo: React.FC<ProfileInfoPropsT> = (props) => {
    if (!props.profile) {
        return <div><Preloader/></div>
    }
    const {status} = props;

    return (
        <div>
            <ProfileStatus status={status} updateUserStatus={props.updateUserStatus}/>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos?.large ? props.profile.photos.large : ""} alt="LargeUserPhoto"/>
                <ul>
                    <li>{props.profile.fullName}</li>
                    <li>{props.profile.aboutMe}</li>
                    <li>{props.profile.lookingForAJob ? "Yes" : "No"}</li>
                    <li>{props.profile.lookingForAJobDescription}</li>
                </ul>
                <div>Contacts:
                    {props.profile.contacts && Object.entries(props.profile.contacts).map(value => {
                        return value[1] && <div><a href={value[1]}>{value[0]}</a></div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;