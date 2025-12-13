import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, FileText } from "lucide-react"

export default function MaterialsPage() {
  const materials = [
    {
      id: "MAT-001",
      projectName: "Maple Avenue Kitchen Remodel",
      itemName: "Granite Countertop",
      estimatedCost: "$3,500",
      actualCost: "$3,200",
      vendor: "Stone & Tile Co.",
      receipt: "REC-2024-1201.pdf",
      date: "2024-12-01",
    },
    {
      id: "MAT-002",
      projectName: "Maple Avenue Kitchen Remodel",
      itemName: "Kitchen Cabinet Set",
      estimatedCost: "$8,000",
      actualCost: "$8,500",
      vendor: "Custom Cabinets Plus",
      receipt: "REC-2024-1203.pdf",
      date: "2024-12-03",
    },
    {
      id: "MAT-003",
      projectName: "Oak Street Basement Renovation",
      itemName: "Luxury Vinyl Flooring",
      estimatedCost: "$2,800",
      actualCost: "$2,650",
      vendor: "FloorMaster",
      receipt: "REC-2024-1115.pdf",
      date: "2024-11-15",
    },
    {
      id: "MAT-004",
      projectName: "Pine Road Bathroom Upgrade",
      itemName: "Walk-in Shower Kit",
      estimatedCost: "$1,200",
      actualCost: "$1,250",
      vendor: "Bath Fixtures Inc.",
      receipt: "REC-2024-1208.pdf",
      date: "2024-12-08",
    },
    {
      id: "MAT-005",
      projectName: "Cedar Court Deck Construction",
      itemName: "Pressure-Treated Lumber",
      estimatedCost: "$1,800",
      actualCost: "$1,750",
      vendor: "BuildPro Supply",
      receipt: "REC-2024-1125.pdf",
      date: "2024-11-25",
    },
    {
      id: "MAT-006",
      projectName: "Birch Lane Full Home Renovation",
      itemName: "Electrical Wiring Bundle",
      estimatedCost: "$4,500",
      actualCost: "$4,200",
      vendor: "ElectroCorp",
      receipt: "REC-2024-1210.pdf",
      date: "2024-12-10",
    },
  ]

  return (
    <DashboardLayout
      role="admin"
      breadcrumbs={[{ label: "Dashboard", href: "/admin" }, { label: "Materials & Receipts" }]}
      userName="John Doe"
      userRole="Administrator"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">Materials & Receipts</h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Cross-project material tracking and cost visibility
            </p>
          </div>
        </div>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search materials..." className="pl-9" />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Filter className="h-4 w-4" />
                  Project
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Filter className="h-4 w-4" />
                  Date Range
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 text-left">
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Project Name</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Item Name</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Estimated Cost</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Actual Cost</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Vendor</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Receipt</th>
                    <th className="px-6 py-4 text-sm font-medium text-muted-foreground">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((material) => (
                    <tr
                      key={material.id}
                      className="border-b border-border/50 last:border-0 transition-colors hover:bg-muted/50"
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-foreground">{material.projectName}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground">{material.itemName}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{material.estimatedCost}</td>
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{material.actualCost}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{material.vendor}</td>
                      <td className="px-6 py-4">
                        <Button variant="ghost" size="sm" className="gap-2 h-8">
                          <FileText className="h-4 w-4" />
                          {material.receipt}
                        </Button>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{material.date}</td>
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
