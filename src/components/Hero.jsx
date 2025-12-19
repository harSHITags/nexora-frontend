 import heroIMG from "../assets/hero.png";
 const Hero = () => {
  return (
    <section className="bg-blue-50 px-10 py-24 grid md:grid-cols-2 gap-12 items-center">
      
      {/* Text */}
      <div>
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Consultation, <br />
          Design & <span className="text-blue-600">Marketing</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          We deliver innovative solutions that help businesses grow and
          succeed in the digital world.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600">
            Free Consultation
          </button>
          <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded hover:bg-blue-100">
            Learn More
          </button>
        </div>
      </div>

      {/* Image placeholder */}
      
  <img
    src={heroIMG}
    alt="Business Team"
     className= "rounded-lg shadow-lg"
  />
     
    </section>
  );
};

export default Hero;
