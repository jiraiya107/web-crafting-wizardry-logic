
import { Link, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

// Navigation categories based on your structure
const categories = [
  { name: "Threat Intelligence", path: "/forums/threat-intelligence" },
  { name: "Security News", path: "/forums/security-news" },
  { name: "Best Practices", path: "/forums/best-practices" },
  { name: "Tools & Solutions", path: "/forums/tools" },
  { name: "Career Development", path: "/forums/career" },
  { name: "General Discussion", path: "/forums/general" },
];

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Navigation */}
      <header className="border-b sticky top-0 z-30 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="font-bold text-xl">
              CyberSecConnect
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {categories.map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === category.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
            
            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link to="/" className="font-bold text-xl block mb-6">
                  CyberSecConnect
                </Link>
                <nav className="flex flex-col gap-4">
                  {categories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        location.pathname === category.path ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {category.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            
            {/* User Navigation */}
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Log in
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 container py-6">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="border-t py-6 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">CyberSecConnect</h3>
              <p className="text-sm text-muted-foreground">
                A professional community dedicated to cybersecurity discussions,
                threat intelligence sharing, and career development.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/resources/documents" className="text-muted-foreground hover:text-foreground">Document Library</Link></li>
                <li><Link to="/resources/wiki" className="text-muted-foreground hover:text-foreground">Knowledge Wiki</Link></li>
                <li><Link to="/resources/webinars" className="text-muted-foreground hover:text-foreground">Webinars</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/community/events" className="text-muted-foreground hover:text-foreground">Events Calendar</Link></li>
                <li><Link to="/community/members" className="text-muted-foreground hover:text-foreground">Member Directory</Link></li>
                <li><Link to="/community/guidelines" className="text-muted-foreground hover:text-foreground">Guidelines</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/legal/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                <li><Link to="/legal/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link to="/legal/code-of-conduct" className="text-muted-foreground hover:text-foreground">Code of Conduct</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} CyberSecConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <Toaster />
    </div>
  );
};

export default MainLayout;
