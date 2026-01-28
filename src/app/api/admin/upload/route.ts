
import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { auth } from "@/auth";

export async function POST(request: NextRequest) {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Create unique filename
        const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
        const relativePath = `/uploads/${filename}`;
        const absolutePath = join(process.cwd(), "public", "uploads", filename);

        // Ensure directory exists (redundant but safe)
        await mkdir(join(process.cwd(), "public", "uploads"), { recursive: true });

        await writeFile(absolutePath, buffer);

        return NextResponse.json({ url: relativePath });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
