
import { auth } from "@/auth";
import Link from "next/link";
import { Home, Image as ImageIcon, Newspaper, Heart, LayoutDashboard, Settings } from "lucide-react";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session) return null;

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
            {/* Sidebar */}
            <aside style={{
                width: '280px',
                backgroundColor: 'var(--primary-dark)',
                color: 'white',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                height: '100vh'
            }}>
                <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--accent)', margin: 0 }}>Purulia CMS</h2>
                    <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Ashram Management</p>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                    <Link href="/admin" className="admin-nav-link">
                        <LayoutDashboard size={20} /> Dashboard
                    </Link>
                    <Link href="/admin/news" className="admin-nav-link">
                        <Newspaper size={20} /> News & Events
                    </Link>
                    <Link href="/admin/gallery" className="admin-nav-link">
                        <ImageIcon size={20} /> Media Gallery
                    </Link>
                    <Link href="/admin/impact" className="admin-nav-link">
                        <Heart size={20} /> Our Impact
                    </Link>
                    <Link href="/admin/settings" className="admin-nav-link">
                        <Settings size={20} /> Settings
                    </Link>
                    <Link href="/" className="admin-nav-link" style={{ marginTop: 'auto' }}>
                        <Home size={20} /> Back to Site
                    </Link>
                </nav>

                <LogoutButton />
            </aside>

            {/* Main Content */}
            <main style={{ marginLeft: '280px', flex: 1, padding: '2rem' }}>
                {children}
            </main>

            <style dangerouslySetInnerHTML={{
                __html: `
        .admin-nav-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.8rem 1.2rem;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .admin-nav-link:hover {
          background-color: rgba(255,255,255,0.1);
          color: white;
        }
      `}} />
        </div>
    );
}
