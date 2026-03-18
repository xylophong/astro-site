interface DatetimesProps {
  pubDatetime: string | Date;
  modDatetime: string | Date | undefined;
}

interface Props extends DatetimesProps {
  size?: "sm" | "lg";
  className?: string;
}

export default function Datetime({
  pubDatetime,
  modDatetime,
  size = "sm",
  className,
}: Props) {
  const dateToUse = modDatetime ? new Date(modDatetime) : new Date(pubDatetime);

  const year = dateToUse.getFullYear();
  const month = String(dateToUse.getMonth() + 1).padStart(2, "0");
  const day = String(dateToUse.getDate()).padStart(2, "0");
  const formatted = `${year}.${month}.${day}`;

  return (
    <time
      dateTime={dateToUse.toISOString()}
      className={`font-mono tracking-tight ${
        size === "sm" ? "text-xs" : "text-sm"
      } ${className ?? ""}`}
      style={{ color: "rgba(var(--color-text-base), 0.45)" }}
    >
      {modDatetime ? `Updated ${formatted}` : formatted}
    </time>
  );
}
