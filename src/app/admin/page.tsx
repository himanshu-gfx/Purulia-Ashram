
import { auth } from "@/auth";

export default async function AdminDashboard() {
    const session = await auth();

    return (
        <div>
            <h1 style={{ marginBottom: '1.5rem' }}>Welcome, {session?.user?.name}</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div className="card glass" style={{ padding: '2rem', textAlign: 'center' }}>
                    <h3>Manage News</h3>
                    <p>Update latest events and announcements.</p>
                </div>
                <div className="card glass" style={{ padding: '2rem', textAlign: 'center' }}>
                    <h3>Manage Gallery</h3>
                    <p>Add or remove photos from the media archive.</p>
                </div>
                <div className="card glass" style={{ padding: '2rem', textAlign: 'center' }}>
                    <h3>Manage Impact</h3>
                    <p>Update information about schools and charity.</p>
                </div>
            </div>
        </div>
    );
}
