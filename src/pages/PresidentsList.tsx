import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PresidentsList = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const presidents = [
    { id: 37, name: "Wr. Balaji Kumar", year: "2024" },
    { id: 36, name: "Wr. K. Sattiraju", year: "2023" },
    { id: 35, name: "Wr. T.V.T Gandhi", year: "2022" },
    { id: 34, name: "Wr. Kamal Baid", year: "2021" },
    { id: 33, name: "Wr. Mayank Kumari Deo", year: "2020" },
    { id: 32, name: "Wr. Dr. Maddula Ramjee", year: "2019" },
    { id: 31, name: "Wr. Rolland Williams", year: "2018" },
    { id: 30, name: "Wr. Dr. V. Pedasomulu", year: "2017" },
    { id: 29, name: "Wr. Boddu Raghu", year: "2016" },
    { id: 28, name: "Wr. V. Narasimham", year: "2015" },
    { id: 27, name: "Wr. V. Lakhmana Rao (Late)", year: "2014" },
    { id: 26, name: "Wr. B.V. Nageswara Rao", year: "2013" },
    { id: 25, name: "Wr. G.V. Ratnam (Late)", year: "2012" },
    { id: 24, name: "Wr. Ch. Surya Rao (Late)", year: "2011" },
    { id: 23, name: "Wr. K. Prabhakar", year: "2010" },
    { id: 22, name: "Wr. V.V. Narayana Rao", year: "2009" },
    { id: 21, name: "Wr. Dr. C. Veerabhadra Rao", year: "2008" },
    { id: 20, name: "Wr. R. Muralidharan", year: "2007" },
    { id: 19, name: "Wr. Dr. A.B. Narasinga Rao", year: "2006" },
    { id: 18, name: "Wr. K.V. Gupta", year: "2004 - 05" },
    { id: 17, name: "Wr. (Smt.) Akella Santi Sastri", year: "2003 - 04" },
    { id: 16, name: "Wr. G. Santana Krishnan", year: "2002 - 03" },
    { id: 15, name: "Wr. K. Ratan Kumar", year: "2001 - 02" },
    { id: 14, name: "Wr. Kandala Srinivasa Rao", year: "2000 - 01" },
    { id: 13, name: "Wr. A.H.N. Venkata Rao", year: "1999 - 00" },
    { id: 12, name: "Wr. N. Suryanarayana (Dhanam)", year: "1998 - 99" },
    { id: 11, name: "Wr. N.S. Rambabu (Late)", year: "1997 - 98" },
    { id: 10, name: "Wr. A.S. Raja (Late)", year: "1996 - 97" },
    { id: 9, name: "Wr. A.S.N. Prasad", year: "1995 - 96" },
    { id: 8, name: "Wr. P.N. Murthy", year: "1994 - 95" },
    { id: 7, name: "Wr. M. Venkata Rao", year: "1993 - 94" },
    { id: 6, name: "Wr. N.A. Ramaiah (Late)", year: "1992 - 93" },
    { id: 5, name: "Wr. Akella Papayya Sastry (Late)", year: "1991 - 92" },
    { id: 4, name: "Wr. P.K. Gupta", year: "1990 - 91" },
    { id: 3, name: "Wr. OSR Murthy (Late)", year: "1989 - 90" },
    { id: 2, name: "Wr. K. Parthasarathy (Late)", year: "1987 - 89" },
    { id: 1, name: "Wr. C. Hanumantha Rao (Late)", year: "1985 - 87" },
  ];

  const normalized = search.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!normalized) return presidents;
    return presidents.filter((p) =>
      `${p.id} ${p.name} ${p.year}`.toLowerCase().includes(normalized)
    );
  }, [normalized, presidents]);

  return (
    <section className="pt-4 pb-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary font-semibold mb-6 hover:underline hover:opacity-80"
          aria-label="Go back"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
         {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-primary mb-2">
              Walkers Club Visakhapatnam
            </h1>
            <p className="text-lg text-black">Past Presidents</p>
          </div>

          {/* SEARCH */}
          <div className="max-w-md mx-auto mt-6 mb-4">
            <input
              type="search"
              aria-label="Search by name or year"
              placeholder="Search by Name or Year..."
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
                  <th className="p-3 text-left">#</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Year</th>
                </tr>
              </thead>

              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="p-4 text-center text-muted-foreground">
                      No matching results found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((p, idx) => (
                    <tr key={p.id ?? idx} className="border-b hover:bg-muted/40">
                      <td className="p-3">{idx + 1}</td>
                      <td className="p-3">{p.name}</td>
                      <td className="p-3">{p.year}</td>
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

export default PresidentsList;
