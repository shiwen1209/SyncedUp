export const peopleSelector = (state)=>{
    if (state.session.user.connectionIds){
        return Object.values(state.entities.people).filter((people) => !(state.session.user.connectionIds.includes(people.id))
            && people.id !== state.session.id)
    } else {return []}
    
}