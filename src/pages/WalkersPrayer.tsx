import { motion } from "framer-motion";
import { BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const WalkersPrayer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      {/* Prayer Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mb-6">
                <BookOpen className="text-primary" size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Walkers Prayer</h1>
              <p className="text-lg text-black max-w-2xl mx-auto">
                A timeless invocation for peace, wisdom, and the pursuit of freedom through mindful walking
              </p>
            </div>

            {/* English Prayer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="bg-card border border-border/50 rounded-xl p-8 md:p-12 shadow-lg">
                <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">English</h2>
                <div className="prose prose-lg max-w-none text-center">
                  <p className="text-black leading-relaxed text-lg italic">
                    "Where the mind is without fear and the head is held high,<br />
                    Where knowledge is free,<br />
                    Where the world is not yet broken up into fragments<br />
                    by narrow domestic walls,<br />
                    Where words come out from the depth of truth,<br />
                    Where tireless striving stretches its arms towards perfection,<br />
                    Where the clear stream of reason has not lost its way into<br />
                    the dreary desert sand of dead habit,<br />
                    Where the mind is led forward by thee<br />
                    into ever widening thought and action,<br />
                    Into that heaven of freedom, my father,<br />
                    let the Humanity awake."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Telugu Prayer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-card border border-border/50 rounded-xl p-8 md:p-12 shadow-lg">
                <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">తెలుగు</h2>
                <div className="prose prose-lg max-w-none text-center">
                  <p className="text-black leading-relaxed text-lg italic">
                    "ఎక్కడ ..... మనసు నిశ్చలంగా ఉంటుందో !<br />
                    ఎక్కడ ..... శాంతి నగరంగా నిలుస్తుందో !<br />
                    ఎక్కడ ..... విజ్ఞానం అందరికీ అందుబాటులో ఉంటుందో !<br />
                    ఎక్కడ ..... సంకుచిత విశ్వాసాలు ఇరుకు గోడలతో<br />
                    ప్రజలని మూసివేసి చీకట్లో కాచకుండా ఉంటుందో !<br />
                    ఎక్కడ ..... అల్లకల్లోల పొరపాట్లు తన కాంతిని ఆందుకుండవో !<br />
                    ఎక్కడ ..... వివేకవంతుని నిశ్చయప్రయాణము స్పష్ట దారాలతో<br />
                    చేతికి దారితీసిపోతుందో !<br />
                    శాంతతతో కూడిన కీర్తిశీల భావాలనే మనసు<br />
                    నిస్సం ఎక్కడో దివ్యమవుతుందో !<br /><br />
                    ఓ ప్రభూ! అట్టి స్వాతంత్ర్య స్వేచ్ఛా నాడి స్వర్గలోకి<br />
                    పదయాత్రచేయునట్లు మనసునాకి మేలుకొలుపు."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Attribution */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-12"
            >
              <p className="text-sm text-black">
                Inspired by Rabindranath Tagore's vision of freedom and enlightenment
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WalkersPrayer;
