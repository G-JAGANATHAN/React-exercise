import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationSummary from "./RegistrationSummary";

function Example2() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    gender: "",
    terms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="mb-4">Registration Form</h2>

            <form onSubmit={handleSubmit}>
              
              {/* Name */}
              <label className="form-label text-start d-block">
                Name
              </label>

              <input
                type="text"
                className="form-control mb-3 bg-light"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              {/* Email */}
              <label className="form-label text-start d-block">
                Email
              </label>

              <input
                type="email"
                className="form-control mb-3 bg-light"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />

              {/* Phone */}
              <label className="form-label text-start d-block">
                Phone
              </label>

              <input
                type="tel"
                className="form-control mb-3 bg-light"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />

              {/* City */}
              <label className="form-label text-start d-block">
                City
              </label>

              <input
                type="text"
                className="form-control mb-3 bg-light"
                value={form.city}
                onChange={(e) =>
                  setForm({ ...form, city: e.target.value })
                }
              />

              {/* Gender */}
              <label className="form-label text-start d-block">
                Gender
              </label>

              <select
                className="form-select mb-3 bg-light"
                value={form.gender}
                onChange={(e) =>
                  setForm({ ...form, gender: e.target.value })
                }
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              {/* Terms */}
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={form.terms}
                  onChange={(e) =>
                    setForm({ ...form, terms: e.target.checked })
                  }
                />

                <label className="form-check-label">
                  I accept the Terms and Conditions
                </label>
              </div>

              {/* Submit */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>

            {/* Submitted message */}
            {submitted && (
              <div>
                
              </div>
            )}
          </div>
        </div>
        <div className="col-md-6"> <RegistrationSummary form={form} submitted={submitted} /> </div>
      </div>
    </div>
  );
}

export default Example2;