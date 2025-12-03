import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const History = () => {
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
            History
          </h1>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-card p-8 rounded-xl shadow-lg"
        >
          <div className="prose prose-lg max-w-none leading-relaxed text-black">

            <h3 className="text-primary font-semibold">WALKERS INTERNATIONAL</h3>

            <p>
              Walkers International was established by a great visionary 
              <strong> late Wr. Sunkari Alwar Das</strong> in the year 1986 with the assistance of 
              <strong> Wr. A. S. N. Prasad</strong>, a great businessman, as Secretary General.
            </p>

            <p>
              In 1992, <strong>late Wr. J. L. Toshniwal</strong> of Vizianagaram joined the organization. 
              He laid a firm foundation between 1995 and 1998 by starting several clubs, 
              serving two years as Vice-President and two years as President. 
              With the formation of some clubs abroad, Walkers International was officially 
              registered as an international organization at Vizianagaram.
            </p>

            <p>
              In 1999, <strong>Wr. A. S. N. Prasad</strong> became President and introduced MGFs 
              who contribute ₹10,000 to the Walkers Foundation Trust and are honored at conventions.
            </p>

            <p>
              The headquarters initially functioned at the founder’s residence.  
              In 2001, the founder provided a rent-free permanent office in the IIAM complex and 
              appointed a new Hon. Secretary, later redesignated as Secretary General, whose term 
              was extended multiple times.
            </p>

            <p>
              The organization has <strong>3 Areas, 9 Districts (excluding foreign clubs), 
              and 15 Regions</strong>. Elections are held annually. There are 
              <strong>589 clubs</strong> with generally smooth elections except contests in 2000 and 2005.
            </p>

            <p>
              Every President contributed significantly to the growth of MGFs:
            </p>

            <ul className="list-disc pl-6">
              <li>Wr. B. B. Shah (2004) — enrolled 10 MGFs</li>
              <li>Wr. D. Sitharamaraju — increased to 16</li>
              <li>Wr. S. H. Krishna Rao — opened more clubs & reached 26 MGFs</li>
              <li>Wr. K. Ramanandham — enrolled 31 MGFs and crossed 100 clubs</li>
              <li>Dr. Wr. V. Paratpara Rao — enrolled 53 MGFs, 1 sustaining member, and contributed ₹70,000</li>
              <li>Wr. Dr. P. S. Sarma — enrolled 26 MGFs</li>
            </ul>

            <p>
              The MGF count rose to <strong>228</strong> and Fixed Deposit corpus exceeded 
              <strong> ₹24,86,986</strong>, expected to cross ₹26 lakhs by year-end.
            </p>

            <p>
              In 2005, the medallion design was changed and the cost to honor each MGF reached ₹1,000.  
              Due to rising costs, interest from the Foundation Trust began to be used.
            </p>

            <p>
              A Council of Past Presidents was formed with expanded constitutional powers.  
              The Walkers Foundation Trust is managed by <strong>five trustees</strong> with 
              <strong>Wr. A. S. N. Prasad</strong> as Managing Trustee.
            </p>

            <p>
              Later, one MGF from each area and a Vice-President nominated by the President were 
              added to strengthen the Trust.
            </p>

            <p>
              The Trust Deed was revised so that interest supports health activities, disaster relief, 
              and social services:
            </p>

            <ul className="list-disc pl-6">
              <li>2008 — ₹50,000 given to cyclone relief in Orissa</li>
              <li>2009 — ₹25,000 spent on Yoga training and medical camps</li>
            </ul>

            <p>
              In 2008, the headquarters added a computer and internet facilities.
            </p>

            <p>
              <strong>Wr. Dr. E. Padmanabha Rao</strong>, President of 2010 from Berhampur (Orissa), 
              enrolled 36 MGFs and aimed for 24 more. He initiated financial help for families of 
              HIV/AIDS patients, allocating ₹50,000.
            </p>

            <p>
              <strong>Wr. A. H. N. Venkata Rao</strong>, President of the Silver Jubilee Year (2011), 
              hails from Visakhapatnam with notable experience in Rotary, Jaycees International, 
              and Y's Men International.
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default History;
