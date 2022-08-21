import { nanoid } from "nanoid";
import React from "react";

class Phonebook extends React.Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ], 
        filter: '',
        name: '',
        number: '',
    };
    handleFormSubmit = ev => {
        ev.preventDefault();
        const form = ev.currentTarget;
        const contactName = form.elements.name.value;
        const phoneNumber = form.elements.number.value;
        this.state.contacts.filter((el) => el.name === contactName).length>0 ? alert(`${contactName} is already in contacts.`) : this.setState({
            ...this.state,
            contacts: [...this.state.contacts, { name: contactName, id: nanoid(), number: phoneNumber }],
            name: "",
        })

        ;
        
        let nameField = form.elements.name;
        let numberField = form.elements.number;
        nameField.value = null;
        numberField.value = null;
   


        
        
    };
    
    remove = (id) => {
        const newList = this.state.contacts.filter((el) => el.id !== id);
        this.setState({...this.state, contacts: newList})
}


    renderContact = (filterValue, contactsArray) => {
        if (!filterValue) {
            return contactsArray.map((contact) => {
                return (<li key={contact.id}>{contact.name}: {contact.number}<button onClick={() => {
                    this.remove(contact.id)
                }}>Delete</button></li>)
            });
        };
        return (contactsArray.filter((el, id) => el.name.toLowerCase().includes(filterValue.toLowerCase())).map((contact) => {
            return (<li key={contact.id}>{contact.name}: {contact.number}<button>Delete</button></li>)
        }));
    };

 

    render() {
        const {filter, contacts } = this.state;
        return (
            <div>
                <h2>Phonebook</h2>
                <div>
                    <form onSubmit={this.handleFormSubmit}>
                        <h5>Name</h5>
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                        <h5>Number</h5>
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                        <button>Add contact</button>
                    </form>
                </div>
                <div>
                    <h2>Contacts</h2>
                    <h5>Find contact by name</h5>
                    <input onChange={event => {
                        this.setState({ ...this.state, filter: event.target.value });
                    }}></input>
                    <ul>
                        {this.renderContact(filter, contacts)}
                    </ul>
                </div>
            </div>)
    }
}

export default Phonebook