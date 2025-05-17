
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, Home, FileText, BookOpen, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "navbar-blur py-3 shadow-sm" : "bg-white dark:bg-gray-900 py-4"}`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary w-10 h-10 flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline-block">SocialSaaS</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-[15px] font-medium">
            <Home className="h-[18px] w-[18px]" />
            <span>Home</span>
          </a>
          <a href="#features" className="text-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-[15px] font-medium">
            <FileText className="h-[18px] w-[18px]" />
            <span>Services</span>
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-[15px] font-medium">
            <BookOpen className="h-[18px] w-[18px]" />
            <span>Blog</span>
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-[15px] font-medium">
            <FileText className="h-[18px] w-[18px]" />
            <span>Docs</span>
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" className="nav-button bg-[#F1F9FF] text-primary border-none hover:bg-[#E3F2FE] hover:text-primary">
            Sign in
          </Button>
          <Button className="nav-button bg-primary hover:bg-primary/90 text-white font-semibold">
            Signup for Free
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed top-[72px] left-0 right-0 bottom-0 bg-background z-40 flex flex-col md:hidden animate-fade-in">
            <div className="absolute inset-0 subtle-pattern opacity-30 pointer-events-none"></div>
            <nav className="flex flex-col p-5 gap-5 relative z-10">
              <a 
                href="#" 
                className="text-lg font-medium py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Home className="h-5 w-5" />
                <span>Home</span>
              </a>
              <a 
                href="#features" 
                className="text-lg font-medium py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FileText className="h-5 w-5" />
                <span>Services</span>
              </a>
              <a 
                href="#" 
                className="text-lg font-medium py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <BookOpen className="h-5 w-5" />
                <span>Blog</span>
              </a>
              <a 
                href="#" 
                className="text-lg font-medium py-2 px-4 rounded-lg hover:bg-primary/10 transition-colors flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FileText className="h-5 w-5" />
                <span>Docs</span>
              </a>
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="outline" className="w-full py-5 text-lg bg-[#F1F9FF] text-primary border-none hover:bg-[#E3F2FE] hover:text-primary">
                  Sign in
                </Button>
                <Button className="w-full py-5 text-lg bg-primary hover:bg-primary/90 text-white">
                  Signup for Free
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
