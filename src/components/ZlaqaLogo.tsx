import { motion } from "framer-motion";

const ZlaqaLogo = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow effect behind logo */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-primary/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Main Logo - Q-icon inspired */}
      <motion.div
        className="relative z-10 flex items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Q Icon */}
        <div className="relative">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            {/* Main Q circle */}
            <circle
              cx="32"
              cy="28"
              r="22"
              stroke="currentColor"
              strokeWidth="4"
              className="text-foreground"
              fill="none"
            />
            {/* Q tail */}
            <path
              d="M42 42L56 58"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="text-foreground"
            />
            {/* Green accent dot */}
            <motion.circle
              cx="32"
              cy="28"
              r="8"
              className="fill-primary"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>

        {/* ZLAQA Text */}
        <span className="text-4xl md:text-5xl font-semibold tracking-wide text-foreground">
          ZLAQA
        </span>
      </motion.div>
    </div>
  );
};

export default ZlaqaLogo;
