
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './src/lib/db/schema';
import * as dotenv from 'dotenv';
import { randomUUID } from 'crypto';
import bcrypt from 'bcryptjs';

dotenv.config();

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

async function seed() {
    console.log('Seeding database...');

    // Seed News
    await db.insert(schema.news).values([
        {
            id: randomUUID(),
            title: 'Daily Bhagwat Discourse',
            date: 'Everyday | 4:00 PM',
            location: 'Paramhansa Yogananda Trust Ashram, Purulia',
            description: 'Join Swami Keshwananda Giri Ji for a profound discourse on the Srimad Bhagwat in Bengali.',
            imageUrl: '/images/daily-satsang.jpg',
        }
    ]);

    // Seed Gallery
    await db.insert(schema.gallery).values([
        { id: randomUUID(), title: "Lord Krishna", category: "Divine", src: "/images/lord-krishna.png", className: "img-enhance" },
        { id: randomUUID(), title: "Mahavatar Babaji", category: "Spiritual", src: "/images/mahavatar-babaji-shrine.jpg", className: "img-enhance" },
        { id: randomUUID(), title: "Lahiri Mahashay Shrine", category: "Historic", src: "/images/lahiri-mahashay.jpg", className: "img-enhance" },
        { id: randomUUID(), title: "Sw. Yukteshwar Giri", category: "Historic", src: "/images/sri-yukteshwar-shrine.jpg", className: "img-enhance" },
        { id: randomUUID(), title: "Paramhansa Yogananda", category: "Historic", src: "/images/paramhansa-yogananda-shrine.jpg", className: "img-enhance" },
    ]);

    // Seed Impact
    await db.insert(schema.impactSections).values([
        {
            id: randomUUID(),
            title: 'Lakahanpur Schools',
            type: 'school',
            content: 'The Lakhanpur Vidyalaya is the cornerstone of our educational mission. Founded by the Great Gurus to bring Enlightenment to the backward regions, it continues to serve thousands of students with a blend of modern curriculum and spiritual values.',
            videoUrl: 'https://www.youtube.com/embed/Oqxw8xDm-g8',
        }
    ]);

    // Seed Admin User
    const hashedPassword = await bcrypt.hash('password123', 10);
    await db.insert(schema.adminUsers).values([
        {
            id: randomUUID(),
            username: 'admin',
            password: hashedPassword,
        }
    ]);

    console.log('Seeding complete!');
}

seed().catch(console.error);
