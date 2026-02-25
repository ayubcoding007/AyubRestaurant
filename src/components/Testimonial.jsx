export default function Testimonial() {
  const starImg =
    "https://cdn-icons-png.flaticon.com/512/616/616489.png";

  return (
    <div className="my-16 flex flex-wrap items-center justify-center gap-8 pt-14">

      {/* Muslim Boy */}
      <div className="w-80 border border-gray-200 pb-6 rounded-xl bg-white shadow-md hover:shadow-lg transition">
        <div className="flex flex-col items-center px-5 py-4 relative">
          <img
            className="h-24 w-24 absolute -top-14 rounded-full object-cover border-4 border-white"
            src="https://plus.unsplash.com/premium_photo-1683133992051-daa8ff45115e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mohammad Ayaan"
          />
          <div className="pt-10 text-center">
            <h1 className="text-lg font-semibold text-gray-800">
              Mohammad Ayaan
            </h1>
            <p className="text-sm text-gray-500">College Student</p>
          </div>
        </div>

        <p className="text-gray-600 px-6 text-center leading-relaxed">
          The food quality here is outstanding, and the flavors are perfectly
          balanced. A great place to hang out with friends and enjoy good meals
          without spending too much.
        </p>

        <div className="flex justify-center pt-4 gap-1">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={starImg} alt="star" className="w-4 h-4" />
          ))}
        </div>
      </div>

      {/* Sikh Boy */}
      <div className="w-80 border border-gray-200 pb-6 rounded-xl bg-white shadow-md hover:shadow-lg transition">
        <div className="flex flex-col items-center px-5 py-4 relative">
          <img
            className="h-24 w-24 absolute -top-14 rounded-full object-cover border-4 border-white"
            src="https://images.unsplash.com/photo-1571712274202-3b543ceb1536?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Harpreet Singh"
          />
          <div className="pt-10 text-center">
            <h1 className="text-lg font-semibold text-gray-800">
              Harpreet Singh
            </h1>
            <p className="text-sm text-gray-500">Fitness Enthusiast</p>
          </div>
        </div>

        <p className="text-gray-600 px-6 text-center leading-relaxed">
          I really like the healthy food options available here. The service is
          quick, the staff is polite, and the ambience feels calm and premium.
        </p>

        <div className="flex justify-center pt-4 gap-1">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={starImg} alt="star" className="w-4 h-4" />
          ))}
        </div>
      </div>

      {/* Sikh Boy */}
      <div className="w-80 border border-gray-200 pb-6 rounded-xl bg-white shadow-md hover:shadow-lg transition">
        <div className="flex flex-col items-center px-5 py-4 relative">
          <img
            className="h-24 w-24 absolute -top-14 rounded-full object-cover border-4 border-white"
            src="https://images.unsplash.com/photo-1713947503360-7a63bfb8c293?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Alex"
          />
          <div className="pt-10 text-center">
            <h1 className="text-lg font-semibold text-gray-800">
              Alex
            </h1>
            <p className="text-sm text-gray-500">Startup Founder</p>
          </div>
        </div>

        <p className="text-gray-600 px-6 text-center leading-relaxed">
          This is my go-to place for client meetings. The environment is
          professional, the food presentation is impressive, and the overall
          experience feels truly premium.
        </p>

        <div className="flex justify-center pt-4 gap-1">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={starImg} alt="star" className="w-4 h-4" />
          ))}
        </div>
      </div>
    </div>
  );
}