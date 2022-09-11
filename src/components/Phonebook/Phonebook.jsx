import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import getFromLocalStorage from '../../utility/loadFromLocal';
import saveToLocal from '../../utility/saveToLocal';


let localContacts = getFromLocalStorage("contacts");

    
const Phonebook = () => {
    const [contacts, setContacts] = useState(localContacts);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        if (localContacts === null) {
            setContacts([
                { id: `${nanoid()}`, name: 'Rosie Simpson', number: '459-12-56' },
                { id: `${nanoid()}`, name: 'Hermione Kline', number: '443-89-12' },
                { id: `${nanoid()}`, name: 'Eden Clements', number: '645-17-79' },
                { id: `${nanoid()}`, name: 'Annie Copeland', number: '227-91-26' },
            ])
        }
    }, []);

   const handleFormSubmit = (ev) => {
        ev.preventDefault();
        const form = ev.currentTarget;
        const name = form.elements.name.value;
        const phone = form.elements.number.value;
       contacts.filter((el) => el.name === name).length > 0 ? alert(`${name} is already in contacts.`) : setContacts([...contacts, { name: name, id: `${nanoid()}`, number: phone }
   ]);


    };

    useEffect(() => {
        saveToLocal("contacts", contacts)
    },[contacts]
    )

   const filterContacts = event => {
        setFilter(event.target.value )
    }

    const remove = (id) => {
        const newList = contacts.filter((el) => el.id !== id);
        setContacts(  newList );
        ;
    }


    const renderContact = (filter, contacts) => {
        if (!filter) {
            if (contacts === null || contacts.length < 1) { return <li>You don't have any contacts yet</li> } else {
                return contacts.map((contact) => {
                    return (
                        <li key={contact.id}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "2fr 1fr",
                                columnGap: "20px",
                                alignItems: "center",
                            }
                            }>
                            {contact.name}: {contact.number}
                            <button onClick={() => { remove(contact.id) }}
                                style={
                                    {
                                        borderRadius: "15px",
                                        letterSpacing: "2px",
                                        backgroundClip: "#f8b4c0",
                                    }
                                }>
                                Delete
                            </button></li >)
                });
            }
        };
        return (contacts.filter((el, id) => el.name.toLowerCase().includes(filter.toLowerCase())).map((contact) => {
            return (<li key={contact.id}
                style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                    columnGap: "20px",
                    alignItems: "center",
                }
                }>{contact.name}: {contact.number}
                <button onClick={() => { remove(contact.id) }}
                    style={
                        {
                            borderRadius: "15px",
                            letterSpacing: "2px",
                            backgroundClip: "#f8b4c0",
                        }
                    }>Delete</button></li>)
        }));
    };
   

   

        return (
            <div>
                <h2>Phonebook</h2>
                <div>
                    <ContactForm submitHandler={handleFormSubmit} />
                </div>
                <div>
                    <h2>Contacts</h2>
                    <Filter filterHandler={filterContacts} />
                    <ContactList renderHandler={renderContact(filter, contacts)} />
                </div>
            </div>)
    
}

export default Phonebook
