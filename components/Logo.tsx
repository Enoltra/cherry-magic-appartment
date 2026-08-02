import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logo/cherry-magic-logo.svg"
      alt="Cherry Magic Apartment logo"
      width={240}
      height={80}
      className={className}
      priority
    />
  );
}
