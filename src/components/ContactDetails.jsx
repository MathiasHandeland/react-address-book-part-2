import { useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ContactContext } from "../App";
import LocationMap from "./LocationMap";

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
                <img className="profile-image" src={contact.profileImage} alt={`${contact.firstName} ${contact.lastName}`}/>
                <p><strong>Address:</strong> {contact.street}</p> 
                <p><strong>City:</strong> {contact.city}</p>
                <LocationMap latitude={contact.latitude} longitude={contact.longitude} />
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Gender:</strong> {contact.gender}</p>
                <p><strong>Job:</strong> {contact.jobTitle}</p>
                <p><strong>Favourite Color:</strong> {contact.favouriteColour}</p>
                <button onClick={handleDelete}>Delete Contact</button>
                <button><Link to={`/edit/${contact.id}`}>Edit Contact</Link></button>
            </div>
        </div>
    );
}

export default ContactDetails;
