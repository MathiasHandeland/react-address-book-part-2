
import { useState, useEffect } from "react";

function ContactForm({ initialData, onSubmit, buttonLabel }) {
  const [formData, setFormData] = useState(initialData);

  // Update form if initialData changes
  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label><strong>First Name:</strong></label>
            <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            />
        </div>

        <div className="form-group">
            <label><strong>Last Name:</strong></label>
            <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            />
        </div>

        <div className="form-group">
            <label><strong>Street:</strong></label>
            <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
            />
        </div>

        <div className="form-group">
            <label><strong>City:</strong></label>
            <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            />
        </div>

            <div className="form-group">
            <label><strong>Email:</strong></label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>

            <div className="form-group">
            <label><strong>Gender:</strong></label>
            <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            </select>
        </div>

        <div className="form-group">
            <label><strong>Job Title:</strong></label>
            <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
            />
        </div>

        <div className="form-group">
            <label><strong>Favourite Colour:</strong></label>
            <input
            type="text"
            name="favouriteColour"
            value={formData.favouriteColour}
            onChange={handleChange}
            required
            />
        </div>

      <button type="submit">{buttonLabel}</button>
    </form>
  );
}

export default ContactForm;
