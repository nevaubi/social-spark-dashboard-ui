
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Simplify</span> Your Social Media Workflow
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              All-in-one platform to analyze, manage, and automate your social media presence. Save time and boost engagement with our intuitive tools.
            </p>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="ios-button px-8 py-6 text-lg gap-2 group">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="flex-1 animate-bounce-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              <div className="ios-card overflow-hidden rounded-3xl relative p-1 bg-background">
                {/* Dashboard mockup with iOS-like UI */}
                <div className="rounded-2xl bg-gray-50 dark:bg-gray-900 overflow-hidden">
                  {/* iOS-style header */}
                  <div className="bg-primary/10 dark:bg-primary/20 p-4 flex justify-between items-center rounded-t-2xl">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="bg-background/80 dark:bg-background/20 rounded-full px-4 py-1 text-xs">
                      socialapp.io
                    </div>
                    <div className="w-16"></div>
                  </div>
                  
                  {/* Dashboard content */}
                  <div className="p-6">
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { label: "Posts", value: "347" },
                        { label: "Followers", value: "18.4K" },
                        { label: "Growth", value: "+24%" }
                      ].map((stat, i) => (
                        <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-4 text-center ios-shadow">
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                          <p className="text-xl font-bold">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Activity chart */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 mb-6 ios-shadow">
                      <div className="flex justify-between items-center mb-4">
                        <p className="font-medium">Engagement</p>
                        <p className="text-xs text-primary">Last 7 days</p>
                      </div>
                      {/* Chart mockup */}
                      <div className="h-24 flex items-end justify-between gap-1 px-2">
                        {[35, 45, 30, 65, 85, 70, 60].map((height, i) => (
                          <div key={i} className="relative w-full" style={{ height: `${height}%` }}>
                            <div 
                              className={`w-full rounded-t-full ${i === 4 ? 'bg-primary' : 'bg-primary/30'}`}
                              style={{ height: '100%' }}
                            ></div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                      </div>
                    </div>
                    
                    {/* Post schedule */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 ios-shadow">
                      <p className="font-medium mb-4">Scheduled Posts</p>
                      {[
                        { time: "Today, 2:30 PM", title: "Product Launch", platform: "Twitter" },
                        { time: "Tomorrow, 9:00 AM", title: "Weekly Update", platform: "Instagram" }
                      ].map((post, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-t border-border">
                          <div>
                            <p className="text-sm font-medium">{post.title}</p>
                            <p className="text-xs text-muted-foreground">{post.time}</p>
                          </div>
                          <div className="bg-primary/10 dark:bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">
                            {post.platform}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-24 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-60 dark:opacity-20"></div>
      <div className="absolute top-96 right-0 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl opacity-60 dark:opacity-20"></div>
    </section>
  );
}
