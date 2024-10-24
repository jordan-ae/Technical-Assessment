import { ComponentProps, PropsWithChildren } from "react";

export interface ButtonProps extends ComponentProps<'button'>, PropsWithChildren { }

export function Button({ className, children, ...props }: ButtonProps) {
    return (
        <button {...props} className={`bg-button-primary hover:bg-button-primary-hover h-16 w-full rounded-xl mt-5 text-white lg:justify-center ${className}`}>{children}</button>
    )
}