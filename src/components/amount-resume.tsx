import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface AmountResumeProps {
  amount: number;
  includeShipping: boolean;
  shippingCost: number;
}

export function AmountResume({
  amount,
  includeShipping,
  shippingCost,
}: AmountResumeProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Resumo dos valores
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Valor do produto:</span>
            <span className="font-medium text-foreground">
              {Number(amount).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          {includeShipping && shippingCost !== null && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Valor do frete:</span>
              <span className="font-medium text-foreground">
                {Number(shippingCost).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          )}
          <div className="pt-2 border-t flex justify-between">
            <span className="font-medium text-foreground">Subtotal:</span>
            <span className="font-medium text-blue-700">
              {(
                Number(amount) +
                (includeShipping && shippingCost !== null
                  ? Number(shippingCost)
                  : 0)
              ).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
