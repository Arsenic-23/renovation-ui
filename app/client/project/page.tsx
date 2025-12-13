import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "@/components/status-badge"
import { FileText, CheckCircle2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ClientProjectDetailPage() {
  const project = {
    id: "PRJ-001",
    name: "Maple Avenue Kitchen Remodel",
    progress: 72,
    totalBudget: 45000,
    budgetUsed: 32500,
    budgetRemaining: 12500,
  }

  const payments = {
    advancePayment: {
      amount: 9000,
      percentage: 20,
      status: "paid" as const,
      paidDate: "2024-10-15",
    },
    milestones: [
      {
        id: 1,
        name: "Demolition & Preparation",
        amount: 9000,
        percentage: 20,
        status: "paid" as const,
        paidDate: "2024-10-22",
        dueDate: "2024-10-20",
      },
      {
        id: 2,
        name: "Plumbing & Electrical Work",
        amount: 11250,
        percentage: 25,
        status: "paid" as const,
        paidDate: "2024-11-15",
        dueDate: "2024-11-12",
      },
      {
        id: 3,
        name: "Cabinet Installation & Countertops",
        amount: 11250,
        percentage: 25,
        status: "pending" as const,
        paidDate: null,
        dueDate: "2024-12-20",
      },
      {
        id: 4,
        name: "Final Finishing & Inspection",
        amount: 4500,
        percentage: 10,
        status: "upcoming" as const,
        paidDate: null,
        dueDate: "2025-01-15",
      },
    ],
  }

  const documents = [
    {
      name: "Project Contract",
      type: "PDF",
      uploadedDate: "2024-10-15",
    },
    {
      name: "Building Permit",
      type: "PDF",
      uploadedDate: "2024-10-20",
    },
    {
      name: "Kitchen Cabinet Receipt",
      type: "PDF",
      uploadedDate: "2024-12-03",
    },
    {
      name: "Countertop Receipt",
      type: "PDF",
      uploadedDate: "2024-12-01",
    },
  ]

  const totalPaid =
    payments.advancePayment.amount +
    payments.milestones.filter((m) => m.status === "paid").reduce((sum, m) => sum + m.amount, 0)
  const totalPending = payments.milestones
    .filter((m) => m.status === "pending" || m.status === "upcoming")
    .reduce((sum, m) => sum + m.amount, 0)

  return (
    <DashboardLayout
      role="client"
      breadcrumbs={[{ label: "Dashboard", href: "/client" }, { label: "Project Detail" }]}
      userName="Sarah Johnson"
      userRole="Client"
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">{project.name}</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">View your project details and progress</p>
        </div>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Project Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progress Percentage</span>
                <span className="text-xl font-semibold text-foreground">{project.progress}%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
                <div className="h-full bg-primary transition-all" style={{ width: `${project.progress}%` }} />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-border/50">
            <CardHeader className="border-b border-border/50 bg-muted/30 pb-3">
              <CardTitle className="text-sm">Total Budget</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-2xl font-semibold text-foreground">${project.totalBudget.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="border-b border-border/50 bg-muted/30 pb-3">
              <CardTitle className="text-sm">Budget Used</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-2xl font-semibold text-foreground">${project.budgetUsed.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="border-b border-border/50 bg-muted/30 pb-3">
              <CardTitle className="text-sm">Budget Remaining</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-2xl font-semibold text-success">${project.budgetRemaining.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Payment Overview</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-border/50 bg-muted/30 p-4">
                <div className="text-sm text-muted-foreground">Total Paid</div>
                <div className="mt-1 text-2xl font-semibold text-success">${totalPaid.toLocaleString()}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {((totalPaid / project.totalBudget) * 100).toFixed(0)}% of total budget
                </div>
              </div>
              <div className="rounded-lg border border-border/50 bg-muted/30 p-4">
                <div className="text-sm text-muted-foreground">Pending Payments</div>
                <div className="mt-1 text-2xl font-semibold text-warning">${totalPending.toLocaleString()}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {((totalPending / project.totalBudget) * 100).toFixed(0)}% of total budget
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle className="flex items-center gap-2">
              Advance Payment
              {payments.advancePayment.status === "paid" && <CheckCircle2 className="h-5 w-5 text-success" />}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">
                  {payments.advancePayment.percentage}% of total project cost
                </div>
                <div className="text-2xl font-semibold text-foreground">
                  ${payments.advancePayment.amount.toLocaleString()}
                </div>
                {payments.advancePayment.paidDate && (
                  <div className="text-sm text-muted-foreground">Paid on {payments.advancePayment.paidDate}</div>
                )}
              </div>
              <StatusBadge status={payments.advancePayment.status} />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Milestone Payments</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border/50">
              {payments.milestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className="flex items-center justify-between gap-4 p-6 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        milestone.status === "paid"
                          ? "bg-success/10"
                          : milestone.status === "pending"
                            ? "bg-warning/10"
                            : "bg-muted"
                      }`}
                    >
                      {milestone.status === "paid" ? (
                        <CheckCircle2 className="h-5 w-5 text-success" />
                      ) : (
                        <Clock className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium text-foreground">{milestone.name}</div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Due: {milestone.dueDate}</span>
                        {milestone.paidDate && <span>• Paid: {milestone.paidDate}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-lg font-semibold text-foreground">${milestone.amount.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">{milestone.percentage}%</div>
                    </div>
                    <StatusBadge status={milestone.status} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Uploaded Documents & Receipts</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border/50">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-6 transition-colors hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{doc.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {doc.type} • Uploaded {doc.uploadedDate}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
