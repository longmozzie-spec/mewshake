"use client";

import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Self-contained 8-bit pixel button (adapted from 8bitcn/ui).
 * Renders a pixelated border made of absolutely-positioned blocks.
 */
export const buttonVariants = cva(
  "rounded-none active:translate-y-1 transition-transform relative inline-flex items-center justify-center gap-1.5 border-none cursor-pointer select-none focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:brightness-110",
        secondary:
          "bg-secondary text-secondary-foreground hover:brightness-125",
        accent:
          "bg-accent text-accent-foreground hover:brightness-110",
        outline:
          "bg-background text-foreground hover:bg-secondary/40",
      },
      size: {
        default: "h-12 px-6 text-[10px]",
        sm: "h-9 px-4 text-[8px]",
        lg: "h-16 px-10 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ref?: React.Ref<HTMLButtonElement>;
}

function Button({ children, className, variant, size, ...props }: BitButtonProps) {
  const borderColor =
    variant === "accent"
      ? "bg-accent"
      : variant === "outline"
      ? "bg-foreground"
      : variant === "secondary"
      ? "bg-secondary-foreground"
      : "bg-primary";

  return (
    <button
      {...props}
      className={cn("retro", buttonVariants({ variant, size }), className)}
    >
      {children}

      {/* Pixelated border */}
      <div className={cn("absolute -top-1.5 w-1/2 left-1.5 h-1.5", borderColor)} />
      <div className={cn("absolute -top-1.5 w-1/2 right-1.5 h-1.5", borderColor)} />
      <div className={cn("absolute -bottom-1.5 w-1/2 left-1.5 h-1.5", borderColor)} />
      <div className={cn("absolute -bottom-1.5 w-1/2 right-1.5 h-1.5", borderColor)} />
      <div className={cn("absolute top-0 left-0 size-1.5", borderColor)} />
      <div className={cn("absolute top-0 right-0 size-1.5", borderColor)} />
      <div className={cn("absolute bottom-0 left-0 size-1.5", borderColor)} />
      <div className={cn("absolute bottom-0 right-0 size-1.5", borderColor)} />
      <div className={cn("absolute top-1.5 -left-1.5 h-[calc(100%-12px)] w-1.5", borderColor)} />
      <div className={cn("absolute top-1.5 -right-1.5 h-[calc(100%-12px)] w-1.5", borderColor)} />
    </button>
  );
}

export { Button };
export default Button;
