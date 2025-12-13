"use client"

import type React from "react"
import { DollarSign, MapPin } from "lucide-react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FolderKanban, Users, Package, FileText, Settings, HardHat, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  roles: string[]
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: Home,
    roles: ["admin"],
  },
  {
    title: "Projects",
    href: "/admin/projects",
    icon: FolderKanban,
    roles: ["admin"],
  },
  {
    title: "Workers",
    href: "/admin/workers",
    icon: Users,
    roles: ["admin"],
  },
  {
    title: "Materials",
    href: "/admin/materials",
    icon: Package,
    roles: ["admin"],
  },
  {
    title: "Attendance",
    href: "/admin/attendance",
    icon: Clock,
    roles: ["admin"],
  },
  {
    title: "Payments",
    href: "/admin/payments",
    icon: DollarSign,
    roles: ["admin"],
  },
  {
    title: "Reports",
    href: "/admin/reports",
    icon: FileText,
    roles: ["admin"],
  },
  {
    title: "Dashboard",
    href: "/worker",
    icon: Home,
    roles: ["worker"],
  },
  {
    title: "Attendance",
    href: "/worker/attendance",
    icon: Clock,
    roles: ["worker"],
  },
  {
    title: "My Projects",
    href: "/worker/projects",
    icon: MapPin,
    roles: ["worker"],
  },
  {
    title: "Project View",
    href: "/client",
    icon: Home,
    roles: ["client"],
  },
  {
    title: "Project Detail",
    href: "/client/project",
    icon: FolderKanban,
    roles: ["client"],
  },
]

export function Sidebar({ role = "admin" }: { role?: string }) {
  const pathname = usePathname()
  const filteredItems = navItems.filter((item) => item.roles.includes(role))

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-sidebar">
      <div className="flex h-16 items-center border-b border-sidebar-border px-6">
        <Link href={`/${role}`} className="flex items-center gap-2 font-semibold text-sidebar-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <HardHat className="h-5 w-5" />
          </div>
          <span className="text-lg">RenovationPro</span>
        </Link>
      </div>
      <nav className="space-y-1 p-4">
        {filteredItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <Icon className="h-5 w-5" />
              {item.title}
            </Link>
          )
        })}
      </nav>
      <div className="absolute bottom-0 w-full border-t border-sidebar-border p-4">
        <Link
          href={`/${role}/settings`}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        >
          <Settings className="h-5 w-5" />
          Settings
        </Link>
      </div>
    </aside>
  )
}
