import { useState, useContext } from "react";
import { ContactContext } from "../App";

function AddContact() {
    const { setContactList, url } = useContext(ContactContext);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const newContact = await response.json();
            setContactList(prevList => [...prevList, newContact]);
            setFormData({
                firstName: "",
                lastName: "",
                street: "",
                city: ""
            });
        } else {
            console.error("Failed to add contact");
        }
    }

    return (
        <div>
            <h2><strong>Create Contact</strong></h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName"><strong>First Name</strong></label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName"><strong>Last Name</strong></label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="street"><strong>Street</strong></label>
                    <input type="text" name="street" value={formData.street} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="city"><strong>City</strong></label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                </div>

                <button type="submit">Add Contact</button>
            </form>
        </div>
    );
}

export default AddContact;