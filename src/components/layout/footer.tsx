import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-black py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Image
          src="/images/wine-spectator-logo-white.png"
          alt="Wine Spectator"
          width={160}
          height={32}
          className="mx-auto mb-8 h-8 w-auto opacity-80"
        />

        <p className="text-white/50 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
          These offers are provided by Wine Spectator advertising partners.
        </p>

        <div className="w-16 h-px bg-white/20 mx-auto mb-8" />

        <p className="text-white/40 text-sm mb-6">
          © 2025 Wine Spectator. All rights reserved.
        </p>

            <div className="flex items-center justify-center gap-6 text-sm">
              <Link href="https://www.winespectator.com/pages/privacy-policy" className="text-white/40 hover:text-white/70 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/20">|</span>
              <Link href="https://www.winespectator.com/pages/terms-of-service" className="text-white/40 hover:text-white/70 transition-colors">
                Terms of Service
              </Link>
              <span className="text-white/20">|</span>
              <Link href="https://help.winespectator.com/support/home" className="text-white/40 hover:text-white/70 transition-colors">
                Contact Us
              </Link>
            </div>
      </div>
    </footer>
  );
}
