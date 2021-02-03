import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {

  return (
    <div>
      <div>
        <img className={s.imgHolder}
             src="https://media.gettyimages.com/photos/the-end-of-a-rainbow-with-a-field-in-the-foreground-picture-id104637612?s=612x612"
             alt="Background personal" />
      </div>
      <div className={s.descriptionBlock}>
        avatar + desc
      </div>
    </div>
  );
};

export default ProfileInfo;

