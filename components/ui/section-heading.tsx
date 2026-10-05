type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  level?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  level = "h2",
}: SectionHeadingProps) {
  const Heading = level;

  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9b5d32]">
        {eyebrow}
      </p>
      <Heading className="mt-3 font-serif text-4xl leading-tight text-[#3b2417] sm:text-5xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-5 text-base leading-7 text-stone-600">{description}</p>
      )}
    </div>
  );
}
