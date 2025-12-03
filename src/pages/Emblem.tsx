import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Emblem = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary font-semibold mb-6 hover:underline hover:opacity-80"
          aria-label="Go back"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-primary mb-3">
            Emblem
          </h1>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-card p-8 rounded-xl shadow-lg"
        >
            {/* Founder Image */}
            <div className="flex justify-center mb-10">
              <img
                src="/logo.jpg"
                alt="Founder of Walkers Movement"
                className="w-60 h-60 object-cover rounded-full border border-gray-300 shadow-md hover:scale-105 transition-transform duration-500"
              />
            </div>
          <div className="prose prose-lg max-w-none text-black leading-relaxed">

            <p>
              The name <strong>“Walker (Wr)”</strong> symbolizes a healthy, cheerful person. 
              As a noun, it is most frequently used to designate the whole organization. 
              It may also mean ideals and principles of the organization.
            </p>

            <p>
              <strong>“Walkers”</strong> is used only as a noun to designate a member of Walker Club 
              and in the name of the official magazine called <em>“The Walker”.</em>
            </p>

            <p>
              No Walkers Club or group of Walkers Clubs should adopt and operate under 
              any name other than that under which it or they are organized under 
              the constitution of Walkers International.
            </p>

            <h3 className="text-primary font-semibold mt-8">
              The Official Emblem
            </h3>

            <p>
              The Official Emblem of Walkers International consists of a <strong>Globe</strong>, 
              around which <strong>“Walkers International”</strong> is inscribed at the top, 
              and <strong>“Arogyame Maha Bhagyam”</strong> in Sanskrit & Devanagari script 
              at the bottom with three stars representing <strong>health, fellowship, and service</strong>.
            </p>

            <p>
              At the bottom, two <strong>olive branches</strong> are placed on either side to indicate our 
              ultimate aim of world peace and universal prosperity through health for all, 
              with the year of establishment <strong>“1986”</strong> inscribed between them.
            </p>

            <h3 className="text-primary font-semibold mt-8">
              Colours of the Emblem
            </h3>

            <ul className="list-disc pl-5">
              <li>Olive Branches — <strong>Green</strong></li>
              <li>Globe & Outer Circle — <strong>Royal Blue</strong></li>
              <li>All remaining elements — <strong>Gold</strong></li>
            </ul>

            <h3 className="text-primary font-semibold mt-8">
              Usage
            </h3>

            <p>
              Every member of the Club shall be known as <strong>Walker (Wr)</strong> and is encouraged 
              to wear the official emblem badge or insignia of Walkers International.
            </p>

            <p>
              The use of the Walkers Emblem is authorized only on stationery 
              and printed matter issued by Walkers International or its Member Clubs.
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Emblem;
