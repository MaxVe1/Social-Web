import React, {ChangeEvent, RefObject} from "react";

type ProfileStatusPropsT = {
    status: string;
    updateUserStatus: (status: string) => void;
}

type ProfileStatusLST = {
    editMode: boolean;
    status: string;
}

export class ProfileStatus extends React.Component<ProfileStatusPropsT, ProfileStatusLST> {
    state: ProfileStatusLST = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.currentTarget;
        this.setState({
            status: value
        })
    }

    render() {
        console.log("props", this.props.status)
        console.log("state", this.state.status)
        const {status} = this.state;

        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
                    </div>
                    :
                    <div>
                        <input value={status} onBlur={this.deactivateEditMode} onChange={this.onStatusChange}
                               autoFocus/>
                    </div>
                }
            </div>
        )
    }
}