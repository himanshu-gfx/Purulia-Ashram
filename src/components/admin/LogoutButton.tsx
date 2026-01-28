
'use client';

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
    return (
        <button
            onClick={() => signOut({ callbackUrl: '/login' })}
            style={{
                width: '100%',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: 'none',
                color: 'white',
                borderRadius: '10px',
                cursor: 'pointer',
                marginTop: '1rem'
            }}
        >
            <LogOut size={18} /> Sign Out
        </button>
    );
}
