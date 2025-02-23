function ContactForm() {
  return (
    <div className="container mx-auto py-8 text-center">
      <div className=" mx-auto py-8">
        <h3 className="text-3xl font-semibold text-center mb-8">Contact Us</h3>
        <p>
          Need to contact us? You can do it either by calling us at the number
          +4000213042167 or you can do it by completing the adjacent form
        </p>
      </div>
      <div className=" width-lg mx-auto bg-white p-6 rounded-md shadow-md mb-20">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full border border-gray-300 rounded-md py-2 px-3 resize-none"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
