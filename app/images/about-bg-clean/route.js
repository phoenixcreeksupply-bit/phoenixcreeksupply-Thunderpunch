import fs from 'fs';
import path from 'path';

// Serve the existing uploaded coin image under a clearer path
export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'images', 'COin2.jpg');
  try {
    const data = await fs.promises.readFile(filePath);
    return new Response(data, {
      status: 200,
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (err) {
    return new Response('Not found', { status: 404 });
  }
}
