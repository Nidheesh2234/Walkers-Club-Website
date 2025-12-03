import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CurrentPresident = () => {
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
          <h1 className="text-4xl font-bold text-primary">
            Current President
          </h1>

          <p className="text-lg text-muted-foreground mt-2">
            Walkers Club Visakhapatnam
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-card p-8 rounded-2xl shadow-lg"
        >
         <div className="flex justify-center mb-10">
              <img
                src="/Prabha.jpg"
                alt="Founder of Walkers Movement"
                className="w-60 h-60 object-cover rounded-full border-4 border-yellow-500 shadow-xl shadow-yellow-200/40 hover:scale-105 transition-transform duration-500"

              />
            </div>

          {/* Profile Section */}
          <div className="prose prose-lg max-w-none leading-relaxed text-black">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Profile
            </h2>

            <p>
              <strong>Wr. M. Prabhavathi, MGF</strong><br />
              <strong>Platinum Donor</strong><br />
              <strong>Education:</strong> High School & Intermediate – Guntur & Khammam, 
              Diploma in Electronics & Communication Engineering – Guntur.
            </p>

            <p>
              Wr. M. Prabhavathi was born on <strong>13th October 1959</strong> in 
              Jaggayyapeta, Krishna District. She completed her schooling in Guntur, 
              Intermediate in Khammam, and Diploma (ECE) in Guntur.
            </p>

            <p>
              She was the team leader for her school's Kho-Kho team and won many inter-school 
              competitions. She was an active member of the NCC, participating in several 
              national camps. During her college years, she served as Cultural Secretary and 
              led numerous cultural events.
            </p>

            <p>
              She married <strong>Dr. M. Syam Mohan Rao (M.D., D.G.O.)</strong> on 
              1st October 1981, who served as Professor & HOD (Obstetrics & Gynaecology) 
              at Rangaraya Medical College, Kakinada.
            </p>

            <p>
              She is blessed with two children:
            </p>

            <ul className="list-disc pl-6">
              <li>
                <strong>M. Srilekha (MBA)</strong> – Marketing Manager, Bangalore
              </li>
              <li>
                <strong>Dr. M. Sri Harsha (MD Anesthesiology)</strong> – Professor, GEMS Medical College  
                <br />
                Married to <strong>Dr. P. P. Persy (MD Anesthesiology)</strong>, Medical Officer Specialist
              </li>
            </ul>

            <p>
              She also has a granddaughter, <strong>M. Maanvita (B.Tech)</strong>.
            </p>

            <p>
              She joined Walkers Organisation on <strong>1st January 2008</strong> as Club Treasurer,  
              later serving as Secretary and President. She held several district positions 
              including ZC, Deputy Governor, and District Treasurer (103).
            </p>

            <p>
              She entered Walkers International as Chairperson, later served as Regional Councillor, 
              Governor, Area Vice-President, and is now the <strong>Elect IP 2024</strong>.
            </p>

            <h3 className="text-primary font-semibold mt-6">Achievements</h3>

            <ul className="list-disc pl-6">
              <li>Executive Member – Sankar Matham</li>
              <li>Member – Bharat Vikas Parishad</li>
              <li>President – Residential Welfare Association</li>
              <li>Best President W.I. Award – 2012</li>
              <li>Best R.C. Award – 2013</li>
              <li>Trust Board Member – 2017</li>
              <li>Excellent A.V.P. – 2018</li>
              <li>Vimala Devi Award – 2019</li>
              <li>Best Coordinator – 2021</li>
              <li>Best Governor W.I. Award – 2016</li>
              <li>Gold Donor – 2018</li>
              <li>Best Leadership – 2019</li>
              <li>Best Chairperson Award – 2020</li>
            </ul>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentPresident;
