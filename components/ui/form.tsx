"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Controller, FormProvider, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";

// FORM
export const Form = FormProvider;

// CONTEXT
const FormFieldContext = React.createContext<any>({});

export const FormField = ({ ...props }: any) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

// ITEM
export const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("space-y-2", className)} {...props} />
  );
});
FormItem.displayName = "FormItem";

// LABEL
export const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

// CONTROL
export const FormControl = React.forwardRef<
  any,
  React.HTMLAttributes<HTMLElement>
>(({ ...props }, ref) => {
  return <div ref={ref} {...props} />;
});
FormControl.displayName = "FormControl";

// MESSAGE
export const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { formState } = useFormContext();
  const fieldContext = React.useContext(FormFieldContext);
  const error = formState.errors[fieldContext.name];

  if (!error) return null;

  return (
    <p
      ref={ref}
      className={cn("text-sm text-red-500", className)}
      {...props}
    >
      {error.message as string}
    </p>
  );
});
FormMessage.displayName = "FormMessage";