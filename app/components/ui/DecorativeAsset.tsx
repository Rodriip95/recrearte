import Image from "next/image";

export default function DecorativeAsset({
  src,
  className = "",
  delay = 0,
}: {
  src: string;
  className?: string;
  delay?: number;
}) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={240}
      height={240}
      className={`decorative-asset ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    />
  );
}
