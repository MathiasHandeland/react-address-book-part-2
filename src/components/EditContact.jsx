// src/components/EditContact.js
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactContext } from "../App";
import ContactForm from "./ContactForm";

function EditContact() {
  const { contactList, setContactList, url } = useContext(ContactContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const contactToEdit = contactList.find(c => c.id === Number(id));

  const handleUpdate = async (formData) => {
    const response = await fetch(`${url}/${formData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const updated = await response.json();
      setContactList(prev =>
        prev.map(c => (c.id === updated.id ? updated : c))
      );
      navigate(`/contact/${updated.id}`);
    }
  };

  if (!contactToEdit) return <p>Contact not found</p>;

  return (
    <div>
      <h2>Edit Contact</h2>
      <ContactForm
        initialData={contactToEdit}
        onSubmit={handleUpdate}
        buttonLabel="Update Contact"
      />
    </div>
  );
}

export default EditContact;
