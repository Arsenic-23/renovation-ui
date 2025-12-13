import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "@/components/status-badge"

export default function WorkerProjectsPage() {
  const assignedProjects = [
    {
      id: "PRJ-001",
      name: "Maple Avenue Kitchen Remodel",
      location: "Toronto, ON",
      status: "active" as const,
    },
    {
      id: "PRJ-004",
      name: "Birch Lane Full Home Renovation",
      location: "Calgary, AB",
      status: "active" as const,
    },
  ]

  return (
    <DashboardLayout
      role="worker"
      breadcrumbs={[{ label: "Dashboard", href: "/worker" }, { label: "My Projects" }]}
      userName="Mike Johnson"
      userRole="Worker"
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">My Projects</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">View your assigned projects</p>
        </div>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Assigned Projects</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border/50">
              {assignedProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-between p-6 transition-colors hover:bg-muted/50"
                >
                  <div>
                    <div className="font-semibold text-foreground">{project.name}</div>
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{project.id}</span>
                      <span>•</span>
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <StatusBadge status={project.status} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
