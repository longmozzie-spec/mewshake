import { cn } from "@/lib/utils";

/**
 * 8-bit pixel card with a blocky double border + phosphor glow.
 */
export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative bg-card text-card-foreground p-1",
        // pixel border via layered box-shadow
        "shadow-[0_0_0_4px_var(--background),0_0_0_8px_var(--primary),0_0_24px_rgba(177,74,237,0.28)]",
        className
      )}
      {...props}
    >
      <div className="border border-border/60 p-4 md:p-6">{children}</div>
    </div>
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4 space-y-1.5", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("retro text-sm font-bold leading-relaxed", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-4 flex items-center", className)} {...props} />;
}
