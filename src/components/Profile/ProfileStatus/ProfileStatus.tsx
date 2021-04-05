import React from "react";

type ProfileStatusPropsT = {
    status: string
}

type ProfileStatusLST = {
    editMode: boolean;
}

export class ProfileStatus extends React.Component<ProfileStatusPropsT, ProfileStatusLST> {
    state: ProfileStatusLST = {
        editMode: false,
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
    }

    render() {
        const {status} = this.props;

        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{status}</span>
                    </div>
                    :
                    <div>
                        <input value={status} onBlur={this.deactivateEditMode} autoFocus/>
                    </div>
                }
            </div>
        )
    }
}