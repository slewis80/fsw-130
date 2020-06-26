const redux = require('redux')

const initialState = {
    contacts: [
        {
            name: "Sabrina",
            phone: "111-000-7777",
            email: "sabrina.lewis@bryanuniversity.edu"
        }
    ]
}

function addContact(name, phone, email) {
    return {
    type: "ADD_CONTACT",
    name: name,
    phone: phone,
    email: email
    }
}

function removeContact(name, phone, email) {
    return {
        type: "REMOVE_CONTACT",
        name: name,
        phone: phone,
        email: email    
    }
}

function contactsReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_CONTACT":
            return {
                contacts: [
                    ...state.contacts, {
                        name: action.name,
                        phone: action.phone,
                        email: action.email
                    }
                ]
            }
        case "REMOVE_CONTACT":
            const updatedContacts = state.contacts.filter(contact => contact.name.toLowerCase() + contact.phone + contact.email.toLowerCase() !== action.name.toLowerCase() + action.phone + action.email.toLowerCase())
            return {
                contacts: updatedContacts
            }
        default:
            return state
    }
}

const store = redux.createStore(contactsReducer)
store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(addContact("Tyler", "111-111-3333", "Tyler@tyler.com"))
store.dispatch(addContact("Avery", "111-222-1111", "Avery@avery.com"))
store.dispatch(addContact("PersonToRemove", "123-456-7890", "someone@nowhere.com"))
store.dispatch(addContact("Lucas", "111-333-1213", "Lucas@lucas.com"))
store.dispatch(removeContact("persontoremove", "123-456-7890", "someone@nowhere.com"))
