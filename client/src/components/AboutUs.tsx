export default function AboutUs() {
  return (
    <div>
      <div className="bg-white mx-auto px-6 py-16 max-w-4xl min-h-screen">
        {/* Header Section */}
        <div className="mb-16 pb-12 border-yellow-600 border-b-2 text-center">
          <h1 className="mb-4 font-light text-gray-800 text-5xl tracking-wider">
            Lemon
          </h1>
          <p className="text-gray-600 text-xl italic">
            Fresh flavors, timeless tradition
          </p>
        </div>

        {/* Main Story */}
        <div className="space-y-12">
          <section>
            <h2 className="mb-8 font-normal text-yellow-600 text-3xl">
              Our Story
            </h2>
            <p className="mb-6 text-gray-700 text-lg leading-relaxed">
              Lemon began in 2018 with a simple vision: to create a place where
              fresh, vibrant flavors meet warm hospitality. Our founders,
              inspired by Mediterranean traditions and a love for quality
              ingredients, transformed a small corner space into the welcoming
              restaurant you see today.
            </p>
            <p className="mb-6 text-gray-700 text-lg leading-relaxed">
              What started as a dream to bring authentic, fresh cuisine to our
              community has grown into a beloved local gathering place. We
              believe that great food brings people together, and every dish we
              serve reflects our commitment to quality, freshness, and the joy
              of sharing a meal.
            </p>
          </section>

          {/* Closing */}
          <div className="mt-16 text-center">
            <p className="mb-4 text-gray-700 text-xl">
              Join us at Lemon, where every meal is made with care and served
              with a smile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
