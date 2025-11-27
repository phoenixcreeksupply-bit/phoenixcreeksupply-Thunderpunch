import BlogTemplate from "../../../components/blog/BlogTemplate";

export const metadata = {
  title: "A Man and His Tools",
  description: "A reflection on tools, seasons, and the PCS mindset.",
};

export default function Page() {
  return (
    <BlogTemplate 
      title="A Man and His Tools"
      headerImage="/public/images/survival-kit-1.jpg"
    >
{`
Every season exposes something — your gear, your routine, or your grit.

Black Friday doesn't change that. It just makes it cheaper to fix the weak links.

A solid pair of boots.  
A reliable layer.  
A tool that performs when it's 4 AM and quiet enough to hear your breath.

Buy what strengthens you. Leave the rest for the crowd.

Intent over impulse — every time.
`}
    </BlogTemplate>
  );
}
