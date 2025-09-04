import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContactContext } from "../App";

function ContactDetails() {
    const { contactList, setContactList, url } = useContext(ContactContext);
    const { id } = useParams();
    const contact = contactList.find(c => c.id === Number(id));
    const navigate = useNavigate();

    if (!contact) {
        return <p>Contact not found.</p>;
    }

    const handleDelete = async () => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setContactList(prevList => prevList.filter(c => c.id !== Number(id)));
                navigate('/contacts');
            } else {
                console.error("Failed to delete contact");
            }
        } catch (error) {
            console.error("Error deleting contact:", error);
        }
    };

    return (
        <div>
            <h2><strong>Contact Details</strong></h2>
            <h3><u>{contact.firstName} {contact.lastName}</u></h3>
            <div>
                <p><strong>Address:</strong> {contact.street}</p>
                <p><strong>City:</strong> {contact.city}</p>
                <button onClick={handleDelete}>Delete Contact</button>
            </div>
        </div>
    );
}

export default ContactDetails;
