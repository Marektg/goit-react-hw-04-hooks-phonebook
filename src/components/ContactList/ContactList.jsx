import React from "react";
import styles from './ContactList.module.css'
class ContactList extends React.Component {
    render() {
        const { renderHandler } = this.props;
        return (
            <ul>
                {renderHandler}
            </ul>
        )
}
};

export default ContactList;