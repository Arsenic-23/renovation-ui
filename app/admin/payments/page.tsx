import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StatusBadge } from "@/components/status-badge"
import { Search, Filter } from "lucide-react"

export default function PaymentsPage() {
  const payments = [
    {
      id: "PAY-001",
      workerName: "Mike Johnson",
      period: "Dec 1-15, 2024",
      totalHours: 120,
      amount: "$5,400",
      status: "paid" as const,
      paymentDate: "2024-12-20",
    },
    {
      id: "PAY-002",
      workerName: "Sarah Williams",
      period: "Dec 16-31, 2024",
      totalHours: 128,
      amount: "$7,040",
      status: "pending" as const,
      paymentDate: "-",
    },
    {
      id: "PAY-003",
      workerName: "James Rodriguez",
      period: "Dec 16-31, 2024",
      totalHours: 115,
      amount: "$5,750",
      status: "pending" as const,
      paymentDate: "-",
    },
    {
      id: "PAY-004",
      workerName: "Emily Chen",
      period: "Dec 1-15, 2024",
      totalHours: 96,
      amount: "$4,032",
      status: "paid" as const,
      paymentDate: "2024-12-18",
    },
    {
      id: "PAY-005",
      workerName: "Robert Martinez",
      period: "Dec 16-31, 2024",
      totalHours: 88,
      amount: "$3,344",
      status: "pending" as const,
      paymentDate: "-",
    },
    {
      id: "PAY-006",
      workerName: "Lisa Anderson",
      period: "Dec 1-15, 2024",
      totalHours: 104,
      amount: "$6,240",
      status: "paid" as const,
      paymentDate: "2024-12-19",
    },
  ]

  return (
    <DashboardLayout
      role="admin"
      breadcrumbs={[{ label: "Dashboard", href: "/admin" }, { label: "Payments" }]}
      userName="John Doe"
      userRole="Administrator"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">Payments Overview</h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Track worker payments and pending transactions
            </p>
          </div>
        </div>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search payments..." className="pl-9" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Filter className="h-4 w-4" />
                  Status
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
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Period</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Total Hours</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Amount</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Payment Date</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => (
                    <tr
                      key={payment.id}
                      className="border-b border-border/50 last:border-0 transition-colors hover:bg-muted/50"
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-foreground">{payment.workerName}</div>
                        <div className="text-xs text-muted-foreground">{payment.id}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{payment.period}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{payment.totalHours}h</td>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground">{payment.amount}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={payment.status} />
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{payment.paymentDate}</td>
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
