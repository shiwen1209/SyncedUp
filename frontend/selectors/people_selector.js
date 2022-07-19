export const peopleSelector = (state)=>{
    // debugger
    if (state.entities.users[state.session.id].connectionIds){
        return Object.values(state.entities.people).filter((people) => !(state.entities.users[state.session.id].connectionIds.includes(people.id))
            && people.id !== state.session.id)
    } else {return []}
    
}