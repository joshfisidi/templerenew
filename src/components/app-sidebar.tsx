"use client"

import { Home, Book, Users, Settings, Menu, Compass, BookOpen } from "lucide-react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const mainNavItems = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "Explore",
    icon: Compass,
    href: "/explore",
  },
  {
    title: "Compete",
    icon: BookOpen,
    href: "/compete",
  },
  {
    title: "Practices",
    icon: Book,
    href: "/practices",
  },
  {
    title: "Community",
    icon: Users,
    href: "/community",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border/50 p-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/logo.png" alt="Temple Renew" />
            <AvatarFallback>TR</AvatarFallback>
          </Avatar>
          <span className="font-semibold">Temple Renew</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Recent Practices</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* This could be dynamically populated */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/practice/meditation" className="flex items-center">
                    <span>Daily Meditation</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-border/50 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatar.png" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">User Name</span>
              <span className="text-xs text-muted-foreground">user@email.com</span>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}