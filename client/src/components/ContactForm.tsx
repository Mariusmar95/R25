import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Failed to submit");
      }
      const result = await res.json();
      console.log("Success", result);
    } catch {
      setError("root", {
        message: "Invalid form ",
      });
    }
  };

  return (
    <div
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto py-8 text-center container"
    >
      <div className="mx-auto py-8">
        <h3 className="mb-8 font-semibold text-3xl text-center">Contact Us</h3>
        <p>
          Need to contact us? You can do it either by calling us at the number
          +4000213042167 or you can do it by completing the adjacent form
        </p>
      </div>
      <div className="bg-white shadow-md mx-auto mb-20 p-6 rounded-md width-lg">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold text-gray-700">
              Name
            </label>
            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              id="name"
              name="name"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              placeholder="Your Name"
            />
            {errors.name && (
              <div className="text-red-700">{errors.name.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              id="email"
              name="email"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              placeholder="Your Email"
            />
            {errors.email && (
              <div className="text-red-700">{errors.email.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block font-semibold text-gray-700"
            >
              Message
            </label>
            <textarea
              {...register("message", {
                required: "Message is required",
              })}
              id="message"
              name="message"
              rows={4}
              className="px-3 py-2 border border-gray-300 rounded-md w-full resize-none"
              placeholder="Your Message"
            ></textarea>
            {errors.message && (
              <div className="text-red-700">{errors.message.message}</div>
            )}
          </div>

          <div className="text-center">
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md font-semibold text-white"
            >
              {isSubmitting ? "Loading" : "Submit"}
            </button>
            {errors.root && (
              <div className="text-red-700">{errors.root.message}</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
