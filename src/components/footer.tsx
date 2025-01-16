export function Footer() {
  function getCurrentYear(): number {
    return new Date().getFullYear();
  }

  return (
    <footer className="text-center text-sm text-muted-foreground mt-8">
      Gateway Tax Hub &copy; {getCurrentYear()} | Desenvolvido por{" "}
      <a
        href="https://github.com/pecraveiro/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary font-semibold hover:underline cursor-pointer"
      >
        @pecraveiro
      </a>
    </footer>
  );
}
