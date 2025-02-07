import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { MdBookOnline, MdPriceChange, MdOutlineModeOfTravel, MdCarRepair } from "react-icons/md";


// Menu items.
const items = [
    {
        title: "Booking Service",
        url: "#",
        icon: MdBookOnline,
    },
    {
        title: "Estimasi Harga",
        url: "#",
        icon: MdPriceChange,
    },
    {
        title: "Website Auto2000 Cibiru",
        url: "#",
        icon: MdOutlineModeOfTravel,
    },
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="offcanvas">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        <div className="flex items-center gap-2">
                            <MdCarRepair size={'1.5em'} />
                            <span className="font-bold italic">Auto <span className="text-red-500">2000</span></span>
                        </div>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}