import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import smartLitLogo from "../../assets/smart-LIT-Logo.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/solutions", label: "Solutions" },
    { to: "/brands-technology", label: "Brands & Tech" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[60] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-4 sm:px-6 md:px-8 lg:px-16 lg:py-6">
          <div className="min-w-0 flex items-center">
            <Link
              to="/"
              className="shrink-0 transition-opacity hover:opacity-90"
              aria-label="Smart Lit home"
            >
              <img
                src={smartLitLogo}
                alt="Smart Lit"
                className="h-16 w-auto sm:h-20 lg:h-24"
              />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white transition-colors hover:bg-white/14 focus:outline-none focus:ring-2 focus:ring-white/50 lg:hidden"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 xl:gap-10 lg:flex"
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`whitespace-nowrap text-[16px] font-medium tracking-wide transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/72 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div
          className={`overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden ${
            mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
          id="mobile-navigation"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-[1440px] flex-col px-4 py-4 sm:px-6 md:px-8"
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`border-b border-white/10 py-4 text-[17px] font-normal tracking-[0.12em] transition-colors duration-300 last:border-b-0 ${
                    isActive ? "text-white" : "text-white/78 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </motion.header>
    </>
  );
}
