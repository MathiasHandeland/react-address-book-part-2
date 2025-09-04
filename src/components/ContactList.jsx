import { useContext } from 'react'
import { ContactContext } from '../App';
import ContactListItem from './ContactListItem';

function ContactList() {
    const { contactList } = useContext(ContactContext);
    return (
        <div>
            <h2><strong>Contact List</strong></h2>
            <ul>
                {contactList.map(contact => (
                    <ContactListItem key={contact.id} contact={contact} />
                ))}
            </ul>
        </div>
    );
}

export default ContactList;