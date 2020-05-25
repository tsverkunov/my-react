import React from "react";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {connect} from "react-redux";
import Preloader from "../../common/preloader/Preloader";
import {getTracks, searchResult} from "../../redux/musicReducer";
import s from "./Music.module.sass";
import {Field, reduxForm} from "redux-form";

const SearchForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name="search" component={"input"} type={"text"}/>
            {/*<input type="text" value={props.searchResult} onChange={props.searchChange}/>*/}
            <button>Search</button>
        </form>
    )
}
const SearchReduxForm = reduxForm({form: 'search'})(SearchForm)

class MusicContainer extends React.Component {
    componentDidMount() {
        this.props.getTracks();
    }

    onSubmit = (formData) => {
        this.props.searchResult(formData.search)
    }
    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <div className={s.wrapperContent}>
                        <div className={s.searchItem}>
                            <SearchReduxForm onSubmit={this.onSubmit} />
                        </div>
                        <div className={s.wrappTracks}>
                            {this.props.radioChannel.map(r =>
                                <div className={s.track}>
                                    <div>
                                        <a href={r.link}>PLAY</a>
                                    </div>
                                    <div><img src={r.artist.picture} alt=""/></div>
                                    <div>
                                        <a href={r.preview}>PREV</a>
                                    </div>
                                    <div>{r.artist.name}</div>
                                    <div>{r.title}</div>
                                </div>)}
                        </div>
                    </div>}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.usersReducer.isFetching,
    radioChannel: state.musicReducer.radioChannel,
    searchResult: state.musicReducer.searchResult
})
export default compose(
    connect(mapStateToProps, {getTracks, searchResult}),
    withAuthRedirect
)(MusicContainer);