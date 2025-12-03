import { motion } from "framer-motion";
import { UserPlus, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ✅ Import your local assets from src/assets/
import formImage from "@/assets/membership-form.jpg";
import formPDF from "@/assets/membership-form.pdf";

const BecomeMember = () => {
  const navigate = useNavigate();
  return (

    
    <div>
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
            <UserPlus size={48} className="mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Become a Member</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join our community and start your journey to better health and lasting friendships
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* PDF Download Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Membership Application Form</CardTitle>
                <p className="text-black">
                  You can download and fill this form offline. Submit the completed form at our club office.
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  {/* Image Preview */}
                  <div className="flex justify-center items-center">
  <a
    href={formPDF}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <img
      src={formImage}
      alt="Membership Form Preview"
      className="rounded-lg border shadow-md max-w-full md:max-w-2xl mx-auto hover:opacity-90 transition-transform duration-300 hover:scale-[1.02]"
    />
  </a>
</div>


                  {/* Download Button */}
                  <div className="flex justify-center">
                    <Button
                      asChild
                      className="bg-gradient-primary hover:opacity-90 transition-opacity"
                    >
                      <a href={formPDF} download="WalkersClub_Membership_Form.pdf">
                        Download PDF Form
                      </a>
                    </Button>
                  </div>

                  <p className="text-sm text-black">
                    After filling the form, please submit it at the club office or email a scanned copy to
                    <a
                      href="mailto:walkersclubvizag@gmail.com"
                      className="text-primary underline ml-1"
                    >
                      walkersclubvizag@gmail.com
                    </a>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-secondary p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-3">Membership Benefits</h3>
            <ul className="space-y-2 text-black text-left">
              <li>• Access to all regular walking events</li>
              <li>• Official membership certificate</li>
              <li>• Participation in special events and celebrations</li>
              <li>• Health and fitness guidance</li>
              <li>• Social networking opportunities</li>
              <li>• Connection to Walkers International community</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeMember;
