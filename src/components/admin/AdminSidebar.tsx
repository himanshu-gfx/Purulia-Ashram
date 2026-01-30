"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Image as ImageIcon, Newspaper, Heart, LayoutDashboard, Settings, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import LogoutButton from "@/components/admin/LogoutButton";

interface AdminSidebarProps {
    children: React.ReactNode;
}

export default function AdminSidebar({ children }: AdminSidebarProps) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
        { href: "/admin/news", icon: Newspaper, label: "News & Events" },
        { href: "/admin/gallery", icon: ImageIcon, label: "Media Gallery" },
        { href: "/admin/impact", icon: Heart, label: "Our Impact" },
        { href: "/admin/settings", icon: Settings, label: "Settings" },
    ];

    const isActive = (href: string) => {
        if (href === "/admin") return pathname === "/admin";
        return pathname.startsWith(href);
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
            {/* Mobile Header */}
            <header className="admin-mobile-header">
                <button
                    className="admin-menu-toggle"
                    onClick={() => setIsMobileOpen(true)}
                    aria-label="Open menu"
                >
                    <Menu size={24} />
                </button>
                <h2 style={{ color: 'var(--primary)', margin: 0, fontSize: '1.1rem' }}>Purulia CMS</h2>
                <div style={{ width: '40px' }} /> {/* Spacer for centering */}
            </header>

            {/* Overlay for mobile */}
            {isMobileOpen && (
                <div
                    className="admin-overlay"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`admin-sidebar ${isMobileOpen ? 'open' : ''} ${isCollapsed ? 'collapsed' : ''}`}>
                <div className="admin-sidebar-header">
                    {!isCollapsed && (
                        <>
                            <h2 style={{ color: 'var(--accent)', margin: 0 }}>Purulia CMS</h2>
                            <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Ashram Management</p>
                        </>
                    )}

                    {/* Close button for mobile */}
                    <button
                        className="admin-close-btn"
                        onClick={() => setIsMobileOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>

                    {/* Collapse button for desktop */}
                    <button
                        className="admin-collapse-btn"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                    >
                        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                    </button>
                </div>

                <nav className="admin-nav">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`admin-nav-link ${isActive(item.href) ? 'active' : ''}`}
                            onClick={() => setIsMobileOpen(false)}
                            title={isCollapsed ? item.label : undefined}
                        >
                            <item.icon size={20} />
                            {!isCollapsed && <span>{item.label}</span>}
                        </Link>
                    ))}
                    <Link
                        href="/"
                        className="admin-nav-link back-to-site"
                        onClick={() => setIsMobileOpen(false)}
                        title={isCollapsed ? "Back to Site" : undefined}
                    >
                        <Home size={20} />
                        {!isCollapsed && <span>Back to Site</span>}
                    </Link>
                </nav>

                <div className="admin-sidebar-footer">
                    <LogoutButton collapsed={isCollapsed} />
                </div>
            </aside>

            {/* Main Content */}
            <main className={`admin-main ${isCollapsed ? 'expanded' : ''}`}>
                {children}
            </main>

            <style jsx global>{`
                .admin-mobile-header {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 60px;
                    background: white;
                    border-bottom: 1px solid rgba(0,0,0,0.1);
                    z-index: 1000;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 1rem;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                }

                .admin-menu-toggle {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 8px;
                    color: var(--primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    transition: background 0.2s;
                }

                .admin-menu-toggle:hover {
                    background: rgba(74, 20, 140, 0.1);
                }

                .admin-overlay {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,0.5);
                    z-index: 1001;
                }

                .admin-sidebar {
                    width: 280px;
                    background-color: var(--primary-dark);
                    color: white;
                    padding: 2rem 1.5rem;
                    display: flex;
                    flex-direction: column;
                    position: fixed;
                    height: 100vh;
                    transition: all 0.3s ease;
                    z-index: 1002;
                }

                .admin-sidebar.collapsed {
                    width: 80px;
                    padding: 2rem 1rem;
                }

                .admin-sidebar-header {
                    margin-bottom: 2rem;
                    text-align: center;
                    position: relative;
                }

                .admin-close-btn {
                    display: none;
                    position: absolute;
                    top: -10px;
                    right: -10px;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                    padding: 8px;
                    border-radius: 50%;
                    transition: background 0.2s;
                }

                .admin-close-btn:hover {
                    background: rgba(255,255,255,0.1);
                }

                .admin-collapse-btn {
                    display: flex;
                    position: absolute;
                    top: 50%;
                    right: -35px;
                    transform: translateY(-50%);
                    background: var(--primary-dark);
                    border: 2px solid rgba(255,255,255,0.2);
                    color: white;
                    cursor: pointer;
                    padding: 6px;
                    border-radius: 50%;
                    transition: all 0.2s;
                    align-items: center;
                    justify-content: center;
                }

                .admin-collapse-btn:hover {
                    background: var(--primary);
                    border-color: var(--accent);
                }

                .admin-nav {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    flex: 1;
                }

                .admin-nav-link {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.8rem 1.2rem;
                    color: rgba(255,255,255,0.7);
                    text-decoration: none;
                    border-radius: 10px;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }

                .admin-sidebar.collapsed .admin-nav-link {
                    justify-content: center;
                    padding: 0.8rem;
                }

                .admin-nav-link:hover {
                    background-color: rgba(255,255,255,0.1);
                    color: white;
                }

                .admin-nav-link.active {
                    background-color: var(--primary);
                    color: white;
                }

                .admin-nav-link.back-to-site {
                    margin-top: auto;
                }

                .admin-sidebar-footer {
                    margin-top: 1rem;
                    padding-top: 1rem;
                    border-top: 1px solid rgba(255,255,255,0.1);
                }

                .admin-main {
                    margin-left: 280px;
                    flex: 1;
                    padding: 2rem;
                    transition: margin-left 0.3s ease;
                    min-height: 100vh;
                }

                .admin-main.expanded {
                    margin-left: 80px;
                }

                @media (max-width: 1024px) {
                    .admin-mobile-header {
                        display: flex;
                    }

                    .admin-overlay {
                        display: block;
                    }

                    .admin-sidebar {
                        transform: translateX(-100%);
                        width: 280px;
                    }

                    .admin-sidebar.open {
                        transform: translateX(0);
                    }

                    .admin-sidebar.collapsed {
                        width: 280px;
                        padding: 2rem 1.5rem;
                    }

                    .admin-collapse-btn {
                        display: none;
                    }

                    .admin-close-btn {
                        display: flex;
                    }

                    .admin-main {
                        margin-left: 0;
                        padding: 1rem;
                        padding-top: 80px;
                    }

                    .admin-main.expanded {
                        margin-left: 0;
                    }

                    .admin-sidebar.collapsed .admin-nav-link {
                        justify-content: flex-start;
                        padding: 0.8rem 1.2rem;
                    }
                }

                @media (max-width: 640px) {
                    .admin-sidebar {
                        width: 100%;
                    }

                    .admin-main {
                        padding: 0.75rem;
                        padding-top: 70px;
                    }
                }
            `}</style>
        </div>
    );
}
