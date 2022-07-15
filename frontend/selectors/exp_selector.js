export const exp_selector = (state, type)=>{
    return Object.values(state.entities.experiences).filter((exp) => exp.expType === type)

}