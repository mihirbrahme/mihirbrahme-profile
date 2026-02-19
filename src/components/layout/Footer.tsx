import { Github, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary/30">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold gradient-text">
              Mihir Brahme
            </span>
            <span className="text-sm text-text-muted">
              Consultant/Lead — Population-Scale Platforms
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:mihir.brahme@gmail.com"
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-blue transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">mihir.brahme@gmail.com</span>
            </a>
            <a
              href="https://github.com/mihirbrahme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-blue transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <span className="flex items-center gap-2 text-sm text-text-muted">
              <MapPin size={16} />
              <span className="hidden sm:inline">Pune, India</span>
            </span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Mihir Brahme. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
