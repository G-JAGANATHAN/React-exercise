function RegistrationSummary({ form, submitted }) {
  return (
    <div className="card p-4 text-start">
      <h2 className="mb-4">Registration Summary</h2>

      {submitted ? (
        <>
          <p>
            <strong>Name:</strong> {form.name}
          </p>

          <p>
            <strong>Email:</strong> {form.email}
          </p>

          <p>
            <strong>Phone:</strong> {form.phone}
          </p>

          <p>
            <strong>City:</strong> {form.city}
          </p>

          <p>
            <strong>Gender:</strong> {form.gender}
          </p>

          <p>
            <strong>Terms:</strong> {form.terms ? "Accepted" : "Not Accepted"}
          </p>
        </>
      ) : (
        <p>Submit the form to see the registration details.</p>
      )}
    </div>
  );
}

export default RegistrationSummary;
