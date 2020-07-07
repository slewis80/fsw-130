

export function addContact(name, phone, email) {
    return {
    type: "ADD_CONTACT",
    name: name,
    phone: phone,
    email: email
    }
}

export function removeContact(_id) {
    return {
        type: "REMOVE_CONTACT",
        _id: _id    
    }
}

