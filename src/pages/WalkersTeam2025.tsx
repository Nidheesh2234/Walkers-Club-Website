import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const WalkersTeam2025 = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const team = [
    { id: 1, name: "Wr. Praveen Kumar Sankhla", designation: "President", mobile: "9849128428" },
    { id: 2, name: "Wr. DV Balaji Kumar", designation: "IPP", mobile: "9848460077" },
    { id: 3, name: "Wr. Susarla Srinivas", designation: "Vice President 1", mobile: "9849116261" },
    { id: 4, name: "Wr. Dantuluri Visweswara Verma", designation: "Vice President 2", mobile: "9177119999" },
    { id: 5, name: "Wr. M Subha", designation: "Secretary", mobile: "9848322655" },
    { id: 6, name: "Wr. CA S Murali Krishna", designation: "Treasurer", mobile: "9848323888" },
    { id: 7, name: "Wr. Abhishek Dadu", designation: "Editor", mobile: "9000252288" },
    { id: 8, name: "Wr. S N Swamy", designation: "Executive Member", mobile: "9848197565" },
    { id: 9, name: "Wr. Vineet Jain", designation: "Executive Member", mobile: "9848198743" },
    { id: 10, name: "Wr. Gyan Chand Patni", designation: "Executive Member", mobile: "9346348481" },
    { id: 11, name: "Wr Ashok Gothi", designation: "Executive Member", mobile: "9491000555" },
    { id: 12, name: "Wr M V Saraya", designation: "Executive Member", mobile: "9848193640" },
    { id: 13, name: "Wr Grandhi Vishnu Murthy", designation: "Executive Member", mobile: "9848185385" },
    { id: 14, name: "Wr. Maddi Venkata Satya Ramayya", designation: "Joint Secretary-1", mobile: "9848068618" },
    { id: 15, name: "Wr WV Rammohan", designation: "Executive Member", mobile: "9491086565" },
    { id: 16, name: "Wr Dinesh Agarwal", designation: "Executive Member", mobile: "9348017009" },
    { id: 17, name: "Wr Resapu Jyothi", designation: "Executive Member", mobile: "9848503187" },
    { id: 18, name: "Wr C Nirupama", designation: "Executive Member", mobile: "9395374225" },
    { id: 19, name: "Wr Vinnakota Durga Rao (Ramesh)", designation: "Executive Member", mobile: "9849112421" },
    { id: 20, name: "Wr Bijay Kumar Agarwal", designation: "Executive Member", mobile: "9849166060" },
    { id: 21, name: "Wr S Kaliprasad", designation: "Executive Member", mobile: "9703204557" },
    { id: 22, name: "Wr Y Srinivas Kumar", designation: "Executive Member", mobile: "9849437072" },
    { id: 23, name: "Wr B Vinay Gandhi", designation: "Executive Member", mobile: "8008700815" },
    { id: 24, name: "Wr Geeta Gowra", designation: "Executive Member", mobile: "9949922336" },
    { id: 25, name: "Wr G Vishwanath", designation: "Executive Member", mobile: "9848193203" },
    { id: 26, name: "Wr G S Raju", designation: "Executive Member", mobile: "9848188778" },
    { id: 27, name: "Wr. Ganesh Gothi", designation: "Executive Member", mobile: "9848140873" },
    { id: 28, name: "Wr. Neti Narasimha Rao", designation: "Executive Member", mobile: "8885099998" },
    { id: 29, name: "Wr. P.Srinivasa Rao", designation: "Executive Member", mobile: "9849507288" },
    { id: 30, name: "Wr. Y.V.Viswanath", designation: "Executive Member", mobile: "9849116444" },
    { id: 31, name: "Wr. Nalluri Nookaraju", designation: "Executive Member", mobile: "9441126829" },
    { id: 32, name: "Wr. N.Ramachandra Rao", designation: "Executive Member", mobile: "9848106009" },
    { id: 33, name: "Wr. V T N Gupta", designation: "Executive Member", mobile: "9030260123" },
    { id: 34, name: "Wr. N.Mrutynjaya Rao", designation: "Executive Member", mobile: "9848159252" },
    { id: 35, name: "Wr. M.Vijay Kumar", designation: "Executive Member", mobile: "78939911448" },
    { id: 36, name: "Wr. M.someswara Rao", designation: "Executive Member", mobile: "9848123117" },
    { id: 37, name: "Wr. M.Venkat rao", designation: "Past President", mobile: "9848193229" },
    { id: 38, name: "Wr. A S N Prasad", designation: "Past President", mobile: "9848196300" },
    { id: 39, name: "Wr. A H N Venkat rao", designation: "Past President", mobile: "9848194260" },
    { id: 40, name: "Wr. Kandala Srinivasa Rao", designation: "Past President", mobile: "9848011448" },
    { id: 41, name: "Wr. K Ratan Kumar", designation: "Past President", mobile: "9848184345" },
    { id: 42, name: "Wr. G Ssantana Krishna", designation: "Past President", mobile: "9440788938" },
    { id: 43, name: "Wr. K V Gupta", designation: "Past President", mobile: "9848608185" },
    { id: 44, name: "Wr. A B Narasinga Rao", designation: "Past President", mobile: "9866315486" },
    { id: 45, name: "Wr. R Muralidharan", designation: "Past President", mobile: "9490545499" },
    { id: 46, name: "Wr.. C Veerabhadra Rao", designation: "Past President", mobile: "9849717064" },
    { id: 47, name: "Wr. Kankatala Prabhakar", designation: "Past President", mobile: "9848944333" },
    { id: 48, name: "Wr. V V Narayana Rao", designation: "Past President", mobile: "9848195523" },
    { id: 49, name: "Wr. B V Nageswara Rao", designation: "Past President", mobile: "9848272815" },
    { id: 50, name: "Wr. Boddu Raghu", designation: "Past President", mobile: "9247158728" },
    { id: 51, name: "Wr. Varanasi V Narasimham", designation: "Past President", mobile: "9346331000" },
    { id: 52, name: "Wr. V Peda Somulu", designation: "Past President", mobile: "9440156996" },
    { id: 53, name: "Wr. Rolland Williams", designation: "Past President", mobile: "9848185111" },
    { id: 54, name: "Wr. M.Ramjee", designation: "Past President", mobile: "9848040655" },
    { id: 55, name: "Wr. Mayank Kumari Deo", designation: "Past President", mobile: "9490459341" },
    { id: 56, name: "Wr. Kamal Baid", designation: "Past President", mobile: "8826074183" },
    { id: 57, name: "Wr. K Sattiraju", designation: "Past President", mobile: "9440306333" },
    { id: 58, name: "Wr. T V T Gandhi", designation: "Past President", mobile: "9246640024" },
  ];

  const filtered = team.filter((item) =>
    `${item.name} ${item.designation} ${item.mobile}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="pt-4 pb-16 bg-background text-foreground">
      <div className="container mx-auto px-4">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary font-semibold mb-6 hover:underline hover:opacity-80"
        >
          <ArrowLeft size={20} /> Back
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-0"
        >

          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-primary mb-2">
              Walkers Club Visakhapatnam
            </h1>
            <p className="text-lg text-black">2025 Board Members</p>
          </div>

          {/* SEARCH BAR */}
          <div className="max-w-md mx-auto mb-6">
            <input
              type="text"
              placeholder="Search by Name, Designation, or Mobile..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border shadow-sm focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto shadow rounded-lg bg-card">
            <table className="min-w-full border-collapse text-sm md:text-base">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="p-3 text-left">S.No</th>
                  <th className="p-3 text-left">Name of the Walker</th>
                  <th className="p-3 text-left">Designation</th>
                  <th className="p-3 text-left">Mobile Number</th>
                </tr>
              </thead>

              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-4 text-center text-muted-foreground">
                      No matching results found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((row) => (
                    <tr key={row.id} className="border-b hover:bg-muted/40">
                      <td className="p-3">{row.id}</td>
                      <td className="p-3">{row.name}</td>
                      <td className="p-3">{row.designation}</td>
                      <td className="p-3">{row.mobile}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default WalkersTeam2025;
