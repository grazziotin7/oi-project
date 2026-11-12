import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PEMURA — Thinking Machines" },
      { name: "description", content: "Óculos inteligentes Pemura com interação por voz e inteligência artificial." },
      { name: "theme-color", content: "#efece6" },
    ],
  }),
  component: PemuraLanding,
});

function PemuraLanding() {
  return (
    <iframe
      title="PEMURA — Experiência 3D"
      src="/pemura-robot.html"
      style={{ display: "block", width: "100%", height: "100vh", border: 0 }}
    />
  );
}
