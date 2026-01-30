
'use client';

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

interface LogoutButtonProps {
    collapsed?: boolean;
}

export default function LogoutButton({ collapsed }: LogoutButtonProps) {
    return (
        <button
            onClick={() => signOut({ callbackUrl: '/login' })}
            title={collapsed ? "Sign Out" : undefined}
            style={{
                width: '100%',
                padding: collapsed ? '0.8rem' : '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: 'none',
                color: 'white',
                borderRadius: '10px',
                cursor: 'pointer',
                marginTop: '1rem',
                transition: 'all 0.2s ease'
            }}
        >
            <LogOut size={18} />
            {!collapsed && <span>Sign Out</span>}
        </button>
    );
}

