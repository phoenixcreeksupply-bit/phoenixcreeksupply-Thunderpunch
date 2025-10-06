export const metadata = { title: "Tools & Gear | Phoenix Creek Supply" };

export default function Gear() {
  return (
    <div className="relative h-screen w-full">
      <img
        src="/images/comingsoon-gear.jpg"
        alt="Tools & Gear Coming Soon"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Tools & Gear – Coming Soon</h1>
      </div>
    </div>
  );
}
