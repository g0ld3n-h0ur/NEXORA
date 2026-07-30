import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const nodes = [
  { id: 1, label: "Investor", x: 20, y: 15 },
  { id: 2, label: "Mentor", x: 80, y: 15 },
  { id: 3, label: "Grant", x: 15, y: 50 },
  { id: 4, label: "Incubator", x: 85, y: 50 },
  { id: 5, label: "Accelerator", x: 25, y: 85 },
  { id: 6, label: "Competition", x: 75, y: 85 },
  { id: 7, label: "Startup", x: 50, y: 10 },
  { id: 8, label: "Opportunity", x: 50, y: 90 },
];

export function AnimatedNetwork() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(109, 94, 249, 0.4)" />
            <stop offset="100%" stopColor="rgba(109, 94, 249, 0)" />
          </radialGradient>
        </defs>
        
        {/* Connection Lines */}
        {nodes.map((node, index) => {
          const isHovered = hoveredNode === node.id;
          return (
            <motion.line
              key={`line-${node.id}`}
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              stroke={isHovered ? "#6D5EF9" : "rgba(255, 255, 255, 0.1)"}
              strokeWidth={isHovered ? 0.6 : 0.2}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.5 + index * 0.1,
                ease: "easeOut",
              }}
              style={{
                filter: isHovered ? "drop-shadow(0 0 4px rgba(109,94,249,0.8))" : "none",
                transition: "stroke 0.3s ease, stroke-width 0.3s ease, filter 0.3s ease",
              }}
            />
          );
        })}
      </svg>

      {/* Center Node: Nexora AI */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" style={{ padding: '40px' }} />
        <div className="relative z-10 w-20 h-20 rounded-full glass flex items-center justify-center bg-card/90 shadow-[0_0_30px_rgba(109,94,249,0.3)] border-primary/30">
          <span className="font-bold text-white tracking-tight">Nexora AI</span>
        </div>
      </motion.div>

      {/* Surrounding Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{ top: `${node.y}%`, left: `${node.x}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 + index * 0.1, type: "spring" }}
        >
          <div
            className="-translate-x-1/2 -translate-y-1/2 relative group cursor-pointer"
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className={`absolute inset-0 rounded-full blur-md transition-opacity duration-300 ${hoveredNode === node.id ? 'bg-primary/40 opacity-100' : 'opacity-0'}`} style={{ padding: '20px' }} />
            <div className={`relative z-10 px-4 py-2 rounded-full border transition-all duration-300 text-sm font-medium ${hoveredNode === node.id ? 'bg-primary text-white border-primary shadow-[0_0_15px_rgba(109,94,249,0.5)]' : 'glass text-text-secondary border-border-subtle hover:text-white'}`}>
              {node.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
