function BookingForm() {
  return (
    <div className="container mx-auto m-8 text-center bg-white p-6 rounded-md shadow-md mb-20">
      <form>
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
              type="date"
              id="date"
              name="date"
              placeholder="Select a date"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none w-full"
            />
          </div>
          <div>
            <label
              htmlFor="hour"
              className="block text-sm font-medium text-gray-700"
            >
              Hour
            </label>
            <input
              type="time"
              id="hour"
              name="hour"
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
              type="number"
              id="numOfPersons"
              name="numOfPersons"
              placeholder="Enter the number of persons"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <div className="flex items-center gap-4 mt-2 justify-center  ">
              <input type="radio" id="inside" name="location" value="inside" />
              <label
                htmlFor="inside"
                className="text-sm font-medium text-gray-700"
              >
                Inside
              </label>

              <input
                type="radio"
                id="outside"
                name="location"
                value="outside"
              />
              <label
                htmlFor="outside"
                className="text-sm font-medium text-gray-700"
              >
                Outside
              </label>
            </div>
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
              type="text"
              id="name"
              name="name"
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
