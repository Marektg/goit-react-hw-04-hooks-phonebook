import React from "react";
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