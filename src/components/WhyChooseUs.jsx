import { FaUserTie, FaPaintBrush, FaChartLine } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="px-10 py-24 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Why Choose Us?
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-16">
        We combine experience, creativity, and strategy to deliver the best
        results for our clients.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        
        {/* Card 1 */}
        <div className="p-8 shadow rounded-lg">
          <FaUserTie className="text-blue-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Professional Team</h3>
          <p className="text-gray-600 mt-3">
            Skilled experts with years of industry experience.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-8 shadow rounded-lg">
          <FaPaintBrush className="text-blue-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Creative Design</h3>
          <p className="text-gray-600 mt-3">
            Clean, modern, and user-friendly UI designs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8 shadow rounded-lg">
          <FaChartLine className="text-blue-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Marketing Strategy</h3>
          <p className="text-gray-600 mt-3">
            Data-driven strategies for business growth.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
