import { motion } from "framer-motion";
import ZlaqaLogo from "@/components/ZlaqaLogo";
import BackgroundShapes from "@/components/BackgroundShapes";
import InteractionTile from "@/components/InteractionTile";
import Footer from "@/components/Footer";
import { Activity, Instagram, Linkedin, MessageCircle, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Animated background */}
      <BackgroundShapes />

      {/* Main content */}
      <main className="relative z-10 flex-1 flex flex-col px-6 py-12 md:py-20">
        {/* Hero / Entry Zone */}
        <section className="flex-shrink-0 flex flex-col items-center justify-center mb-16 md:mb-24">
          <ZlaqaLogo />

          {/* Tagline */}
          <motion.p
            className="mt-8 text-xl md:text-2xl text-muted-foreground text-center font-light tracking-wide max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            Where Life Speaks Again
          </motion.p>

          {/* Subtle breathing indicator */}
          <motion.div
            className="mt-8 w-3 h-3 rounded-full bg-primary/60"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </section>

        {/* Connection Grid */}
        <section className="flex-1 w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Row 1 */}
            <InteractionTile
              label="Free Speech Test"
              subtext="Check fluency & articulation in minutes"
              href="https://test.zlaqa.com"
              icon={<Activity size={24} />}
              variant="speech"
              delay={0.2}
            />
            <InteractionTile
              label="Instagram"
              subtext="Stories of confidence & awareness"
              href="https://instagram.com/zlaqa"
              icon={<Instagram size={24} />}
              variant="instagram"
              delay={0.3}
            />

            {/* Row 2 */}
            <InteractionTile
              label="LinkedIn"
              subtext="Research, vision & partnerships"
              href="https://linkedin.com/company/zlaqa"
              icon={<Linkedin size={24} />}
              variant="linkedin"
              delay={0.4}
            />
            <InteractionTile
              label="ZLAQA Community"
              subtext="Safe, stigma-free support space"
              href="https://wa.me/community"
              icon={<MessageCircle size={24} />}
              variant="community"
              delay={0.5}
            />

            {/* Row 3 - Full width on mobile, centered on desktop */}
            <div className="md:col-span-2 md:max-w-md md:mx-auto md:w-full">
              <InteractionTile
                label="ZLAQA Website"
                subtext="Platform, vision & science"
                href="https://zlaqa.com"
                icon={<Globe size={24} />}
                variant="website"
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Index;
