import React, {ChangeEvent} from "react";
import style from "./ProfileStatus.module.sass"


type PropsType = {
  status: string
  updateStatus: (newStatus: string) => void
}
type StateType = {
  editMode: boolean
  status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
  state = {
    editMode: false,
    status: this.props.status
  }
  activateEditMode = () => {
    this.setState({
      editMode: true
    });
    // setState() - асинхронная функция.                this.state.editMode = true;  this.forceUpdate();
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }
  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    });
  }

  componentDidUpdate(prevProps: PropsType, prevState: StateType) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  };

  render() {
    return (
      <div>
        {!this.state.editMode
          ? <div className={style.spanItem}>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || '---'}</span>
          </div>
          : <div className={style.inputItem}>
            <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode}
                   autoFocus={true} value={this.state.status} type="text"/>
          </div>
        }
      </div>
    );
  }
}


export default ProfileStatus;
