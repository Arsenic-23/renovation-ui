import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, DollarSign, Briefcase, CheckCircle } from "lucide-react"

export default function WorkerDashboard() {
  const todayProject = {
    name: "Maple Avenue Kitchen Remodel",
    location: "Toronto, ON",
    startTime: "07:00 AM",
  }

  const attendanceStatus = {
    isWorking: true,
    status: "Working",
  }

  const stats = {
    hoursThisWeek: 42,
    pendingPayment: "$3,200",
  }

  return (
    <DashboardLayout role="worker" breadcrumbs={[{ label: "Dashboard" }]} userName="Mike Johnson" userRole="Worker">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">My Dashboard</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Welcome back, Mike!</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Today's Project</CardTitle>
              <Briefcase className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold text-foreground">{todayProject.name}</div>
              <p className="mt-1 text-xs text-muted-foreground">{todayProject.location}</p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Attendance Status</CardTitle>
              <CheckCircle
                className={`h-5 w-5 ${attendanceStatus.isWorking ? "text-success" : "text-muted-foreground"}`}
              />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-foreground">{attendanceStatus.status}</div>
              <p className="mt-1 text-xs text-muted-foreground">Started at {todayProject.startTime}</p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Hours This Week</CardTitle>
              <Clock className="h-5 w-5 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-foreground">{stats.hoursThisWeek}h</div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Payment</CardTitle>
              <DollarSign className="h-5 w-5 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-foreground">{stats.pendingPayment}</div>
              <p className="mt-1 text-xs text-muted-foreground">Read-only</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
