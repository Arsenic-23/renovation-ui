"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Square } from "lucide-react"
import { useState } from "react"

export default function WorkerAttendancePage() {
  const [isWorking, setIsWorking] = useState(false)
  const [workLog, setWorkLog] = useState({
    startTime: "",
    endTime: "",
    totalHours: 0,
  })

  const currentProject = {
    name: "Maple Avenue Kitchen Remodel",
    location: "Toronto, ON",
  }

  const handleStartWork = () => {
    const now = new Date()
    setIsWorking(true)
    setWorkLog({
      startTime: now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      endTime: "",
      totalHours: 0,
    })
  }

  const handleEndWork = () => {
    const now = new Date()
    const endTime = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })

    setIsWorking(false)
    setWorkLog((prev) => ({
      ...prev,
      endTime,
      totalHours: 8.5,
    }))
  }

  return (
    <DashboardLayout
      role="worker"
      breadcrumbs={[{ label: "Dashboard", href: "/worker" }, { label: "Attendance" }]}
      userName="Mike Johnson"
      userRole="Worker"
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Attendance</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Track your work hours</p>
        </div>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Current Project</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-xl font-semibold text-foreground">{currentProject.name}</div>
            <p className="mt-1 text-sm text-muted-foreground">{currentProject.location}</p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border/50">
            <CardContent className="flex items-center justify-center p-12">
              <Button size="lg" className="h-32 w-full gap-3 text-lg" onClick={handleStartWork} disabled={isWorking}>
                <Play className="h-8 w-8" />
                Start Work
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="flex items-center justify-center p-12">
              <Button
                size="lg"
                variant="destructive"
                className="h-32 w-full gap-3 text-lg"
                onClick={handleEndWork}
                disabled={!isWorking}
              >
                <Square className="h-8 w-8" />
                End Work
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Today's Work Log</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <div className="text-sm font-medium text-muted-foreground">Start Time</div>
                <div className="mt-2 text-2xl font-semibold text-foreground">{workLog.startTime || "-"}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">End Time</div>
                <div className="mt-2 text-2xl font-semibold text-foreground">{workLog.endTime || "-"}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Total Hours</div>
                <div className="mt-2 text-2xl font-semibold text-foreground">
                  {workLog.totalHours > 0 ? `${workLog.totalHours}h` : "-"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
