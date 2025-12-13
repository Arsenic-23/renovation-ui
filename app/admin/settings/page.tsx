import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function AdminSettings() {
  return (
    <DashboardLayout role="admin" breadcrumbs={[{ label: "Settings" }]} userName="John Doe" userRole="Administrator">
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
            <CardDescription>Update your personal information and profile details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" defaultValue="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@renovationpro.ca"
                defaultValue="john.doe@renovationpro.ca"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" defaultValue="+1 (555) 123-4567" />
            </div>
            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>

        {/* Company Settings */}
        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Company Information</CardTitle>
            <CardDescription>Manage your company details and branding.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input id="companyName" placeholder="RenovationPro" defaultValue="RenovationPro" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Business Address</Label>
              <Input id="address" placeholder="123 Main St, Toronto, ON" defaultValue="123 Main St, Toronto, ON" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="taxId">Tax ID Number</Label>
              <Input id="taxId" placeholder="123456789" defaultValue="123456789" />
            </div>
            <div className="flex justify-end">
              <Button>Update Company Info</Button>
            </div>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card className="border-border/50">
          <CardHeader className="border-b border-border/50 bg-muted/30">
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Choose how you want to receive notifications.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="emailNotifications" className="text-base">
                  Email Notifications
                </Label>
                <p className="text-sm text-muted-foreground">Receive email updates about your projects</p>
              </div>
              <Switch id="emailNotifications" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="paymentAlerts" className="text-base">
                  Payment Alerts
                </Label>
                <p className="text-sm text-muted-foreground">Get notified about upcoming payments</p>
              </div>
              <Switch id="paymentAlerts" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="projectUpdates" className="text-base">
                  Project Updates
                </Label>
                <p className="text-sm text-muted-foreground">Receive updates when project status changes</p>
              </div>
              <Switch id="projectUpdates" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="workerAttendance" className="text-base">
                  Worker Attendance
                </Label>
                <p className="text-sm text-muted-foreground">Daily attendance reports and alerts</p>
              </div>
              <Switch id="workerAttendance" />
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
