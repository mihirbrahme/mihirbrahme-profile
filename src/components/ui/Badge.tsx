interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gradient" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default:
      "bg-bg-tertiary/50 text-text-secondary border border-border",
    gradient:
      "gradient-border bg-bg-secondary text-accent-blue",
    outline:
      "bg-transparent text-text-secondary border border-border hover:border-accent-blue/50 hover:text-accent-blue transition-colors",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-mono rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
