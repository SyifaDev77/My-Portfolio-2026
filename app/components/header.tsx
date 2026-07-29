import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-center px-4 pt-4" >
      <div className="flex h-20 w-full max-w-5xl items-center justify-between rounded-full border border-[var(--accent)]/20 bg-[linear-gradient(135deg,rgba(30,41,59,0.96),rgba(15,23,42,0.92))] px-6 text-[var(--foreground)] shadow-[0_18px_50px_rgba(15,23,42,0.32)] backdrop-blur transition hover:border-[var(--accent)]/40 hover:shadow-[0_22px_60px_rgba(15,23,42,0.38)] sm:px-8">
        <Link href="/" className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
          SYIFA&apos;
        </Link>

        <nav className="flex items-center gap-3 text-sm font-semibold sm:gap-4 sm:text-base">
          <Link
            href="/"
            className="rounded-full border border-[var(--accent)]/35 px-4 py-2 text-[var(--muted-foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--background)]"
          >
           Home
          </Link>
<a
  href="/documents/asy syifa-resume.pdf"
  download="Asy Syifa_Resume.pdf"
  className="rounded-full border border-[var(--accent)]/35 px-4 py-2 text-[var(--muted-foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--background)]"
>
  Download My Resume
</a>
        </nav>
      </div>
    </header>
  );
}