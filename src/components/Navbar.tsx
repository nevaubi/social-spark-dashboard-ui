
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "navbar-blur py-3" : "py-5"}`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-primary w-9 h-9 flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline-block">SocialSaaS</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#features" className="text-foreground hover:text-primary transition-colors">Free Tools</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" className="ios-button">Login</Button>
          <Button className="ios-button bg-primary hover:bg-primary/90">Sign Up</Button>
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
            <nav className="flex flex-col p-5 gap-5">
              <a 
                href="#" 
                className="text-lg font-medium py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#features" 
                className="text-lg font-medium py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Free Tools
              </a>
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="outline" className="w-full py-6 text-lg">Login</Button>
                <Button className="w-full py-6 text-lg">Sign Up</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
