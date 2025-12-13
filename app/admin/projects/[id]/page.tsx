import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusBadge } from "@/components/status-badge"
import { Button } from "@/components/ui/button"
import { Plus, FileText, X } from "lucide-react"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = {
    id: params.id,
    name: "Maple Avenue Kitchen Remodel",
    clientName: "Sarah Johnson",
    location: "Toronto, ON",
    status: "active" as const,
    totalBudget: 45000,
    budgetUsed: 32500,
  }

  const materialPlanning = [
    {
      id: "MP-001",
      itemName: "Kitchen Cabinets - White Shaker",
      estimatedQuantity: "15 units",
      estimatedCost: "$8,500",
      status: "pending" as const,
    },
    {
      id: "MP-002",
      itemName: "Quartz Countertop - Calacatta",
      estimatedQuantity: "45 sq ft",
      estimatedCost: "$3,200",
      status: "pending" as const,
    },
    {
      id: "MP-003",
      itemName: "Hardwood Flooring - Oak",
      estimatedQuantity: "280 sq ft",
      estimatedCost: "$2,100",
      status: "active" as const,
    },
    {
      id: "MP-004",
      itemName: "Stainless Steel Appliances",
      estimatedQuantity: "4 units",
      estimatedCost: "$4,800",
      status: "pending" as const,
    },
  ]

  const purchasedMaterials = [
    {
      id: "PM-001",
      itemName: "Granite Countertop",
      quantityPurchased: "42 sq ft",
      actualCost: "$3,200",
      vendor: "Stone & Tile Co.",
      receipt: "REC-2024-1201.pdf",
      purchaseDate: "2024-12-01",
    },
    {
      id: "PM-002",
      itemName: "Kitchen Cabinet Set",
      quantityPurchased: "15 units",
      actualCost: "$8,500",
      vendor: "Custom Cabinets Plus",
      receipt: "REC-2024-1203.pdf",
      purchaseDate: "2024-12-03",
    },
    {
      id: "PM-003",
      itemName: "Undermount Sink",
      quantityPurchased: "1 unit",
      actualCost: "$450",
      vendor: "Kitchen Fixtures Ltd",
      receipt: "REC-2024-1205.pdf",
      purchaseDate: "2024-12-05",
    },
  ]

  const assignedWorkers = [
    {
      id: "WRK-001",
      name: "Mike Johnson",
      role: "General Contractor",
      hourlyRate: "$45/hr",
    },
    {
      id: "WRK-004",
      name: "Emily Chen",
      role: "Carpenter",
      hourlyRate: "$42/hr",
    },
    {
      id: "WRK-002",
      name: "Sarah Williams",
      role: "Electrician",
      hourlyRate: "$55/hr",
    },
  ]

  const budgetPercentage = (project.budgetUsed / project.totalBudget) * 100

  return (
    <DashboardLayout
      role="admin"
      breadcrumbs={[
        { label: "Dashboard", href: "/admin" },
        { label: "Projects", href: "/admin/projects" },
        { label: project.name },
      ]}
      userName="John Doe"
      userRole="Administrator"
    >
      <div className="space-y-6">
        {/* Project Header */}
        <Card className="border-border/50">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight text-foreground">{project.name}</h1>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Client: {project.clientName} • Location: {project.location}
                  </p>
                </div>
                <StatusBadge status={project.status} />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Budget Progress</span>
                  <span className="font-medium text-foreground">
                    ${project.budgetUsed.toLocaleString()} / ${project.totalBudget.toLocaleString()}
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
                  <div className="h-full bg-primary transition-all" style={{ width: `${budgetPercentage}%` }} />
                </div>
                <div className="text-xs text-muted-foreground">{budgetPercentage.toFixed(1)}% of budget used</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Material Planning Table */}
        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between border-b border-border/50 bg-muted/30">
            <CardTitle>Material Planning</CardTitle>
            <Button size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              Add Item
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 text-left">
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Item Name</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Estimated Quantity</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Estimated Cost</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {materialPlanning.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-border/50 last:border-0 transition-colors hover:bg-muted/50"
                    >
                      <td className="px-6 py-4 font-medium text-foreground">{item.itemName}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{item.estimatedQuantity}</td>
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{item.estimatedCost}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={item.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Purchased Materials & Receipts */}
        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Purchased Materials & Receipts</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 text-left">
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Item Name</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Quantity Purchased</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Actual Cost</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Vendor</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Receipt</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Purchase Date</th>
                  </tr>
                </thead>
                <tbody>
                  {purchasedMaterials.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-border/50 last:border-0 transition-colors hover:bg-muted/50"
                    >
                      <td className="px-6 py-4 font-medium text-foreground">{item.itemName}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{item.quantityPurchased}</td>
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{item.actualCost}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{item.vendor}</td>
                      <td className="px-6 py-4">
                        <Button variant="ghost" size="sm" className="gap-2 h-8">
                          <FileText className="h-4 w-4" />
                          {item.receipt}
                        </Button>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{item.purchaseDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Assigned Workers */}
        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Assigned Workers</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 text-left">
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Worker Name</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Role</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Hourly Rate</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {assignedWorkers.map((worker) => (
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
                      <td className="px-6 py-4">
                        <Button variant="ghost" size="sm" className="gap-2 text-destructive hover:text-destructive">
                          <X className="h-4 w-4" />
                          Remove
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
