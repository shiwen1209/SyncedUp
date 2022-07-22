export const exp_selector = (state, type)=>{
    const Arr = Object.values(state.entities.experiences).filter((exp) => exp.expType === type)
    const newArr = Arr.sort(function (a, b) {
       return  (new Date(b.endDate)).getTime() - (new Date(a.endDate)).getTime()
    })
    return newArr
}