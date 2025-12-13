"use client"

import { Bell, CheckCircle, AlertCircle, Info, Clock, Trash2, BellDot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface Notification {
  id: string
  type: "success" | "warning" | "info"
  title: string
  message: string
  time: string
  read: boolean
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "warning",
    title: "Payment Due",
    message: "Worker payment for Oak Street project is due in 2 days",
    time: "2 hours ago",
    read: false,
  },
  {
    id: "2",
    type: "success",
    title: "Project Completed",
    message: "Maple Avenue Kitchen Remodel has been marked as completed",
    time: "5 hours ago",
    read: false,
  },
  {
    id: "3",
    type: "info",
    title: "New Material Order",
    message: "Hardware supplies have been ordered for Pine Road project",
    time: "1 day ago",
    read: true,
  },
  {
    id: "4",
    type: "warning",
    title: "Material Shortage",
    message: "Pine Road project is running low on cement",
    time: "1 day ago",
    read: true,
  },
  {
    id: "5",
    type: "success",
    title: "Worker Arrived",
    message: "Mike Johnson has checked in at Elm Street project",
    time: "2 days ago",
    read: true,
  },
]

export function NotificationsPanel() {
  const unreadCount = mockNotifications.filter((n) => !n.read).length

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5" />
      case "warning":
        return <AlertCircle className="h-5 w-5" />
      case "info":
        return <Info className="h-5 w-5" />
    }
  }

  const getTypeStyles = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return {
          container:
            "border-l-4 border-l-emerald-500 bg-gradient-to-r from-emerald-50/80 to-transparent dark:from-emerald-950/30 dark:to-transparent hover:from-emerald-50 dark:hover:from-emerald-950/40",
          icon: "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/20",
        }
      case "warning":
        return {
          container:
            "border-l-4 border-l-amber-500 bg-gradient-to-r from-amber-50/80 to-transparent dark:from-amber-950/30 dark:to-transparent hover:from-amber-50 dark:hover:from-amber-950/40",
          icon: "bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/20",
        }
      case "info":
        return {
          container:
            "border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50/80 to-transparent dark:from-blue-950/30 dark:to-transparent hover:from-blue-50 dark:hover:from-blue-950/40",
          icon: "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20",
        }
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative hover:bg-accent/80 transition-all hover:scale-105">
          {unreadCount > 0 ? <BellDot className="h-5 w-5 text-primary animate-pulse" /> : <Bell className="h-5 w-5" />}
          {unreadCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-[10px] font-bold text-white shadow-lg shadow-red-500/50 ring-2 ring-background animate-pulse">
              {unreadCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col p-0 shadow-2xl">
        <SheetHeader className="border-b border-border/50 bg-gradient-to-r from-muted/50 to-muted/30 p-6 pb-5">
          <div className="flex items-center justify-between">
            <div>
              <SheetTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/20">
                  <Bell className="h-5 w-5 text-primary-foreground" />
                </div>
                Notifications
              </SheetTitle>
              <SheetDescription className="mt-2">
                {unreadCount > 0 ? (
                  <span className="flex items-center gap-2">
                    <Badge variant="destructive" className="h-6 px-2 text-xs font-semibold shadow-md shadow-red-500/20">
                      {unreadCount} New
                    </Badge>
                    <span className="text-muted-foreground">unread notifications</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    You're all caught up!
                  </span>
                )}
              </SheetDescription>
            </div>
            <Button variant="ghost" size="sm" className="h-8 text-xs hover:bg-accent/80 transition-colors">
              Clear All
            </Button>
          </div>
        </SheetHeader>

        <ScrollArea className="flex-1 px-6">
          <div className="space-y-3 py-5">
            {mockNotifications.map((notification) => {
              const styles = getTypeStyles(notification.type)
              return (
                <div
                  key={notification.id}
                  className={cn(
                    "group relative rounded-xl border border-border/50 bg-card p-4 transition-all duration-200 hover:shadow-lg hover:scale-[1.01] hover:border-border",
                    styles.container,
                    notification.read && "opacity-60 hover:opacity-100",
                  )}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-110",
                        styles.icon,
                      )}
                    >
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1 space-y-2 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-sm text-foreground leading-tight tracking-tight">
                          {notification.title}
                        </h4>
                        {!notification.read && (
                          <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary to-primary/80 shrink-0 mt-1 shadow-md shadow-primary/50 animate-pulse" />
                        )}
                      </div>
                      <p className="text-pretty text-sm text-muted-foreground leading-relaxed">
                        {notification.message}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground/80">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{notification.time}</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 shrink-0 opacity-0 group-hover:opacity-100 transition-all hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>

        <div className="border-t border-border/50 bg-gradient-to-r from-muted/30 to-muted/20 p-5">
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 bg-background/50 backdrop-blur-sm hover:bg-accent/80 transition-all hover:scale-[1.02] shadow-sm"
              size="sm"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Mark All Read
            </Button>
            <Button
              variant="default"
              className="flex-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]"
              size="sm"
            >
              View All
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
