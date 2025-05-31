import { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

const Form = memo(({ onFormChange }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
  };

  useEffect(() => {
    const formData = { name, email };
    onFormChange(formData);
  }, [name, email, onFormChange]);

  return (
    <div className="flex flex-col gap-4 w-full justify-center">
      <div>
        <input
          type="text"
          id="fullName"
          class="bg-[var(--secondary)] border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Full Name"
          required
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          id="email"
          class="bg-[var(--secondary)] border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email"
          required
          value={email}
          onChange={handleChange}
        />
      </div>
    </div>
  );
});

Form.displayName = "Form";

Form.propTypes = {
  onFormChange: PropTypes.func.isRequired,
};

export default Form;
