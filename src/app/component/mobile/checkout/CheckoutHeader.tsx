import { ArrowLeft } from "lucide-react";

interface CheckoutHeaderProps {
  step: number;
  totalSteps: number;
}

export const CheckoutHeader = ({ step, totalSteps }: CheckoutHeaderProps) => {
  return (
    <div className="bg-card border-b border-border">
      <div className="flex items-center justify-between p-4">
        <button className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-semibold">Checkout</h1>
        <div className="w-9" /> {/* Spacer for centering */}
      </div>

      {/* Progress bar */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span>
            Step {step} of {totalSteps}
          </span>
          <span>{Math.round((step / totalSteps) * 100)}%</span>
        </div>
        <div className="h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-primary transition-all duration-500 ease-out"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
