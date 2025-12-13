import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

export default function AttendancePage() {
  const attendance = [
    {
      id: "ATT-001",
      workerName: "Mike Johnson",
      project: "Maple Avenue Kitchen Remodel",
      date: "2025-01-13",
      startTime: "07:00 AM",
      endTime: "03:30 PM",
      hoursWorked: 8.5,
    },
    {
      id: "ATT-002",
      workerName: "Sarah Williams",
      project: "Oak Street Basement Renovation",
      date: "2025-01-13",
      startTime: "08:00 AM",
      endTime: "05:00 PM",
      hoursWorked: 9.0,
    },
    {
      id: "ATT-003",
      workerName: "James Rodriguez",
      project: "Pine Road Bathroom Upgrade",
      date: "2025-01-13",
      startTime: "07:30 AM",
      endTime: "04:00 PM",
      hoursWorked: 8.5,
    },
    {
      id: "ATT-004",
      workerName: "Emily Chen",
      project: "Cedar Court Deck Construction",
      date: "2025-01-13",
      startTime: "08:00 AM",
      endTime: "04:30 PM",
      hoursWorked: 8.5,
    },
    {
      id: "ATT-005",
      workerName: "Mike Johnson",
      project: "Birch Lane Full Home Renovation",
      date: "2025-01-12",
      startTime: "07:00 AM",
      endTime: "03:00 PM",
      hoursWorked: 8.0,
    },
    {
      id: "ATT-006",
      workerName: "Robert Martinez",
      project: "Maple Avenue Kitchen Remodel",
      date: "2025-01-12",
      startTime: "09:00 AM",
      endTime: "05:00 PM",
      hoursWorked: 8.0,
    },
  ]

  return (
    <DashboardLayout
      role="admin"
      breadcrumbs={[{ label: "Dashboard", href: "/admin" }, { label: "Attendance" }]}
      userName="John Doe"
      userRole="Administrator"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">Attendance Overview</h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Track worker attendance and hours across projects
            </p>
          </div>
        </div>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search attendance records..." className="pl-9" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Filter className="h-4 w-4" />
                  Date
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Filter className="h-4 w-4" />
                  Worker
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Filter className="h-4 w-4" />
                  Project
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 text-left">
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Worker Name</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Project</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Date</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Start Time</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">End Time</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Hours Worked</th>
                  </tr>
                </thead>
                <tbody>
                  {attendance.map((record) => (
                    <tr
                      key={record.id}
                      className="border-b border-border/50 last:border-0 transition-colors hover:bg-muted/50"
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-foreground">{record.workerName}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{record.project}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{record.date}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{record.startTime}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{record.endTime}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground">{record.hoursWorked}h</td>
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
