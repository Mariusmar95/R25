import { ChangeEvent, useState } from "react";

function BookingForm() {
  const [values, setValues] = useState({
    date: "",
    time: "",
    numOfPersons: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleCharacterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: inputValue,
    }));
  };

  const handelNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, "");
    const numericValue =
      inputValue === "" ? "" : Math.min(Math.max(Number(inputValue), 1), 20);
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: numericValue,
    }));
  };

  const handleChanges = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div className="container mx-auto m-8 text-center bg-white p-6 rounded-md shadow-md mb-20">
      <form onSubmit={handleSubmit}>
        <h3 className="text-3xl font-semibold text-center mb-8">
          Book a table
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              required
              onChange={handleChanges}
              type="date"
              id="date"
              name="date"
              placeholder="Select a date"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none w-full"
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700"
            >
              Hour
            </label>
            <input
              required
              onChange={handleChanges}
              type="time"
              id="time"
              name="time"
              placeholder="Select a time"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none w-full"
            />
          </div>
          <div>
            <label
              htmlFor="numOfPersons"
              className="block text-sm font-medium text-gray-700"
            >
              Number of Persons
            </label>
            <input
              value={values.numOfPersons}
              required
              onChange={handelNumberChange}
              type="number"
              id="numOfPersons"
              name="numOfPersons"
              placeholder="Enter the number of persons"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none w-full"
            />
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-center mt-8 mb-4">
            Contact details
          </h3>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              onChange={handleCharacterChange}
              value={values.name}
              required
              type="text"
              id="name"
              name="name"
              maxLength={30}
              placeholder="Enter your name"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none w-full"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <input
              required
              onChange={handleChanges}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none w-full"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone number
            </label>
            <input
              required
              onChange={handleChanges}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none w-full"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Submit Reservation
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
