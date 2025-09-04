import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContactContext } from "../App";

function ContactDetails() {
    const { contactList } = useContext(ContactContext);
    const { id } = useParams();
    const contact = contactList.find(c => c.id === Number(id));

    
    if (!contact) {
    return <p>Contact not found.</p>;
    }

    return (
        <div>
            <h2><strong>Contact Details</strong></h2>
            <h3><u>{contact.firstName} {contact.lastName}</u></h3>
            <div>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Address:</strong> {contact.street}</p>
                <p><strong>City:</strong> {contact.city}</p>
                <p><strong>Job:</strong> {contact.jobTitle}</p>
            </div>
        </div>
    );
}

export default ContactDetails;
