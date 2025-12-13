import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ReportsPage() {
  const projectCostSummary = [
    { project: "Maple Avenue Kitchen Remodel", totalBudget: "$45,000", spent: "$32,500", remaining: "$12,500" },
    { project: "Oak Street Basement Renovation", totalBudget: "$68,000", spent: "$68,000", remaining: "$0" },
    { project: "Pine Road Bathroom Upgrade", totalBudget: "$28,500", spent: "$14,200", remaining: "$14,300" },
    { project: "Birch Lane Full Home Renovation", totalBudget: "$185,000", spent: "$25,000", remaining: "$160,000" },
    { project: "Cedar Court Deck Construction", totalBudget: "$22,000", spent: "$22,800", remaining: "-$800" },
  ]

  const workerCostSummary = [
    { worker: "Mike Johnson", totalHours: 384, hourlyRate: "$45", totalCost: "$17,280" },
    { worker: "Sarah Williams", totalHours: 312, hourlyRate: "$55", totalCost: "$17,160" },
    { worker: "James Rodriguez", totalHours: 428, hourlyRate: "$50", totalCost: "$21,400" },
    { worker: "Emily Chen", totalHours: 256, hourlyRate: "$42", totalCost: "$10,752" },
    { worker: "Robert Martinez", totalHours: 188, hourlyRate: "$38", totalCost: "$7,144" },
  ]

  const attendanceSummary = [
    { month: "January 2025", totalDays: 22, workersPresent: 892, averageAttendance: "92%" },
    { month: "December 2024", totalDays: 21, workersPresent: 864, averageAttendance: "89%" },
    { month: "November 2024", totalDays: 22, workersPresent: 910, averageAttendance: "94%" },
  ]

  return (
    <DashboardLayout
      role="admin"
      breadcrumbs={[{ label: "Dashboard", href: "/admin" }, { label: "Reports" }]}
      userName="John Doe"
      userRole="Administrator"
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Reports</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Basic reporting for operational review</p>
        </div>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Project Cost Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 text-left">
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Project Name</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Total Budget</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Spent</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Remaining</th>
                  </tr>
                </thead>
                <tbody>
                  {projectCostSummary.map((project, index) => (
                    <tr
                      key={index}
                      className="border-b border-border/50 last:border-0 transition-colors hover:bg-muted/50"
                    >
                      <td className="px-6 py-4 font-medium text-foreground">{project.project}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{project.totalBudget}</td>
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{project.spent}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground">{project.remaining}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Worker Cost Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 text-left">
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Worker Name</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Total Hours</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Hourly Rate</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {workerCostSummary.map((worker, index) => (
                    <tr
                      key={index}
                      className="border-b border-border/50 last:border-0 transition-colors hover:bg-muted/50"
                    >
                      <td className="px-6 py-4 font-medium text-foreground">{worker.worker}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{worker.totalHours}h</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{worker.hourlyRate}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground">{worker.totalCost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Attendance Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 text-left">
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Month</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Total Working Days</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Workers Present</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Average Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceSummary.map((record, index) => (
                    <tr
                      key={index}
                      className="border-b border-border/50 last:border-0 transition-colors hover:bg-muted/50"
                    >
                      <td className="px-6 py-4 font-medium text-foreground">{record.month}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{record.totalDays}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{record.workersPresent}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-success">{record.averageAttendance}</td>
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
