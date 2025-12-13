import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "@/components/status-badge"
import { Building2, Users, DollarSign, UserCheck } from "lucide-react"

export default function AdminDashboard() {
  const kpis = [
    {
      title: "Active Projects",
      value: "24",
      change: "+3 from last month",
      icon: Building2,
      color: "text-primary",
    },
    {
      title: "Total Workers",
      value: "48",
      change: "+5 this month",
      icon: Users,
      color: "text-accent",
    },
    {
      title: "Today's Attendance",
      value: "42/48",
      change: "87.5% attendance rate",
      icon: UserCheck,
      color: "text-success",
    },
    {
      title: "Pending Worker Payments",
      value: "$12,450",
      change: "5 payments due",
      icon: DollarSign,
      color: "text-warning",
    },
  ]

  const activeProjects = [
    {
      id: "PRJ-001",
      name: "Maple Avenue Kitchen Remodel",
      location: "Toronto, ON",
      status: "active" as const,
      budgetUsed: "72%",
    },
    {
      id: "PRJ-003",
      name: "Pine Road Bathroom Upgrade",
      location: "Mississauga, ON",
      status: "active" as const,
      budgetUsed: "50%",
    },
    {
      id: "PRJ-004",
      name: "Birch Lane Full Home Renovation",
      location: "Brampton, ON",
      status: "active" as const,
      budgetUsed: "14%",
    },
    {
      id: "PRJ-005",
      name: "Cedar Court Deck Construction",
      location: "Oakville, ON",
      status: "overdue" as const,
      budgetUsed: "104%",
    },
  ]

  const pendingPayments = [
    {
      id: "WRK-001",
      name: "Mike Johnson",
      project: "Maple Avenue Kitchen Remodel",
      amount: "$3,200",
      dueDate: "2025-01-15",
      daysUntilDue: 2,
    },
    {
      id: "WRK-012",
      name: "Sarah Williams",
      project: "Oak Street Basement Renovation",
      amount: "$4,500",
      dueDate: "2025-01-16",
      daysUntilDue: 3,
    },
    {
      id: "WRK-008",
      name: "James Rodriguez",
      project: "Pine Road Bathroom Upgrade",
      amount: "$2,150",
      dueDate: "2025-01-17",
      daysUntilDue: 4,
    },
    {
      id: "WRK-023",
      name: "Emily Chen",
      project: "Cedar Court Deck Construction",
      amount: "$1,800",
      dueDate: "2025-01-18",
      daysUntilDue: 5,
    },
    {
      id: "WRK-015",
      name: "Robert Martinez",
      project: "Birch Lane Full Home Renovation",
      amount: "$800",
      dueDate: "2025-01-19",
      daysUntilDue: 6,
    },
  ]

  return (
    <DashboardLayout role="admin" breadcrumbs={[{ label: "Dashboard" }]} userName="John Doe" userRole="Administrator">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Dashboard</h1>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
            Welcome back! Here's your operational overview for today.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => {
            const Icon = kpi.icon
            return (
              <Card key={kpi.title} className="border-border/50 transition-all hover:border-primary/50 hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.title}</CardTitle>
                  <div className={`rounded-lg bg-muted/50 p-2 ${kpi.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{kpi.value}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{kpi.change}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Active Projects</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 text-left">
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Project Name</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Location</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Budget Used</th>
                  </tr>
                </thead>
                <tbody>
                  {activeProjects.map((project) => (
                    <tr
                      key={project.id}
                      className="border-b border-border/50 last:border-0 transition-colors hover:bg-muted/50"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{project.name}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{project.location}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={project.status} />
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground">{project.budgetUsed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Workers with Pending Payments</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 text-left">
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Worker Name</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Project</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Amount</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Due Date</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Days Until Due</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingPayments.map((payment) => (
                    <tr
                      key={payment.id}
                      className="border-b border-border/50 last:border-0 transition-colors hover:bg-muted/50"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{payment.name}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{payment.project}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground">{payment.amount}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{payment.dueDate}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            payment.daysUntilDue <= 2
                              ? "bg-destructive/10 text-destructive"
                              : payment.daysUntilDue <= 5
                                ? "bg-warning/10 text-warning"
                                : "bg-success/10 text-success"
                          }`}
                        >
                          {payment.daysUntilDue} days
                        </span>
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
