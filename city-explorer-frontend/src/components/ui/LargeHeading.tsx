import { FC, forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "text-sky-600 dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter animate-fade-in duration-700      ",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: "text-4xl md:text-5xl lg:text-6xl",
        md: "text-3xl md:text-4xl lg:text-5xl",
        sm: "text-2md md:3text-l lg:text-4xl",
      },
      defaultVariants: {
        size: "default",
      },
    },
  }
);

interface LargeHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(headingVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);

LargeHeading.displayName = "Paragraph";

export default LargeHeading;
