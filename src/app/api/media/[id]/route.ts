
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { media } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const [image] = await db
            .select()
            .from(media)
            .where(eq(media.id, id));

        if (!image) {
            return NextResponse.json({ error: "Image not found" }, { status: 404 });
        }

        // Convert base64 back to binary
        const buffer = Buffer.from(image.data, "base64");

        // Return image with proper headers
        return new NextResponse(buffer, {
            headers: {
                "Content-Type": image.mimeType,
                "Content-Length": buffer.length.toString(),
                "Cache-Control": "public, max-age=31536000, immutable",
            },
        });
    } catch (error) {
        console.error("Error serving image:", error);
        return NextResponse.json({ error: "Failed to load image" }, { status: 500 });
    }
}
