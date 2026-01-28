
import { Settings } from "lucide-react";
import { changePassword } from "@/lib/db/auth-actions";

export default function SettingsPage() {
    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>CMS Settings</h1>

            <div className="card glass" style={{ maxWidth: '500px', padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <Settings size={24} style={{ color: 'var(--accent)' }} />
                    <h3 style={{ margin: 0 }}>Change Password</h3>
                </div>

                <form action={changePassword} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div>
                        <label style={labelStyle}>New Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Min 6 characters"
                            required
                            style={inputStyle}
                        />
                    </div>
                    <button type="submit" className="btn btn-accent" style={{ padding: '0.8rem' }}>
                        Update Password
                    </button>
                </form>
            </div>
        </div>
    );
}

const labelStyle = {
    display: 'block',
    fontSize: '0.85rem',
    fontWeight: 600,
    marginBottom: '0.4rem',
    opacity: 0.8
};

const inputStyle = {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '10px',
    border: '1px solid rgba(0,0,0,0.1)',
    backgroundColor: 'white',
};
