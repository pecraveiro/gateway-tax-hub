import { HoverCardComponent } from "./hover-card-component";

export function Footer() {
  function getCurrentYear(): number {
    return new Date().getFullYear();
  }
  return (
    <footer className="text-center text-sm text-muted-foreground mt-8 pb-4">
      Gateway Tax Hub &copy; {getCurrentYear()} | Desenvolvido por{" "}
      <HoverCardComponent
        githubUsername="pecraveiro"
        name="Pedro Craveiro"
        description="🌱 Currently majoring in Computer Engineering at @UCDB and working as Front-end Dev at @ogruposix"
        avatarFallback="PC"
        role="Front-end Developer"
      />
      {""} e {""}
      <HoverCardComponent
        githubUsername="mtguerson"
        name="Matheus Guerson"
        description="Full Stack Developer - Currently working at @ogruposix"
        avatarFallback="MG"
        role="Full Stack Developer"
      />
    </footer>
  );
}
