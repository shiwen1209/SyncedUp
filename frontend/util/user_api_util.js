export const fetchUser = (id)=>{
    return $.ajax({
        url: `/api/users/${id}`,
        method: "GET",
    })
}

export const updateUser = (user) => {
    return $.ajax({
        url: `/api/users/${user.id}`,
        method: "PATCH",
        data: {user}
    })
}

export const updateUserPhoto = (userId, formData) => {
    // debugger
    return $.ajax({
        url: `/api/users/${userId}`,
        method: "PATCH",
        data: formData,
        contentType: false,
        processData: false
    })
}

export const fetchPeople = () => {
    return $.ajax({
        url: `/api/users`,
        method: "GET",
    })
}