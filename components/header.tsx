"use client"

import { ChevronDown, User, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { NotificationsPanel } from "@/components/notifications-panel"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

interface HeaderProps {
  breadcrumbs?: { label: string; href?: string }[]
  userName?: string
  userRole?: string
}

export function Header({ breadcrumbs, userName = "John Doe", userRole = "Admin" }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card px-6">
      <div className="flex items-center gap-2 text-sm">
        {breadcrumbs?.map((crumb, index) => (
          <div key={index} className="flex items-center gap-2">
            {index > 0 && <span className="text-muted-foreground">/</span>}
            <span
              className={index === breadcrumbs.length - 1 ? "font-medium text-foreground" : "text-muted-foreground"}
            >
              {crumb.label}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <NotificationsPanel />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 hover:bg-accent">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground text-sm font-medium">
                  {userName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-left">
                <span className="text-sm font-medium">{userName}</span>
                <span className="text-xs text-muted-foreground">{userRole}</span>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72 p-0">
            <div className="border-b border-border bg-muted/50 p-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                    {userName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{userName}</p>
                  <p className="text-sm text-muted-foreground">{userRole}</p>
                </div>
              </div>
            </div>

            <div className="p-2">
              <DropdownMenuLabel className="px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Switch Dashboard
              </DropdownMenuLabel>
              <Tabs defaultValue="admin" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-9">
                  <TabsTrigger value="admin" className="text-xs" asChild>
                    <Link href="/admin">Admin</Link>
                  </TabsTrigger>
                  <TabsTrigger value="worker" className="text-xs" asChild>
                    <Link href="/worker">Worker</Link>
                  </TabsTrigger>
                  <TabsTrigger value="client" className="text-xs" asChild>
                    <Link href="/client">Client</Link>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <DropdownMenuSeparator className="my-1" />

            <div className="p-2">
              <DropdownMenuItem className="cursor-pointer rounded-md" asChild>
                <Link href="/admin/settings" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded-md" asChild>
                <Link href="/admin/settings" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
            </div>

            <DropdownMenuSeparator className="my-1" />

            <div className="p-2">
              <DropdownMenuItem className="cursor-pointer rounded-md text-destructive focus:text-destructive">
                <LogOut className="h-4 w-4 mr-2" />
                <span>Log out</span>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
