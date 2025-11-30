import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type PastIP = {
  id: number;
  name: string;
  year: string;
  location: string;
};

const PastInternationalPresidents = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const list: PastIP[] = [
    { id: 1, name: "Wr. S. ALWAR DAS, MGF", year: "1986–1996", location: "Visakhapatnam" },
    { id: 2, name: "Wr. J.L. TOSNIWALA, MGF", year: "1997–1998", location: "Vizayanagaram" },
    { id: 3, name: "Wr. A.S.N. PRASAD, MGF", year: "1999", location: "Visakhapatnam" },
    { id: 4, name: "Wr. K.V. GOPALA RAO, MGF", year: "2000", location: "Vijayawada" },
    { id: 5, name: "Wr. CH. NAGESWARA RAO, MGF", year: "2001", location: "Machilipatnam" },
    { id: 6, name: "Wr. P.V.N. RAJU, MGF", year: "2002", location: "Vizayanagaram" },
    { id: 7, name: "Wr. B. LAXMIPATHI, MGF", year: "2003", location: "Nidadavole" },
    { id: 8, name: "Wr. B.B. SHAH, MGF", year: "2004", location: "Hyderabad" },
    { id: 9, name: "Wr. D. SEETARAMA RAJU, MGF", year: "2005", location: "Visakhapatnam" },
    { id: 10, name: "Wr. S.H. KRISHAN RAO, MGF", year: "2006", location: "Visakhapatnam" },
    { id: 11, name: "Wr. K. RAMANANDAM, MGF", year: "2007", location: "Hyderabad" },
    { id: 12, name: "Wr. Dr. V. PARATPARA RAO, MGF", year: "2008", location: "Eluru" },
    { id: 13, name: "Wr. Dr. P.S. SARMA, MGF", year: "2009", location: "Amalapuram" },
    { id: 14, name: "Wr. Dr. E. PADMANABHA RAO, MGF", year: "2010", location: "Berhampur" },
    { id: 15, name: "Wr. A.H.N. VENKATA RAO, MGF", year: "2011", location: "Visakhapatnam" },
    { id: 16, name: "Wr. V. NAGABHUSANAM, MGF", year: "2012", location: "Hyderabad" },
    { id: 17, name: "Wr. Dr. M.V. RAO, MGF", year: "2013", location: "Vijayawada" },
    { id: 18, name: "Wr. P.V.P. RAJU, MGF", year: "2014", location: "Vizayanagaram" },
    { id: 19, name: "Wr. Dr. E. Jayanthi Rao, MGF", year: "2015", location: "Odisha" },
    { id: 20, name: "Wr. S. Krishna Kumari, MGF", year: "2016", location: "Hyderabad" },
    { id: 21, name: "Wr. Chelikani Sitaramaiah", year: "2017", location: "Guntur" },
    { id: 22, name: "Wr. Koduri Ranga Rao", year: "2018", location: "Kakinada" },
    { id: 23, name: "Wr. P.R.N. Chandra Mouli", year: "2019", location: "Berhampur" },
    { id: 24, name: "Wr. A. B. Kuppuram, MGF", year: "2020", location: "Hyderabad" },
    { id: 25, name: "Wr. T.V. Hanumantha Rao", year: "2021", location: "Vijayawada" },
    { id: 26, name: "Wr. M.V. Netaji Subba Reddy", year: "2022", location: "Nellore" },
    { id: 27, name: "Wr. Dr. Sunkari Ravindra", year: "2023", location: "Visakhapatnam" },
    { id: 28, name: "Wr. V. Murali Mohana Rao", year: "2024", location: "Eluru" },
  ];

  const normalized = search.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!normalized) return list;
    return list.filter((p) =>
      `${p.id} ${p.name} ${p.year} ${p.location}`.toLowerCase().includes(normalized)
    );
  }, [normalized, list]);

  return (
    <section className="pt-4 pb-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        {/* Back button */}
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
              Walkers Club International
            </h1>
            <p className="text-lg text-black">Past Presidents</p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-4">
            <input
              type="search"
              aria-label="Search by name, year or location"
              placeholder="Search by Name or Year..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border shadow-sm focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto shadow rounded-lg bg-card">
            <table className="min-w-full border-collapse text-sm md:text-base">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="p-3 text-left">#</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Year</th>
                  <th className="p-3 text-left">Location</th>
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
                  filtered.map((p, idx) => (
                    <tr key={p.id} className="border-b hover:bg-muted/40">
                      <td className="p-3">{idx + 1}</td>
                      <td className="p-3">{p.name}</td>
                      <td className="p-3">{p.year}</td>
                      <td className="p-3">{p.location}</td>
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

export default PastInternationalPresidents;
