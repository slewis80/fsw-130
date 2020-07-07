import React from 'react'
import {connect} from 'react-redux'
import {removeContact} from './contacts'

function ContactItem(props) {
    return (
        <div className="contactContainer">
            <h2><span className="contactLabel"> Name: </span>{props.name}</h2>
            <h4><span className="contactLabel"> Phone: </span>{props.phone}</h4>
            <h4><span className="contactLabel"> E-Mail: </span>{props.email}</h4>
            <button className="deleteButton" onClick={() => props.removeContact(props._id)}>Delete</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        state: state
    }
}

const mapDispatchToProps = {
    removeContact: removeContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem)