import { motion } from "framer-motion";
import { Award, FileText, Users, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WalkersInternational = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4">Walkers International</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              A global movement promoting health and friendship through walking
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">Our History</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-black leading-relaxed mb-4">
                Walkers International was founded with the vision of creating a global community united by
                the simple yet powerful act of walking. What began as a small group of enthusiasts has grown
                into an international movement spanning multiple countries and continents.
              </p>
              <p className="text-black leading-relaxed">
                Our organization promotes regular walking as a means to improve physical health, mental
                well-being, and social connections. Through local clubs and international events, we have
                touched millions of lives, making walking accessible and enjoyable for people of all ages and
                backgrounds.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-8 text-center">Certificates</h2>
            <Card className="max-w-2xl mx-auto shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="text-primary" size={24} />
                  <span>Recognition & Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black">
                  Walkers International provides certificates of membership and achievement to recognize
                  dedication and milestones in walking. Members receive official certificates upon joining
                  and for special accomplishments.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Bye-laws Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Bye-Laws</h2>
            <Card className="max-w-4xl mx-auto shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="text-primary" size={24} />
                  <span>Organizational Guidelines</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-black">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1. Membership</h3>
                    <p>Open to all individuals who share our passion for walking and healthy living.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2. Meetings</h3>
                    <p>Regular walks and meetings are conducted according to local club schedules.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3. Conduct</h3>
                    <p>Members are expected to promote health, friendship, and respect within the community.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Past Presidents Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Past Presidents</h2>
            <Card className="max-w-2xl mx-auto shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="text-primary" size={24} />
                  <span>Our Leaders</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black">
                  Information about past presidents and their contributions to Walkers International will be
                  displayed here.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 2025 Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">2025 Team</h2>
            <p className="text-center text-black mb-8">
              Meet our dedicated team leading Walkers International in 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donations Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Support Our Cause</h2>
            <Card className="max-w-2xl mx-auto shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="text-primary" size={24} />
                  <span>Donations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black mb-4">
                  Your donations help us organize events, maintain facilities, and spread the message of
                  health through walking to more communities worldwide.
                </p>
                <p className="text-sm text-black">
                  For donation information, please contact our administrative office.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WalkersInternational;
