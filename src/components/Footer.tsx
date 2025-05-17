
export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border/50 warm-gradient relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 subtle-pattern opacity-30 pointer-events-none"></div>
      
      <div className="container px-4 sm:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 flex items-center gap-2">
            <div className="rounded-xl bg-primary w-8 h-8 flex items-center justify-center glow-effect">
              <span className="text-white font-bold text-base">S</span>
            </div>
            <span className="font-bold text-lg">SocialSaaS</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-muted-foreground">
            <p>© {year} SocialSaaS. All rights reserved.</p>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
