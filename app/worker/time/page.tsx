import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/status-badge"
import { Plus, Play } from "lucide-react"

export default function TimeTrackingPage() {
  const weeklyHours = {
    total: 42,
    target: 40,
    projects: [
      { id: "PRJ-001", name: "Maple Avenue Kitchen", hours: 18.5 },
      { id: "PRJ-003", name: "Pine Road Bathroom", hours: 12.0 },
      { id: "PRJ-006", name: "Willow Street Addition", hours: 11.5 },
    ],
  }

  const timeEntries = [
    {
      id: "TE-001",
      date: "2024-12-13",
      project: "PRJ-001",
      projectName: "Maple Avenue Kitchen Remodel",
      task: "Installed kitchen cabinets",
      startTime: "08:00 AM",
      endTime: "04:30 PM",
      hours: 8.5,
      status: "completed" as const,
    },
    {
      id: "TE-002",
      date: "2024-12-12",
      project: "PRJ-003",
      projectName: "Pine Road Bathroom Upgrade",
      task: "Installed bathroom plumbing",
      startTime: "09:00 AM",
      endTime: "04:00 PM",
      hours: 7.0,
      status: "completed" as const,
    },
    {
      id: "TE-003",
      date: "2024-12-11",
      project: "PRJ-006",
      projectName: "Willow Street Master Suite",
      task: "Wall framing - second floor",
      startTime: "08:00 AM",
      endTime: "04:00 PM",
      hours: 8.0,
      status: "completed" as const,
    },
    {
      id: "TE-004",
      date: "2024-12-10",
      project: "PRJ-001",
      projectName: "Maple Avenue Kitchen Remodel",
      task: "Cabinet prep and measurement",
      startTime: "08:00 AM",
      endTime: "05:00 PM",
      hours: 9.0,
      status: "completed" as const,
    },
    {
      id: "TE-005",
      date: "2024-12-09",
      project: "PRJ-003",
      projectName: "Pine Road Bathroom Upgrade",
      task: "Rough plumbing installation",
      startTime: "09:00 AM",
      endTime: "02:00 PM",
      hours: 5.0,
      status: "completed" as const,
    },
  ]

  return (
    <DashboardLayout
      role="worker"
      breadcrumbs={[{ label: "Dashboard", href: "/worker" }, { label: "Time Tracking" }]}
      userName="James Wilson"
      userRole="General Contractor"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-foreground">Time Tracking</h1>
            <p className="mt-1 text-sm text-muted-foreground">Log and manage your work hours</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2 bg-transparent">
              <Play className="h-4 w-4" />
              Start Timer
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Entry
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-semibold text-foreground">{weeklyHours.total}h</div>
                    <div className="mt-1 text-sm text-muted-foreground">Target: {weeklyHours.target}h</div>
                  </div>
                  <div className="text-sm">
                    {weeklyHours.total > weeklyHours.target ? (
                      <span className="font-medium text-success">
                        +{weeklyHours.total - weeklyHours.target}h overtime
                      </span>
                    ) : (
                      <span className="text-muted-foreground">{weeklyHours.target - weeklyHours.total}h remaining</span>
                    )}
                  </div>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${Math.min((weeklyHours.total / weeklyHours.target) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hours by Project</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {weeklyHours.projects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-foreground">{project.name}</div>
                      <div className="text-xs text-muted-foreground">{project.id}</div>
                    </div>
                    <div className="font-semibold text-foreground">{project.hours}h</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="border-b border-border">
            <CardTitle>Time Entries</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50 text-left">
                    <th className="px-6 py-3 text-sm font-medium text-muted-foreground">Date</th>
                    <th className="px-6 py-3 text-sm font-medium text-muted-foreground">Project</th>
                    <th className="px-6 py-3 text-sm font-medium text-muted-foreground">Task</th>
                    <th className="px-6 py-3 text-sm font-medium text-muted-foreground">Start Time</th>
                    <th className="px-6 py-3 text-sm font-medium text-muted-foreground">End Time</th>
                    <th className="px-6 py-3 text-sm font-medium text-muted-foreground">Hours</th>
                    <th className="px-6 py-3 text-sm font-medium text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {timeEntries.map((entry) => (
                    <tr key={entry.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                      <td className="px-6 py-4 text-sm text-muted-foreground">{entry.date}</td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-foreground">{entry.projectName}</div>
                        <div className="text-xs text-muted-foreground">{entry.project}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground">{entry.task}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{entry.startTime}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{entry.endTime}</td>
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{entry.hours}h</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={entry.status} />
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
