import { createFileRoute } from "@tanstack/react-router";

// A rota /loja reutiliza exatamente a mesma experiência da página inicial.
// O hash abre diretamente a seção Loja dentro do mesmo HTML e preserva o robô 3D.
export const Route = createFileRoute("/loja")({
  head: () => ({ meta: [
    { title: "PEMURA Store — Pemura One" },
    { name: "description", content: "Conheça o Pemura One na experiência oficial da Pemura." },
    { name: "theme-color", content: "#05060a" },
  ]}),
  component: PemuraStoreRoute,
});

function PemuraStoreRoute() {
  return <iframe title="PEMURA — Loja integrada" src="/pemura-robot.html#loja" style={{ display: "block", width: "100%", height: "100vh", border: 0, background: "#05060a" }} />;
}
