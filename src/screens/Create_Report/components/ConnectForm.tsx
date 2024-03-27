import { useFormContext } from "react-hook-form";

export interface FormMethods {
  // Add specific method types here if known
  // (e.g., handleSubmit: (onSubmit: SubmitHandler<FormData>) => void)
}

export const ConnectForm: React.FC<{ children: (methods: FormMethods) => JSX.Element }> = ({
  children,
}) => {
  const methods = useFormContext(); // Use the generic type

  if (!methods) {
    // Handle missing context (optional)
    throw new Error('ConnectForm must be used within a FormProvider');
  }

  return children(methods);
};
