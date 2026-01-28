import { withAuth } from "next-auth/middleware";

const authMiddleware = withAuth({
    pages: {
        signIn: "/login",
    },
});

export default authMiddleware;

export const config = {
    matcher: ["/admin/:path*"],
};
