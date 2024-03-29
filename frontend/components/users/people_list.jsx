import React from "react";
import PeopleItem from "./people_item";

class PeopleList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPeople()
    }

    render() {
        const { people, currentUserId, createConnection, addConnection} = this.props
        const peopleList = people.map((person, idx) => (<PeopleItem
            key={idx} 
            person={person} 
            currentUserId={currentUserId}
            createConnection={createConnection} 
            addConnection={addConnection}
            type="connection-page"
            />)).sort(() => Math.random() - 0.5)

        const filteredPeopleList = peopleList.slice(0, 3)

        if (!people) { return }
        return (
            <ul>
                {filteredPeopleList}
            </ul>
        )
    }
}

export default PeopleList;