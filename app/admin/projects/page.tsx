import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StatusBadge } from "@/components/status-badge"
import { Plus, Search, Filter, Eye } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      id: "PRJ-001",
      name: "Maple Avenue Kitchen Remodel",
      client: "Sarah Johnson",
      location: "Toronto, ON",
      totalBudget: "$45,000",
      budgetUsed: "$32,500",
      status: "active" as const,
      assignedWorkers: 4,
    },
    {
      id: "PRJ-002",
      name: "Oak Street Basement Renovation",
      client: "Michael Chen",
      location: "Vancouver, BC",
      totalBudget: "$68,000",
      budgetUsed: "$68,000",
      status: "completed" as const,
      assignedWorkers: 6,
    },
    {
      id: "PRJ-003",
      name: "Pine Road Bathroom Upgrade",
      client: "Emily Rodriguez",
      location: "Montreal, QC",
      totalBudget: "$28,500",
      budgetUsed: "$14,200",
      status: "active" as const,
      assignedWorkers: 3,
    },
    {
      id: "PRJ-004",
      name: "Birch Lane Full Home Renovation",
      client: "David Thompson",
      location: "Calgary, AB",
      totalBudget: "$185,000",
      budgetUsed: "$25,000",
      status: "pending" as const,
      assignedWorkers: 8,
    },
    {
      id: "PRJ-005",
      name: "Cedar Court Deck Construction",
      client: "Lisa Anderson",
      location: "Ottawa, ON",
      totalBudget: "$22,000",
      budgetUsed: "$22,800",
      status: "overdue" as const,
      assignedWorkers: 2,
    },
  ]

  return (
    <DashboardLayout
      role="admin"
      breadcrumbs={[{ label: "Dashboard", href: "/admin" }, { label: "Projects" }]}
      userName="John Doe"
      userRole="Administrator"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">Projects</h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Manage all renovation projects</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Project
          </Button>
        </div>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search projects..." className="pl-9" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Filter className="h-4 w-4" />
                  Status
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Filter className="h-4 w-4" />
                  Location
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 text-left">
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Project Name</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Client Name</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Location</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Total Budget</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Budget Used</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Assigned Workers</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr
                      key={project.id}
                      className="border-b border-border/50 last:border-0 transition-colors hover:bg-muted/50"
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-foreground">{project.name}</div>
                        <div className="text-xs text-muted-foreground">{project.id}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground">{project.client}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{project.location}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={project.status} />
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{project.totalBudget}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{project.budgetUsed}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{project.assignedWorkers}</td>
                      <td className="px-6 py-4">
                        <Button variant="ghost" size="sm" className="gap-2" asChild>
                          <Link href={`/admin/projects/${project.id}`}>
                            <Eye className="h-4 w-4" />
                            View
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
