
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { AlertCircle, Lock, Shield, Users } from "lucide-react";

const forumCategories = [
  {
    title: "Threat Intelligence",
    description: "Latest cybersecurity threats, vulnerabilities, and IOCs.",
    icon: AlertCircle,
    path: "/forums/threat-intelligence",
    threadCount: 342,
    color: "text-red-500"
  },
  {
    title: "Security News & Analysis",
    description: "Breaking security news and in-depth analysis.",
    icon: AlertCircle,
    path: "/forums/security-news",
    threadCount: 217,
    color: "text-blue-500"
  },
  {
    title: "Best Practices & Standards",
    description: "Industry standards, frameworks, and security best practices.",
    icon: Shield,
    path: "/forums/best-practices",
    threadCount: 186,
    color: "text-green-500"
  },
  {
    title: "Tools & Solutions",
    description: "Security tools, software reviews, and implementation guides.",
    icon: Lock,
    path: "/forums/tools",
    threadCount: 264,
    color: "text-purple-500"
  },
  {
    title: "Career Development",
    description: "Certification guidance, job opportunities, and skill development.",
    icon: Users,
    path: "/forums/career",
    threadCount: 153,
    color: "text-yellow-500"
  },
  {
    title: "General Discussion",
    description: "Open discussions on all cybersecurity-related topics.",
    icon: Users,
    path: "/forums/general",
    threadCount: 428,
    color: "text-gray-500"
  }
];

const featuredThreads = [
  {
    title: "New Log4j Vulnerability: Critical Impact Assessment",
    author: "SecurityResearcher",
    replies: 37,
    views: 1205,
    category: "Threat Intelligence",
    path: "/thread/1"
  },
  {
    title: "NIST Updates Cybersecurity Framework - What Changed?",
    author: "ComplianceGuru",
    replies: 24,
    views: 982,
    category: "Best Practices",
    path: "/thread/2"
  },
  {
    title: "Detecting Lateral Movement: Advanced Techniques",
    author: "ThreatHunter",
    replies: 45,
    views: 2108,
    category: "Tools & Solutions",
    path: "/thread/3"
  }
];

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          CyberSecConnect
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          A professional community dedicated to cybersecurity discussions,
          threat intelligence sharing, and career development.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/register">Join the Community</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/forums">Browse Forums</Link>
          </Button>
        </div>
      </section>

      {/* Forum Categories */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Forum Categories</h2>
          <Button variant="outline" asChild>
            <Link to="/forums">View All</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {forumCategories.map((category) => (
            <Card key={category.path}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                  <CardTitle>{category.title}</CardTitle>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {category.threadCount} threads
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link to={category.path}>Browse Threads</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Discussions */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Discussions</h2>
        <div className="space-y-4">
          {featuredThreads.map((thread) => (
            <div key={thread.path} className="border rounded-md p-4 hover:bg-muted/50 transition-colors">
              <Link to={thread.path} className="block">
                <h3 className="text-lg font-semibold mb-2">{thread.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>By {thread.author}</span>
                  <span className="mx-2">•</span>
                  <span>{thread.replies} replies</span>
                  <span className="mx-2">•</span>
                  <span>{thread.views} views</span>
                  <span className="mx-2">•</span>
                  <span className="text-primary">{thread.category}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild>
            <Link to="/forums">Explore All Discussions</Link>
          </Button>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-muted/50 p-8 rounded-lg">
            <p className="text-4xl font-bold">10,425</p>
            <p className="text-muted-foreground">Community Members</p>
          </div>
          <div className="bg-muted/50 p-8 rounded-lg">
            <p className="text-4xl font-bold">27,891</p>
            <p className="text-muted-foreground">Forum Threads</p>
          </div>
          <div className="bg-muted/50 p-8 rounded-lg">
            <p className="text-4xl font-bold">1,258</p>
            <p className="text-muted-foreground">Resources Shared</p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-muted/50 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to join the discussion?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Connect with cybersecurity professionals, share insights, and stay ahead of emerging threats.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/register">Create Account</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/learn-more">Learn More</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
