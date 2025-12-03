import { motion } from "framer-motion";
import { Award, Heart, Users, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const FatherOfWalkers = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background text-foreground">
      {/* BACK BUTTON */}
      <div className="container mx-auto px-4 pt-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary font-semibold mb-6 hover:underline hover:opacity-80"
          aria-label="Go back"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>
      </div>
      {/* Hero Section */}
      {/* <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Award size={48} className="mx-auto mb-4" />
            <h1 className="text-5xl font-serif font-semibold mb-4 tracking-tight">
              Father of the Walkers Movement
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto italic">
              Honoring the visionary who inspired the world to walk together
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Founder Image + Description */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-6 md:px-20 lg:px-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Founder Image */}
            <div className="flex justify-center mb-10">
              <img
                src="/founder.jpg"
                alt="Founder of Walkers Movement"
                className="w-60 h-60 object-cover rounded-full border border-gray-300 shadow-md hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Founder Info */}
            <h2 className="text-4xl font-serif font-semibold text-center text-gray-900 dark:text-gray-100 mb-2">
              Sri Sunkari Alwar Das
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 italic mb-8">
              Founder, Walkers International
            </p>

            {/* Description */}
            <div className="font-serif text-[17px] leading-relaxed text-gray-800 dark:text-gray-200 space-y-6 text-justify">
              <p>
                <strong>Sri Sunkari Alwar Das</strong> (Late), the founder of
                Walkers International, was a distinguished social worker and
                visionary leader. Having completed his M.A. in Politics and
                LL.B. in New Delhi, he dedicated his life to public service and
                the welfare of the people. His deep conviction in social reform
                and civic engagement led him to take part in numerous community
                initiatives across Andhra Pradesh.
              </p>

              <p>
                His outstanding commitment was recognized by the Congress
                Government, which appointed him to serve in several key
                capacities, including as <em>Minister for Education</em>,{" "}
                <em>Municipal Administration</em>, and{" "}
                <em>Urban Development Authority</em>. A firm believer in the
                principle of <strong>“Deserve to Desire”</strong>, he embodied a
                life of service over ambition and believed that opportunities
                must be earned through dedication and purpose.
              </p>

              <p>
                Throughout his career, Sri Alwar Das held numerous leadership
                roles—serving as Governor of the Y’s Men Club, President of the
                Lions Club, Rotary Club, and Junior Chamber, and as Master of
                the Masonic Lodge. His experience with these international
                service organizations inspired him to create a movement rooted
                in health, community, and togetherness: the{" "}
                <strong>Walkers Movement</strong>.
              </p>

              <p>
                In 1986, he convened the first meeting of Walkers enthusiasts at
                a hotel along Visakhapatnam’s Beach Road, inviting members from
                various social clubs. The idea of promoting walking as a
                community habit was immediately embraced. Within a year, over 60
                Walkers Clubs were established in Visakhapatnam and other parts
                of the state. His dynamic energy and organizational vision
                turned a simple idea into a growing movement.
              </p>

              <p>
                The message of walking for health and harmony soon transcended
                borders. Under his leadership, Walkers Clubs were founded across
                India and internationally, including in countries such as the
                United States and Australia. His work remains a testament to the
                power of ordinary steps leading to extraordinary change.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legacy & Impact Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Legacy & Impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: <Users className="text-primary-foreground" size={32} />,
                  title: "Global Community",
                  text: "Inspired walking clubs worldwide, bringing millions together for health and fellowship.",
                },
                {
                  icon: <Heart className="text-primary-foreground" size={32} />,
                  title: "Health Revolution",
                  text: "Pioneered the idea of preventive health through regular walking and wellness programs.",
                },
                {
                  icon: <Award className="text-primary-foreground" size={32} />,
                  title: "Enduring Philosophy",
                  text: "Promoted values of health, friendship, and service that continue to guide the movement today.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <Card className="shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                    <CardContent className="pt-6 text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-black">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="py-16 bg-gradient-hero text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-6xl mb-6 opacity-50">"</div>
            <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
              If every citizen walks, <br />
              every citizen will be healthy. <br />
              If every citizen is healthy, <br />
              the country will be healthy.
            </p>
            <p className="text-lg opacity-90">
              – Sri Sunkari Alwar Das, Visionary of the Walkers Movement
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FatherOfWalkers;
