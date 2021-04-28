import React, {useState} from "react";

type ProfileStatusPropsT = {
    status: string;
    updateUserStatus: (status: string) => void;
}

export const ProfileStatusHooks = (props: ProfileStatusPropsT) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string>(props.status);

    return (
        <div>
            {!editMode ? (
                <div>
                    <span onDoubleClick={() => setEditMode(true)}>{props.status || "No status"}</span>
                </div>
            ) : (
                <div>
                    <input
                        value={status}
                        onBlur={() => {
                            setEditMode(false);
                            props.updateUserStatus(status);
                        }}
                        onChange={(e) => {
                            const { value } = e.currentTarget;
                            setStatus(value)
                        }}
                        autoFocus
                    />
                </div>
            )}
        </div>
    );

}