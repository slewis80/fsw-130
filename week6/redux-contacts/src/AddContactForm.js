import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addContact} from './contacts'

function AddContactForm(props) {

    const initialContact = {
        name: "",
        phone: "",
        email: ""
    }

    const [contact, setContact] = useState(initialContact)

    const handleChange = (e) => {
        const {name, value} = e.target
        setContact(prevInputs => ({...prevInputs, [name]: value}))
        console.log(contact)
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.addContact(contact.name, contact.phone, contact.email)
        setContact(initialContact)

    }


    return (
        <form name="addContactForm" onSubmit={handleSubmit}>
            <input 
                className="formInput"
                name="name" 
                type="text" 
                value={contact.name}
                placeholder="Name"
                onChange={handleChange}>
            </input>
            <input 
                className="formInput"
                name="phone" 
                type="tel"
                value={contact.phone}
                placeholder="Phone Number"
                onChange={handleChange}>
            </input>
            <input 
                className="formInput"
                name="email" 
                type="email"
                value={contact.email}
                placeholder="E-Mail"
                onChange={handleChange}>
            </input>
            <button 
                className="formInput"
                type="submit">
                    Add New Contact
            </button>
            <hr />
        </form>
    )
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    }
}

const mapDispatchToProps =  {
    addContact: addContact
}


export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm)