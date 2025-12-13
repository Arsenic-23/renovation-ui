import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function WorkerDetailPage({ params }: { params: { id: string } }) {
  const worker = {
    id: params.id,
    name: "Mike Johnson",
    role: "General Contractor",
    hourlyRate: "$45/hr",
    email: "mike.johnson@example.com",
    phone: "(416) 555-0123",
  }

  const attendanceSummary = {
    totalDays: 48,
    totalHours: 384,
    projects: [
      { name: "Maple Avenue Kitchen Remodel", days: 22, hours: 176 },
      { name: "Birch Lane Full Home Renovation", days: 26, hours: 208 },
    ],
  }

  const paymentSummary = {
    totalEarned: "$17,280",
    paidAmount: "$14,080",
    pendingAmount: "$3,200",
  }

  return (
    <DashboardLayout
      role="admin"
      breadcrumbs={[
        { label: "Dashboard", href: "/admin" },
        { label: "Workers", href: "/admin/workers" },
        { label: worker.name },
      ]}
      userName="John Doe"
      userRole="Administrator"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">{worker.name}</h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {worker.role} • {worker.id}
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border/50">
            <CardHeader className="border-b border-border/50 bg-muted/30">
              <CardTitle className="text-lg">Worker Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <div>
                <div className="text-sm text-muted-foreground">Name</div>
                <div className="mt-1 font-medium text-foreground">{worker.name}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Role</div>
                <div className="mt-1 font-medium text-foreground">{worker.role}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Hourly Rate</div>
                <div className="mt-1 font-medium text-foreground">{worker.hourlyRate}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="mt-1 font-medium text-foreground">{worker.email}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <div className="mt-1 font-medium text-foreground">{worker.phone}</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="border-b border-border/50 bg-muted/30">
              <CardTitle className="text-lg">Payment Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <div>
                <div className="text-sm text-muted-foreground">Total Earned</div>
                <div className="mt-1 text-2xl font-semibold text-foreground">{paymentSummary.totalEarned}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Paid Amount</div>
                <div className="mt-1 text-xl font-medium text-success">{paymentSummary.paidAmount}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Pending Amount</div>
                <div className="mt-1 text-xl font-medium text-warning">{paymentSummary.pendingAmount}</div>
              </div>
              <Button className="mt-4 w-full gap-2">
                <CheckCircle className="h-4 w-4" />
                Mark as Paid
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle className="text-lg">Attendance Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div>
                <div className="text-sm text-muted-foreground">Total Days Worked</div>
                <div className="mt-1 text-2xl font-semibold text-foreground">{attendanceSummary.totalDays}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Total Hours</div>
                <div className="mt-1 text-2xl font-semibold text-foreground">{attendanceSummary.totalHours}h</div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="mb-4 text-sm font-medium text-foreground">Project-wise Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50 text-left">
                      <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Project Name</th>
                      <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Days Worked</th>
                      <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Total Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceSummary.projects.map((project, index) => (
                      <tr
                        key={index}
                        className="border-b border-border/50 last:border-0 transition-colors hover:bg-muted/50"
                      >
                        <td className="px-4 py-4 text-sm text-foreground">{project.name}</td>
                        <td className="px-4 py-4 text-sm text-muted-foreground">{project.days}</td>
                        <td className="px-4 py-4 text-sm font-medium text-foreground">{project.hours}h</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
