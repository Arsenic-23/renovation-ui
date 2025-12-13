import type React from "react"
import { Sidebar } from "./sidebar"
import { Header } from "./header"

interface DashboardLayoutProps {
  children: React.ReactNode
  role?: "admin" | "worker" | "client"
  breadcrumbs?: { label: string; href?: string }[]
  userName?: string
  userRole?: string
}

export function DashboardLayout({ children, role = "admin", breadcrumbs, userName, userRole }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar role={role} />
      <div className="ml-64">
        <Header breadcrumbs={breadcrumbs} userName={userName} userRole={userRole} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
