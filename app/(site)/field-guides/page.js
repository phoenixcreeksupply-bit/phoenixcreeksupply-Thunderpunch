export const metadata = { title: "Field Guides | Phoenix Creek Supply" };

export default function FieldGuides() {
  return (
    <div className="relative h-screen w-full">
      <img
        src="/images/comingsoon-fieldguides.jpg"
        alt="Field Guides Coming Soon"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Field Guides – Coming Soon</h1>
      </div>
    </div>
  );
}
