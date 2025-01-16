import { useState } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { AmountResume } from "./components/amount-resume";
import { CalcConfiguration } from "./components/calc-configuration";
import { InstallmentTable } from "./components/installment-table";
import { Footer } from "./components/footer";

const PaymentCalculator = () => {
  const [platform, setPlatform] = useState("payt");
  const [amount, setAmount] = useState<number | null>(null);
  const [includeShipping, setIncludeShipping] = useState(false);
  const [shippingCost, setShippingCost] = useState<number | null>(null);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Gateway Tax Hub
            </h1>
            <p className="text-muted-foreground">
              Calculadora de taxas e parcelamentos para gateways de pagamento
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <CalcConfiguration
                platform={platform}
                setPlatform={setPlatform}
                amount={amount}
                setAmount={setAmount}
                includeShipping={includeShipping}
                setIncludeShipping={setIncludeShipping}
                shippingCost={shippingCost}
                setShippingCost={setShippingCost}
              />

              {amount !== null && (
                <AmountResume
                  amount={amount ?? 0}
                  includeShipping={includeShipping}
                  shippingCost={shippingCost ?? 0}
                />
              )}
            </div>

            {amount !== null && (
              <InstallmentTable
                platform={platform}
                amount={amount}
                includeShipping={includeShipping}
                shippingCost={shippingCost ?? 0}
              />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default PaymentCalculator;
