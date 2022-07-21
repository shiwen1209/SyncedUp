import React from "react";
import { Link } from "react-router-dom";
import SearchResultItem from "../search/search_result_item";


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            searchValue: "",
            displaySearch: false,
            filteredResult: this.props.people,
            searchBarId: "searchBarInactive"
            };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount(){
        this.props.fetchPeople(); 
    }

    handleClick(e) {
        this.props.logout()
    }

    handleUpdate(e){
        const word = e.currentTarget.value.toLowerCase();
        this.setState({searchValue: word})
        const resultList = this.props.people.filter((person) => {
            const full_name = person.firstName.toLowerCase() + " " + person.lastName.toLowerCase()
            return full_name.includes(word)
        })
        this.setState({ filteredResult: resultList })
    }

    closeSearch(e){
        e.stopPropagation();
        if (e.target.className !== "search-bar-icon"
            && e.target.className !== "fa-solid fa-magnifying-glass"
            && e.target.className !== "comment-button" ){
            this.setState({
                searchValue: "",
                displaySearch: false,
                filteredResult: this.props.people,
                searchBarId: "searchBarInactive"
            })
        }
    }

    handleSearch(e){
        this.setState({filteredResult: this.props.people,
            displaySearch: true,
            searchBarId: "searchBarActive"
        })
    }       

    render() {
        const { currentUser} = this.props
        const searchResult = this.state.filteredResult.map((person, idx)=>(
            <SearchResultItem person={person} key={idx} />
        ))
        if(currentUser){
            return (
                <nav onClick={this.closeSearch}>
                    <div>
                        <Link id="logo" to="/"><span className="logo" id="up">up</span></Link>
                        <div className="search-bar" id={this.state.searchBarId}>
                            <div className="search-bar-icon">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <input onFocus={this.handleSearch} id="search-box"
                            onChange={this.handleUpdate} placeholder="Search"
                                className="comment-button" type="text" value={this.state.searchValue} />
                        </div>

                        {this.state.displaySearch ? 
                            <div id="search-parent" className="modal-background" onClick={this.closeSearch} >
                                <div id="search-child" className="component" onClick={e => e.stopPropagation()}>
                                    {searchResult.length > 0 ? 
                                        <ul onClick={this.closeSearch}>
                                            {searchResult}
                                        </ul> :
                                        <h3>No result found</h3>
                                    }
                            </div>
                        </div> : <div></div>} 
                    </div>

                    <div >
                        <Link className="icon" to="/feed">
                            <i className="fa-solid fa-house"></i>
                            <span>Home</span>
                        </Link>
                        <Link className="icon" to={`/users/${currentUser.id}`}>
                            <i className="fa-solid fa-circle-user"></i>
                            <span>My profile</span>
                        </Link>

             
                        <Link className="icon" to={`/mynetwork`}>
                            <i className="fa-solid fa-user-group"></i>
                            <span>My network</span>
                        </Link> 
                

                        <div className="icon">
                            <i className="fa-solid fa-comment-dots"></i>
                            <span>messaging</span>
                        </div>
                        <div className="icon" onClick={this.handleClick}>
                            <i className="fa-solid fa-right-from-bracket"></i>
                            <span>Logout</span>
                        </div>
                    </div>
                </nav>
            )
        } else {
            return(
                <nav>
                    <Link id="logo" to="/"><span className="logo">Synced</span><span className="logo" id="up">up</span></Link>
                    <div>
                        <Link to="/signup" id="join-now">Join now</Link>
                        &nbsp;&nbsp;
                        <Link to="/login" id="sign-in">Sign in</Link>
                    </div>
                </nav>
                
            )
        }

    }
}
export default Nav;