import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="relative mt-24 pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      {/* Thin divider */}
      <div className="max-w-md mx-auto mb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Flowing dots animation */}
      <div className="relative h-4 overflow-hidden mb-6">
        <motion.div
          className="absolute flex gap-4"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-primary/30"
            />
          ))}
        </motion.div>
      </div>

      {/* Copyright text */}
      <p className="text-center text-sm text-muted-foreground tracking-wide">
        © ZLAQA AI — Zero Barriers. One Voice.
      </p>
    </motion.footer>
  );
};

export default Footer;
