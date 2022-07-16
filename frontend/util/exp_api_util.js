export const createExp = (experience)=>(
    $.ajax({
        method: 'POST',
        url: 'api/experiences',
        data: { experience }
    })
);

export const deleteExp = id => {
    debugger
    return $.ajax({
        method: 'DELETE',
        url: `api/experiences/${id}`
    })

}


export const updateExp = (experience)=>(
    $.ajax({
        method: 'PATCH',
        url: `api/experiences/${experience.id}`,
        data: { experience }
    })
)