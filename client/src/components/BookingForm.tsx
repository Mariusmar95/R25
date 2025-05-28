import { ChangeEvent, useState } from "react";

type BookingFormType = {
  date: string;
  time: string;
  numOfPersons: number;
  name: string;
  email: string;
  phone: number;
};

function BookingForm() {
  const [formValues, setFormValues] = useState<BookingFormType>({
    date: "",
    time: "",
    numOfPersons: 0,
    name: "",
    email: "",
    phone: 0,
  });

  const handleCharacterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: inputValue,
    }));
  };

  const handelNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, "");
    const numericValue =
      inputValue === "" ? "" : Math.min(Math.max(Number(inputValue), 1), 20);
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: numericValue,
    }));
  };

  const handleChanges = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await fetch("http://localhost:3001/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (!res.ok) {
        throw new Error("Failed to submit");
      }
      const result = await res.json();
      console.log("Success", result);
    } catch (err) {
      console.log("Error", err);
      alert("Error");
    }
  };

  return (
    <div className="bg-white shadow-md m-8 mx-auto mb-20 p-6 rounded-md text-center container">
      <form onSubmit={handleSubmit}>
        <h3 className="mb-8 font-semibold text-3xl text-center">
          Book a table
        </h3>
        <div className="gap-4 grid grid-cols-2">
          <div>
            <label
              htmlFor="date"
              className="block font-medium text-gray-700 text-sm"
            >
              Date
            </label>
            <input
              required
              value={formValues.date}
              onChange={handleChanges}
              type="date"
              id="date"
              name="date"
              placeholder="Select a date"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="block font-medium text-gray-700 text-sm"
            >
              Hour
            </label>
            <input
              required
              value={formValues.time}
              onChange={handleChanges}
              type="time"
              id="time"
              name="time"
              placeholder="Select a time"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="numOfPersons"
              className="block font-medium text-gray-700 text-sm"
            >
              Number of Persons
            </label>
            <input
              value={formValues.numOfPersons}
              required
              onChange={handelNumberChange}
              type="number"
              id="numOfPersons"
              name="numOfPersons"
              placeholder="Enter the number of persons"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 w-full"
            />
          </div>
        </div>
        <div>
          <h3 className="mt-8 mb-4 font-semibold text-3xl text-center">
            Contact details
          </h3>
          <div>
            <label
              htmlFor="name"
              className="block font-medium text-gray-700 text-sm"
            >
              Name
            </label>
            <input
              onChange={handleCharacterChange}
              value={formValues.name}
              required
              type="text"
              id="name"
              name="name"
              maxLength={30}
              placeholder="Enter your name"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-medium text-gray-700 text-sm"
            >
              E-mail
            </label>
            <input
              required
              value={formValues.email}
              onChange={handleChanges}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 w-full"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block font-medium text-gray-700 text-sm"
            >
              Phone number
            </label>
            <input
              required
              value={formValues.phone}
              onChange={handleChanges}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 w-full"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 mt-8 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200 text-white"
        >
          Submit Reservation
        </button>
      </form>
    </div>
  );
}
export default BookingForm;
