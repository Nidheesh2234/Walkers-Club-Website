import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";



// IMPORT THE DATA
import membersData from "../data/membersData_from73";
// adjust path: ./, ../, etc.

type Member = {
  id: number;
  code: string;
  name: string;
  address: string;
  mobile: string;
};

const OurMembers = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // Convert raw array rows into objects for readability
  const members: Member[] = membersData.map((row: any[]) => ({
    id: row[0],
    code: row[1],
    name: row[2],
    address: row[3],
    mobile: row[4],
  }));

  const normalized = search.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!normalized) return members;
    return members.filter((m) =>
      `${m.id} ${m.code} ${m.name} ${m.address} ${m.mobile}`
        .toLowerCase()
        .includes(normalized)
    );
  }, [normalized, members]);

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

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
           <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-primary mb-2">
              Walkers Club Visakhapatnam
            </h1>
            <p className="text-lg text-black">Our Members Directory</p>
          </div>

          {/* SEARCH BAR */}
          <div className="max-w-md mx-auto mb-6">
            <input
              type="search"
              placeholder="Search by Name, Code, Address or Mobile..."
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
                  <th className="p-3 text-left">Member Code</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Address</th>
                  <th className="p-3 text-left">Mobile</th>
                </tr>
              </thead>

              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-4 text-center text-muted-foreground">
                      No matching results found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((m, idx) => (
                    <tr key={m.id} className="border-b hover:bg-muted/40">
                      <td className="p-3">{idx + 1}</td>
                      <td className="p-3">{m.code}</td>
                      <td className="p-3">{m.name}</td>
                      <td className="p-3">{m.address}</td>
                      <td className="p-3">
                        <a href={`tel:${m.mobile}`} className="text-primary underline">
                          {m.mobile}
                        </a>
                      </td>
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

export default OurMembers;
