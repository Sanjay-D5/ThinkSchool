import { motion } from "framer-motion";
import { testimonials } from "../../constents";

const Testimonials = () => {
  return (
    <div className="overflow-hidden bg-black text-white py-10">
      <h1 className="text-center mb-4">Trusted by Millions of hearts</h1>
      <motion.div
        className="flex space-x-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        style={{ display: "flex", minWidth: "max-content" }}
      >
        {/* Duplicate testimonials for smooth looping */}
        {[...testimonials, ...testimonials].map((t, index) => (
          <div key={index} className="min-w-[200px] p-2 bg-gray-900 rounded-lg">
            <img src={t.url} alt={t.id} className="w-auto h-16 rounded-lg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
