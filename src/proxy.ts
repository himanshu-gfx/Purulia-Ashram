import { withAuth } from "next-auth/middleware";

const authMiddleware = withAuth({
    pages: {
        signIn: "/login",
    },
});

export { authMiddleware as proxy };

export const config = {
    matcher: ["/admin/:path*"],
};
