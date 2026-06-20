import { weddingConfig } from "@/app/config/wedding";

export default function Footer() {
  return (
    <footer className="relative bg-transparent bg-damask px-5 pb-8 pt-6 text-center">
      <div className="section-divider mx-auto mb-6 max-w-xs" />
      <p className="mx-auto max-w-sm font-body text-sm leading-relaxed text-gold-200/80">
        Sự hiện diện của quý khách là niềm vinh hạnh của gia đình chúng tôi!
      </p>
      <p className="mt-6 font-body text-xs text-gold-200/50">
        ♡ {weddingConfig.siteName}
      </p>
    </footer>
  );
}
