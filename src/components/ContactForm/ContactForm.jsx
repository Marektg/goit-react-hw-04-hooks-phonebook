import React from "react";




class ContactForm extends React.Component {

    


    render() {
    
        const { submitHandler } = this.props;
        return (
            <form onSubmit={submitHandler}
                style={{
                    display: "flex",
                    flexDirection: "column",
                alignItems: "center",
}
}>
                <h5 style={{
    marginTop: "10px",
    marginBottom: "10px",
    letterSpacing: "2px",
}}>Name</h5>
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
                <button  style={{
                    marginTop: "10px",
                fontSize: "12px",
                padding: "10px",
                backgroundColor: "#f5f5f5",

}} >Add contact</button>
            </form>


       ) }
};

export default ContactForm;
