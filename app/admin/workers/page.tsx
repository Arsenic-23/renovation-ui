import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search, Eye } from "lucide-react"
import Link from "next/link"

export default function WorkersPage() {
  const workers = [
    {
      id: "WRK-001",
      name: "Mike Johnson",
      role: "General Contractor",
      hourlyRate: "$45/hr",
      assignedProjects: 2,
      pendingPayment: "$3,200",
    },
    {
      id: "WRK-002",
      name: "Sarah Williams",
      role: "Electrician",
      hourlyRate: "$55/hr",
      assignedProjects: 2,
      pendingPayment: "$4,500",
    },
    {
      id: "WRK-003",
      name: "James Rodriguez",
      role: "Plumber",
      hourlyRate: "$50/hr",
      assignedProjects: 3,
      pendingPayment: "$2,150",
    },
    {
      id: "WRK-004",
      name: "Emily Chen",
      role: "Carpenter",
      hourlyRate: "$42/hr",
      assignedProjects: 1,
      pendingPayment: "$1,800",
    },
    {
      id: "WRK-005",
      name: "Robert Martinez",
      role: "Painter",
      hourlyRate: "$38/hr",
      assignedProjects: 2,
      pendingPayment: "$800",
    },
    {
      id: "WRK-006",
      name: "Lisa Anderson",
      role: "HVAC Specialist",
      hourlyRate: "$60/hr",
      assignedProjects: 1,
      pendingPayment: "$0",
    },
  ]

  return (
    <DashboardLayout
      role="admin"
      breadcrumbs={[{ label: "Dashboard", href: "/admin" }, { label: "Workers" }]}
      userName="John Doe"
      userRole="Administrator"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">Workers</h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Manage your workforce</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Worker
          </Button>
        </div>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search workers..." className="pl-9" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 text-left">
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Worker Name</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Role</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Hourly Rate</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Assigned Projects</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Pending Payment</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {workers.map((worker) => (
                    <tr
                      key={worker.id}
                      className="border-b border-border/50 last:border-0 transition-colors hover:bg-muted/50"
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-foreground">{worker.name}</div>
                        <div className="text-xs text-muted-foreground">{worker.id}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{worker.role}</td>
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{worker.hourlyRate}</td>
                      <td className="px-6 py-4 text-center text-sm text-muted-foreground">{worker.assignedProjects}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground">{worker.pendingPayment}</td>
                      <td className="px-6 py-4">
                        <Button variant="ghost" size="sm" className="gap-2" asChild>
                          <Link href={`/admin/workers/${worker.id}`}>
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
