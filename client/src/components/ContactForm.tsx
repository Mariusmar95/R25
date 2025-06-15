import {
  EmailOutlined,
  PhoneAndroidOutlined,
  WarningAmberOutlined,
  WatchLaterOutlined,
} from "@mui/icons-material";
import { useState } from "react";
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
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState("");

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
      console.log("Submitting complete", result);
      setIsSuccessfullySubmitted("Message sent successfully!");
      reset();
    } catch {
      setError("root", {
        message: "Message can't be sent",
      });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-12 min-h-screen">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="-top-40 -right-40 absolute bg-blue-400/10 blur-3xl rounded-full w-80 h-80"></div>
        <div className="-bottom-40 -left-40 absolute bg-indigo-400/10 blur-3xl rounded-full w-80 h-80"></div>
      </div>

      <div className="z-10 relative mx-auto px-4 container">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 shadow-2xl mb-6 rounded-3xl w-20 h-20">
            <EmailOutlined style={{ color: "white", width: 50, height: 50 }} />
          </div>
          <h1 className="bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-4 font-bold text-transparent text-5xl lg:text-6xl">
            Get In Touch
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600 text-lg leading-relaxed">
            Ready to connect? Reach out to us at{" "}
            <a
              href="tel:+4000213042167"
              className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              +4000213042167
            </a>{" "}
            or send us a message using the form below
          </p>
        </div>

        {/* Contact Form */}
        <div className="relative mx-auto max-w-4xl">
          <div className="bg-white/80 shadow-2xl backdrop-blur-sm p-8 lg:p-12 border border-white/20 rounded-3xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Name Field */}
              <div className="group">
                <label
                  htmlFor="name"
                  className="block mb-3 font-semibold text-gray-700 text-sm"
                >
                  Full Name
                </label>
                <div className="relative">
                  <input
                    {...register("name", {
                      required: "Name is required",
                    })}
                    type="text"
                    id="name"
                    name="name"
                    className="bg-gray-50/50 focus:bg-white px-4 py-4 border-2 border-gray-200 focus:border-blue-500 rounded-xl focus:outline-none w-full text-gray-800 transition-all duration-300 placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-focus-within:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
                </div>
                {errors.name && (
                  <div className="flex items-center mt-2 text-red-600 text-sm">
                    <WarningAmberOutlined />
                    {errors.name.message}
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div className="group">
                <label
                  htmlFor="email"
                  className="block mb-3 font-semibold text-gray-700 text-sm"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-50/50 focus:bg-white px-4 py-4 border-2 border-gray-200 focus:border-blue-500 rounded-xl focus:outline-none w-full text-gray-800 transition-all duration-300 placeholder-gray-400"
                    placeholder="Enter your email address"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-focus-within:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
                </div>
                {errors.email && (
                  <div className="flex items-center mt-2 text-red-600 text-sm">
                    <WarningAmberOutlined />
                    {errors.email.message}
                  </div>
                )}
              </div>

              {/* Message Field */}
              <div className="group">
                <label
                  htmlFor="message"
                  className="block mb-3 font-semibold text-gray-700 text-sm"
                >
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message:
                          "Message should be at least 10 characters long",
                      },
                    })}
                    id="message"
                    name="message"
                    rows={6}
                    className="bg-gray-50/50 focus:bg-white px-4 py-4 border-2 border-gray-200 focus:border-blue-500 rounded-xl focus:outline-none w-full text-gray-800 transition-all duration-300 resize-none placeholder-gray-400"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-focus-within:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
                </div>
                {errors.message && (
                  <div className="flex items-center mt-2 text-red-600 text-sm">
                    <WarningAmberOutlined />
                    {errors.message.message}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="group relative bg-gradient-to-r from-blue-600 hover:from-blue-700 disabled:from-gray-400 to-indigo-600 hover:to-indigo-700 disabled:to-gray-500 shadow-lg hover:shadow-xl px-8 py-4 rounded-xl w-full font-semibold text-white text-lg disabled:transform-none transition-all hover:-translate-y-0.5 duration-300 disabled:cursor-not-allowed transform"
                >
                  <span className="z-10 relative flex justify-center items-center gap-5">
                    {isSubmitting ? (
                      <>
                        <div className="border-b-2 border-blue-600 rounded-full w-8 h-9 animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>Send Message</>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-xl -skew-x-12 transition-transform -translate-x-full group-hover:translate-x-full duration-1000 transform"></div>
                </button>

                {errors.root && (
                  <div className="flex justify-center items-center bg-red-50 mt-4 p-3 border border-red-200 rounded-lg text-red-700 text-sm">
                    <WarningAmberOutlined />
                    {errors.root.message}
                  </div>
                )}
                {isSuccessfullySubmitted && (
                  <p className="flex justify-center items-center bg-green-50 mt-4 p-3 border border-green-200 rounded-lg text-green-700 text-sm">
                    {isSuccessfullySubmitted}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Additional Contact Info */}
          <div className="gap-6 grid md:grid-cols-3 mt-12">
            <div className="bg-white/60 backdrop-blur-sm p-6 border border-white/20 rounded-2xl text-center">
              <div className="flex justify-center items-center bg-blue-100 mx-auto mb-4 rounded-full w-12 h-12">
                <PhoneAndroidOutlined style={{ color: "blue" }} />
              </div>
              <h4 className="mb-2 font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-600">+4000213042167</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 border border-white/20 rounded-2xl text-center">
              <div className="flex justify-center items-center bg-green-100 mx-auto mb-4 rounded-full w-12 h-12">
                <EmailOutlined style={{ color: "green" }} />
              </div>
              <h4 className="mb-2 font-semibold text-gray-800">Email</h4>
              <p className="text-gray-600">contact@yoursite.com</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 border border-white/20 rounded-2xl text-center">
              <div className="flex justify-center items-center bg-purple-100 mx-auto mb-4 rounded-full w-12 h-12">
                <WatchLaterOutlined style={{ color: "purple" }} />
              </div>
              <h4 className="mb-2 font-semibold text-gray-800">
                Response Time
              </h4>
              <p className="text-gray-600">Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
