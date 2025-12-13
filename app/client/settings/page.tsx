import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function ClientSettings() {
  return (
    <DashboardLayout role="client" breadcrumbs={[{ label: "Settings" }]} userName="Sarah Johnson" userRole="Homeowner">
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Settings</h1>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>

        {/* Profile Settings */}
        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your personal information and contact details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Sarah" defaultValue="Sarah" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Johnson" defaultValue="Johnson" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="sarah.johnson@email.com"
                defaultValue="sarah.johnson@email.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 456-7890" defaultValue="+1 (555) 456-7890" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Property Address</Label>
              <Input
                id="address"
                placeholder="456 Maple Avenue, Toronto, ON"
                defaultValue="456 Maple Avenue, Toronto, ON"
              />
            </div>
            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Choose how you want to receive updates about your project.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="emailNotifications" className="text-base">
                  Email Notifications
                </Label>
                <p className="text-sm text-muted-foreground">Receive email updates about your renovation</p>
              </div>
              <Switch id="emailNotifications" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="projectUpdates" className="text-base">
                  Project Updates
                </Label>
                <p className="text-sm text-muted-foreground">Get notified when project milestones are completed</p>
              </div>
              <Switch id="projectUpdates" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="budgetAlerts" className="text-base">
                  Budget Alerts
                </Label>
                <p className="text-sm text-muted-foreground">Receive alerts about budget changes</p>
              </div>
              <Switch id="budgetAlerts" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="weeklyReports" className="text-base">
                  Weekly Progress Reports
                </Label>
                <p className="text-sm text-muted-foreground">Get weekly summaries of project progress</p>
              </div>
              <Switch id="weeklyReports" />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Security</CardTitle>
            <CardDescription>Manage your password and security preferences.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input id="confirmPassword" type="password" placeholder="••••••••" />
            </div>
            <div className="flex justify-end">
              <Button>Change Password</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
