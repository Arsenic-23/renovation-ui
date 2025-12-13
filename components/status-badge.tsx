import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  status: "active" | "pending" | "completed" | "paid" | "overdue" | "cancelled" | "in_progress" | "on_hold"
  className?: string
}

const statusConfig = {
  active: {
    label: "Active",
    className: "bg-accent/10 text-accent border-accent/20",
  },
  in_progress: {
    label: "In Progress",
    className: "bg-accent/10 text-accent border-accent/20",
  },
  pending: {
    label: "Pending",
    className: "bg-warning/10 text-warning-foreground border-warning/20",
  },
  completed: {
    label: "Completed",
    className: "bg-success/10 text-success border-success/20",
  },
  paid: {
    label: "Paid",
    className: "bg-success/10 text-success border-success/20",
  },
  overdue: {
    label: "Overdue",
    className: "bg-destructive/10 text-destructive border-destructive/20",
  },
  on_hold: {
    label: "On Hold",
    className: "bg-muted text-muted-foreground border-border",
  },
  cancelled: {
    label: "Cancelled",
    className: "bg-muted text-muted-foreground border-border",
  },
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status]

  if (!config) {
    console.warn(`[v0] Unknown status: ${status}`)
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
          "bg-muted text-muted-foreground border-border",
          className,
        )}
      >
        {status}
      </span>
    )
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        config.className,
        className,
      )}
    >
      {config.label}
    </span>
  )
}
