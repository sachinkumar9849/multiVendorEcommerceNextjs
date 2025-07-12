import { Check } from "lucide-react";

interface CheckoutProgressProps {
  currentStep: number;
}

const steps = [
  { id: 1, name: "Cart", description: "Review items" },
  { id: 2, name: "Information", description: "Shipping & billing" },
  { id: 3, name: "Payment", description: "Complete order" },
];

export function CheckoutProgress({ currentStep }: CheckoutProgressProps) {
  return (
    <div className="w-full py-6">
      <nav aria-label="Progress">
        <ol className="flex items-center">
          {steps.map((step, stepIdx) => (
            <li
              key={step.id}
              className={`relative ${
                stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20" : ""
              } flex-1`}
            >
              {stepIdx !== steps.length - 1 && (
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div
                    className={`h-0.5 w-full transition-colors duration-300 ${
                      step.id < currentStep ? "bg-primary" : "bg-border"
                    }`}
                  />
                </div>
              )}
              <div className="relative flex items-start">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center">
                  {step.id < currentStep ? (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary transition-all duration-300">
                      <Check className="h-5 w-5 text-primary-foreground" />
                    </div>
                  ) : step.id === currentStep ? (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-card transition-all duration-300">
                      <span className="text-sm font-medium text-primary">
                        {step.id}
                      </span>
                    </div>
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-muted bg-card transition-all duration-300">
                      <span className="text-sm font-medium text-muted-foreground">
                        {step.id}
                      </span>
                    </div>
                  )}
                </div>
                <div className="ml-4 min-w-0 flex-1">
                  <p
                    className={`text-sm font-medium transition-colors duration-300 ${
                      step.id <= currentStep
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {step.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
