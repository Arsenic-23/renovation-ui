import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, DollarSign, TrendingUp } from "lucide-react"
import { StatusBadge } from "@/components/status-badge"

export default function ClientDashboard() {
  const activeProjects = [
    {
      id: "PRJ-001",
      name: "Maple Avenue Kitchen Remodel",
      location: "123 Maple Avenue, Toronto, ON",
      status: "in_progress" as const,
      progress: 72,
      budgetTotal: 45000,
      budgetUsed: 32500,
      budgetRemaining: 12500,
      budgetUsedPercentage: 72,
      nextMilestone: "Cabinet Installation & Countertops",
      nextPaymentDue: "$11,250 due Dec 20, 2024",
    },
  ]

  const totalBudget = activeProjects.reduce((sum, p) => sum + p.budgetTotal, 0)
  const totalBudgetUsed = activeProjects.reduce((sum, p) => sum + p.budgetUsed, 0)
  const overallBudgetUsagePercentage = Math.round((totalBudgetUsed / totalBudget) * 100)
  const averageProgress = Math.round(activeProjects.reduce((sum, p) => sum + p.progress, 0) / activeProjects.length)

  return (
    <DashboardLayout role="client" breadcrumbs={[{ label: "Dashboard" }]} userName="Sarah Johnson" userRole="Client">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">My Projects</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Welcome back! Track your renovation projects and payments here.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{activeProjects.length}</div>
              <p className="mt-1 text-xs text-muted-foreground">Currently in progress</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-gradient-to-br from-accent/5 to-transparent">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Average Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-bold text-foreground">{averageProgress}%</div>
                <TrendingUp className="h-5 w-5 text-success" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Across all projects</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-gradient-to-br from-success/5 to-transparent">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Overall Budget Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-bold text-foreground">{overallBudgetUsagePercentage}%</div>
                <DollarSign className="h-5 w-5 text-success" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                ${totalBudgetUsed.toLocaleString()} of ${totalBudget.toLocaleString()}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Active Projects</h2>
          <div className="grid gap-6 md:grid-cols-1">
            {activeProjects.map((project) => (
              <Card key={project.id} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader className="border-b border-border/50 bg-muted/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{project.name}</CardTitle>
                      <p className="mt-1 text-sm text-muted-foreground">{project.location}</p>
                    </div>
                    <StatusBadge status={project.status} />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* Progress Section */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground">Project Progress</span>
                        <span className="text-lg font-semibold text-primary">{project.progress}%</span>
                      </div>
                      <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
                        <div className="h-full bg-primary transition-all" style={{ width: `${project.progress}%` }} />
                      </div>
                      <p className="text-xs text-muted-foreground">Next: {project.nextMilestone}</p>
                    </div>

                    {/* Budget Section */}
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="rounded-lg border border-border/50 bg-muted/30 p-4">
                        <div className="text-xs text-muted-foreground">Total Budget</div>
                        <div className="mt-1 text-lg font-semibold text-foreground">
                          ${project.budgetTotal.toLocaleString()}
                        </div>
                      </div>
                      <div className="rounded-lg border border-border/50 bg-muted/30 p-4">
                        <div className="text-xs text-muted-foreground">Used</div>
                        <div className="mt-1 text-lg font-semibold text-foreground">
                          ${project.budgetUsed.toLocaleString()}
                        </div>
                      </div>
                      <div className="rounded-lg border border-border/50 bg-muted/30 p-4">
                        <div className="text-xs text-muted-foreground">Remaining</div>
                        <div className="mt-1 text-lg font-semibold text-success">
                          ${project.budgetRemaining.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    {/* Payment Info */}
                    <div className="flex items-center justify-between rounded-lg border border-warning/20 bg-warning/5 p-4">
                      <div>
                        <div className="text-sm font-medium text-foreground">Next Payment Due</div>
                        <div className="mt-1 text-sm text-muted-foreground">{project.nextPaymentDue}</div>
                      </div>
                      <StatusBadge status="pending" />
                    </div>

                    {/* View Details Button */}
                    <Link href="/client/project" className="block">
                      <Button className="w-full" size="lg">
                        View Full Project Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
