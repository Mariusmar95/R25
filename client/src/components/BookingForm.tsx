import {
  CalendarMonthOutlined,
  EmailOutlined,
  LocalPhoneOutlined,
  PersonAddOutlined,
  PersonOutline,
  WarningAmberOutlined,
} from "@mui/icons-material";
import { ChangeEvent, useState } from "react";

type BookingFormType = {
  date: string;
  time: string;
  numOfPersons: string;
  name: string;
  email: string;
  phone: string;
};

function BookingForm() {
  const [formValues, setFormValues] = useState<BookingFormType>({
    date: "",
    time: "",
    numOfPersons: "",
    name: "",
    email: "",
    phone: "",
  });

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>("");
  {
    /*Allows only characters */
  }
  const handleCharacterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: inputValue,
    }));
  };
  {
    /*Numbers only & between 1-20*/
  }
  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    let numericValue = inputValue.slice(0, 20);
    numericValue =
      e.target.name === "numOfPersons" && numericValue !== ""
        ? Math.min(Math.max(Number(numericValue), 1), 20).toString()
        : numericValue;
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: numericValue,
    }));
  };

  const handleChanges = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  {
    /*Send to db */
  }
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
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
      console.log("Submitting complete", result);
      setError(null);
      setIsSuccessfullySubmitted("Message sent successfully!");
    } catch (err) {
      setIsSuccessfullySubmitted("");
      setError("Error submitting form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12 min-h-screen">
      {/* Background*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="top-20 left-10 absolute bg-blue-200/20 blur-3xl rounded-full w-72 h-72"></div>
        <div className="right-10 bottom-20 absolute bg-cyan-200/20 blur-3xl rounded-full w-96 h-96"></div>
        <div className="top-1/2 left-1/2 absolute bg-indigo-200/10 blur-3xl rounded-full w-80 h-80 -translate-x-1/2 -translate-y-1/2 transform"></div>
      </div>

      <div className="z-10 relative mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex justify-center items-center bg-gradient-to-r from-blue-500 to-cyan-600 shadow-2xl mb-6 rounded-3xl w-20 h-20">
            <CalendarMonthOutlined
              style={{ color: "white", width: 50, height: 50 }}
            />
          </div>
          <h1 className="bg-clip-text bg-gradient-to-r from-slate-700 via-blue-600 to-cyan-600 mb-4 font-bold text-transparent text-5xl lg:text-6xl">
            Reserve Your Table
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600 text-lg leading-relaxed">
            Ready to enjoy an unforgettable dining experience? Call us at{" "}
            <span className="font-semibold text-blue-600">
              +400 0213 042 167
            </span>{" "}
            or book your table easily using the form below.
          </p>
        </div>

        {/*Container */}
        <div className="bg-white/95 shadow-2xl backdrop-blur-sm border border-white/50 rounded-3xl overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 lg:p-12">
            {/*Reservation Details*/}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-cyan-500 mr-4 rounded-full w-8 h-8">
                  <span className="font-bold text-white text-sm">1</span>
                </div>
                <h3 className="font-bold text-slate-800 text-3xl">
                  Reservation Details
                </h3>
              </div>

              <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
                {/*Date*/}
                <div className="group">
                  <label className="block mb-3 font-semibold text-slate-700 text-sm">
                    Select Date
                  </label>
                  <div className="relative">
                    <input
                      required
                      value={formValues.date}
                      onChange={handleChanges}
                      type="date"
                      name="date"
                      className="bg-slate-50/50 focus:bg-white px-4 py-4 border-2 border-slate-200 focus:border-blue-500 rounded-xl focus:outline-none w-full text-slate-800 transition-all duration-300"
                    />
                  </div>
                </div>

                {/*Time*/}
                <div className="group">
                  <label className="block mb-3 font-semibold text-slate-700 text-sm">
                    Select Time
                  </label>
                  <div className="relative">
                    <input
                      required
                      value={formValues.time}
                      onChange={handleChanges}
                      type="time"
                      name="time"
                      className="bg-slate-50/50 focus:bg-white px-4 py-4 border-2 border-slate-200 focus:border-blue-500 rounded-xl focus:outline-none w-full text-slate-800 transition-all duration-300"
                    />
                  </div>
                </div>

                {/*Size*/}
                <div className="group">
                  <label className="block mb-3 font-semibold text-slate-700 text-sm">
                    Party Size
                  </label>
                  <div className="relative">
                    <input
                      required
                      value={formValues.numOfPersons}
                      onChange={handleNumberChange}
                      type="number"
                      name="numOfPersons"
                      min="1"
                      max="20"
                      placeholder="1"
                      className="bg-slate-50/50 focus:bg-white px-4 py-4 border-2 border-slate-200 focus:border-blue-500 rounded-xl focus:outline-none w-full text-slate-800 transition-all duration-300 placeholder-slate-400"
                    />
                    <div className="top-1/2 right-8 absolute text-slate-800 -translate-y-1/2 transform">
                      <PersonAddOutlined />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Border*/}
            <div className="relative mb-12">
              <div className="absolute inset-0 flex items-center">
                <div className="border-slate-200 border-t w-full"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-white px-4">
                  <div className="bg-cyan-400 rounded-full w-2 h-2"></div>
                </div>
              </div>
            </div>

            {/*Contact Information*/}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <div className="flex justify-center items-center bg-gradient-to-r from-cyan-500 to-indigo-500 mr-4 rounded-full w-8 h-8">
                  <span className="font-bold text-white text-sm">2</span>
                </div>
                <h3 className="font-bold text-slate-800 text-3xl">
                  Contact Information
                </h3>
              </div>

              <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
                {/*Name*/}
                <div className="group md:col-span-2">
                  <label className="block mb-3 font-semibold text-slate-700 text-sm">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      required
                      value={formValues.name}
                      onChange={handleCharacterChange}
                      type="text"
                      name="name"
                      maxLength={30}
                      placeholder="Enter your full name"
                      className="bg-slate-50/50 focus:bg-white px-4 py-4 border-2 border-slate-200 focus:border-cyan-500 rounded-xl focus:outline-none w-full text-slate-800 transition-all duration-300 placeholder-slate-400"
                    />
                    <div className="top-1/2 right-4 absolute text-slate-800 -translate-y-1/2 transform">
                      <PersonOutline />
                    </div>
                  </div>
                </div>

                {/*Email*/}
                <div className="group">
                  <label className="block mb-3 font-semibold text-slate-700 text-sm">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      required
                      value={formValues.email}
                      onChange={handleChanges}
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="bg-slate-50/50 focus:bg-white px-4 py-4 border-2 border-slate-200 focus:border-cyan-500 rounded-xl focus:outline-none w-full text-slate-800 transition-all duration-300 placeholder-slate-400"
                    />
                    <div className="top-1/2 right-4 absolute text-slate-800 -translate-y-1/2 transform">
                      <EmailOutlined />
                    </div>
                  </div>
                </div>

                {/*Phone*/}
                <div className="group">
                  <label className="block mb-3 font-semibold text-slate-700 text-sm">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      required
                      value={formValues.phone}
                      onChange={handleNumberChange}
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                      className="bg-slate-50/50 focus:bg-white px-4 py-4 border-2 border-slate-200 focus:border-cyan-500 rounded-xl focus:outline-none w-full text-slate-800 transition-all duration-300 placeholder-slate-400"
                    />
                    <div className="top-1/2 right-4 absolute text-slate-800 -translate-y-1/2 transform">
                      <LocalPhoneOutlined />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Submit*/}
            <div className="pt-8 text-center">
              <button
                type="submit"
                className="group relative bg-gradient-to-r from-blue-500 hover:from-blue-600 via-cyan-500 hover:via-cyan-600 to-indigo-500 hover:to-indigo-600 shadow-2xl hover:shadow-3xl px-12 py-4 rounded-2xl min-w-[280px] font-bold text-white text-lg transition-all hover:-translate-y-1 duration-300 transform"
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
              {error && (
                <div className="flex justify-center items-center bg-red-50 mt-4 p-3 border border-red-200 rounded-lg text-red-700 text-sm">
                  <WarningAmberOutlined />
                  {error}
                </div>
              )}
              {isSuccessfullySubmitted && (
                <p className="flex justify-center items-center bg-green-50 mt-4 p-3 border border-green-200 rounded-lg text-green-700 text-sm">
                  {isSuccessfullySubmitted}
                </p>
              )}

              <p className="mt-6 text-slate-500 text-sm">
                We'll send you a confirmation email within 10 minutes
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default BookingForm;
