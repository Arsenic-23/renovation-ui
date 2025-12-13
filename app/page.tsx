import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HardHat, CheckCircle, Clock, Shield, ArrowRight } from "lucide-react"
import { StatusBadge } from "@/components/status-badge"

export default function PublicHomepage() {
  const ongoingProjects = [
    { name: "Maple Avenue Kitchen Remodel", status: "active" as const },
    { name: "Oak Street Basement Renovation", status: "active" as const },
    { name: "Pine Road Bathroom Upgrade", status: "active" as const },
    { name: "Cedar Court Deck Construction", status: "active" as const },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <HardHat className="h-5 w-5" />
            </div>
            <span className="text-lg">RenovationPro</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Button asChild size="sm">
              <Link href="/admin">Dashboard</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <CheckCircle className="h-4 w-4" />
            Canada's Leading Renovation Management
          </div>
          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground lg:text-7xl">
            Professional Home
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Renovation Management
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Transform your space with confidence. Our platform connects homeowners with trusted contractors across
            Canada, providing transparent project management from start to finish.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2 text-base" asChild>
              <Link href="/admin">
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
              <Link href="#contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Active Projects in Your Area
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Join homeowners across Canada who trust us with their renovation projects.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ongoingProjects.map((project, index) => (
            <Card key={index} className="border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <HardHat className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-balance text-base font-semibold text-foreground">{project.name}</h3>
                <div className="mt-3">
                  <StatusBadge status={project.status} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section id="about" className="border-y border-border/50 bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Why Choose RenovationPro?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              We bring transparency, efficiency, and expertise to every renovation project.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                  <Clock className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">15+ Years Experience</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  Over a decade of successful renovations across Canada, delivering excellence in every project.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Complete Transparency</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  Real-time project tracking, budget monitoring, and open communication throughout your renovation.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-success/10">
                  <CheckCircle className="h-7 w-7 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Maximum Efficiency</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  Streamlined workflows and expert project management ensure your project stays on time and on budget.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border/50 bg-card py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <HardHat className="h-5 w-5" />
                </div>
                <span>RenovationPro</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Professional renovation management platform serving homeowners across Canada.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Contact</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Email: hello@renovationpro.ca</li>
                <li>Phone: 1-800-RENOVATE</li>
                <li>Address: Toronto, Ontario, Canada</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/admin" className="text-muted-foreground hover:text-foreground transition-colors">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 RenovationPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
