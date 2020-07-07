const {v4:uuid} = require('uuid');


const initialState = {
    contacts: [
        {
            name: "Sabrina Lewis",
            phone: "111-000-7777",
            email: "sabrina.lewis@bryanuniversity.edu",
            _id: uuid()
        }
    ]
}


function contactsReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_CONTACT":
            const contactId = uuid()
            return {
                contacts: [
                    ...state.contacts, {
                        name: action.name,
                        phone: action.phone,
                        email: action.email,
                        _id: contactId
                    }
                ]
            }
        case "REMOVE_CONTACT":
            const updatedContacts = state.contacts.filter(contact => contact._id !== action._id)
            return {
                contacts: updatedContacts
            }
        default:
            return state
    }
}


export default contactsReducer