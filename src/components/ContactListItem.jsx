import { useContext } from "react";
import { ContactContext } from "../App";
import { Link } from "react-router-dom";

function ContactListItem({ contact }) {
    const { setContactList } = useContext(ContactContext);

    return (
        <li>
            <span>{contact.firstName} {contact.lastName}</span>         
        <Link to={`/contact/${contact.id}`}>
            <button>View</button>
        </Link>
        </li>
    );
}

export default ContactListItem;
