import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InteractionTileProps {
  label: string;
  subtext: string;
  href: string;
  icon: ReactNode;
  variant: "speech" | "instagram" | "linkedin" | "community" | "website";
  delay?: number;
}

const variantStyles = {
  speech: {
    borderColor: "border-primary/30",
    hoverBorder: "hover:border-primary/60",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  instagram: {
    borderColor: "border-tile-purple/30",
    hoverBorder: "hover:border-tile-purple/60",
    iconBg: "bg-tile-purple/10",
    iconColor: "text-tile-purple",
  },
  linkedin: {
    borderColor: "border-tile-blue/30",
    hoverBorder: "hover:border-tile-blue/60",
    iconBg: "bg-tile-blue/10",
    iconColor: "text-tile-blue",
  },
  community: {
    borderColor: "border-primary/30",
    hoverBorder: "hover:border-primary/60",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  website: {
    borderColor: "border-foreground/20",
    hoverBorder: "hover:border-foreground/40",
    iconBg: "bg-foreground/10",
    iconColor: "text-foreground",
  },
};

const InteractionTile = ({
  label,
  subtext,
  href,
  icon,
  variant,
  delay = 0,
}: InteractionTileProps) => {
  const styles = variantStyles[variant];

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative block p-6 md:p-8
        bg-card/50 backdrop-blur-sm
        border ${styles.borderColor} ${styles.hoverBorder}
        rounded-2xl
        transition-all duration-500 ease-out
        hover:bg-card/80
        overflow-hidden
      `}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        scale: 1.02,
        y: -4,
        transition: { duration: 0.3 },
      }}
      style={{
        boxShadow: "var(--shadow-tile)",
      }}
    >
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: variant === "speech" || variant === "community"
            ? "radial-gradient(circle at center, hsl(86 87% 39% / 0.05) 0%, transparent 70%)"
            : variant === "instagram"
            ? "radial-gradient(circle at center, hsl(270 60% 55% / 0.05) 0%, transparent 70%)"
            : variant === "linkedin"
            ? "radial-gradient(circle at center, hsl(210 70% 50% / 0.05) 0%, transparent 70%)"
            : "radial-gradient(circle at center, hsl(0 0% 100% / 0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex items-start gap-4">
        {/* Icon container */}
        <motion.div
          className={`
            flex items-center justify-center
            w-12 h-12 rounded-xl
            ${styles.iconBg}
          `}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
        >
          <div className={styles.iconColor}>{icon}</div>
        </motion.div>

        {/* Text content */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-medium text-foreground mb-1 group-hover:text-foreground/90 transition-colors">
            {label}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {subtext}
          </p>
        </div>

        {/* Arrow indicator */}
        <motion.div
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-muted-foreground"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Variant-specific animations */}
      {variant === "speech" && <WaveformAnimation />}
      {variant === "community" && <RippleAnimation />}
      {variant === "instagram" && <FloatAnimation />}
      {variant === "linkedin" && <UnderlineAnimation />}
      {variant === "website" && <SlideRevealAnimation />}
    </motion.a>
  );
};

// Waveform animation for Speech Test tile
const WaveformAnimation = () => (
  <div className="absolute bottom-0 left-0 right-0 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
    <svg
      viewBox="0 0 200 20"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0,10 Q25,5 50,10 T100,10 T150,10 T200,10"
        fill="none"
        stroke="hsl(86 87% 39% / 0.3)"
        strokeWidth="2"
        animate={{
          d: [
            "M0,10 Q25,5 50,10 T100,10 T150,10 T200,10",
            "M0,10 Q25,15 50,10 T100,10 T150,10 T200,10",
            "M0,10 Q25,5 50,10 T100,10 T150,10 T200,10",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>
  </div>
);

// Ripple animation for Community tile
const RippleAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <motion.div
      className="w-32 h-32 rounded-full border border-primary/20 opacity-0 group-hover:opacity-100"
      animate={{
        scale: [0.8, 1.5],
        opacity: [0.4, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
    <motion.div
      className="absolute w-32 h-32 rounded-full border border-primary/20 opacity-0 group-hover:opacity-100"
      animate={{
        scale: [0.8, 1.5],
        opacity: [0.4, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeOut",
        delay: 0.5,
      }}
    />
  </div>
);

// Float animation for Instagram tile
const FloatAnimation = () => (
  <motion.div
    className="absolute top-4 right-4 w-2 h-2 rounded-full bg-tile-purple/40 opacity-0 group-hover:opacity-100"
    animate={{
      y: [0, -10, 0],
      opacity: [0.4, 0.8, 0.4],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Underline animation for LinkedIn tile
const UnderlineAnimation = () => (
  <motion.div
    className="absolute bottom-6 left-6 right-6 h-[2px] bg-tile-blue/30 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
  />
);

// Slide reveal animation for Website tile
const SlideRevealAnimation = () => (
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
  />
);

export default InteractionTile;
