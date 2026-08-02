import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`logo-mark inline-flex items-center gap-2 bg-transparent ${className}`}>
      <Image
        src="/images/logo/cherry-magic-logo.png"
        alt=""
        width={40}
        height={40}
        className="h-full w-auto object-contain bg-transparent"
        style={{ background: "transparent" }}
        priority
      />
      <span className="font-script text-cherry text-2xl md:text-3xl leading-none whitespace-nowrap">
        Cherry Magic
      </span>
    </span>
  );
}
