import React from 'react';
import {connect} from 'react-redux';
import ContactItem from './ContactItem';
import Header from './Header';

function App(props) {
  const contact = props.contacts.map(contact => 
    <ContactItem name={contact.name} phone={contact.phone} email={contact.email} _id={contact._id}/>)

  return (
    <div className="app">
      <Header />
      <div id="contactsSection">
        {contact}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps)(App);
