import BookingForm from "../components/BookingForm";

const Booking = () => {
  return (
    <div>
      <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[50vh] ">
        <img
          className="w-full h-full object-cover"
          src="src/assets/banner2.jpg"
          alt="banner"
        />
      </div>
      <div>
        <BookingForm />
      </div>
    </div>
  );
};

export default Booking;
