import { CreditCard } from "lucide-react";
import { Card, CardContent, CardTitle, CardHeader } from "./ui/card";

interface InstallmentTableProps {
  platform: string;
  amount: number;
  includeShipping: boolean;
  shippingCost: number;
}

export function InstallmentTable({
  platform,
  amount,
  includeShipping,
  shippingCost,
}: InstallmentTableProps) {
  const paytFees = {
    "1": 0, // Taxa de 0% para pagamento à vista
    "2": 4.51,
    "3": 6.036,
    "4": 7.58,
    "5": 9.15,
    "6": 10.72,
    "7": 12.31,
    "8": 13.92,
    "9": 15.548,
    "10": 17.19,
    "11": 18.786,
    "12": 20.48,
  };

  const zicPayFees = {
    "1": 0, // Taxa de 0% para pagamento à vista
    "2": 4.505,
    "3": 6.040,
    "4": 7.582,
    "5": 9.141,
    "6": 10.728,
    "7": 12.304,
    "8": 13.915,
    "9": 15.550,
    "10": 17.178,
    "11": 18.803,
    "12": 20.497,
  };

  const calculateInstallment = (
    totalAmount: number,
    installments: number,
    fee: number
  ) => {
    const feeDecimal = fee / 100;
    const baseAmount = totalAmount;
    const shippingAmount =
      includeShipping && shippingCost !== null ? shippingCost : 0;
    const totalWithShipping = baseAmount + shippingAmount;
    const totalWithFee = totalWithShipping * (1 + feeDecimal);

    // Divisão das parcelas
    const installmentAmount =
      Math.round((totalWithFee / installments) * 100) / 100;

    return {
      installmentValue: installmentAmount,
      totalAmount: totalWithFee,
      fee,
      baseAmount,
      shippingAmount,
    };
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          Tabela de Parcelamento
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 text-foreground">Parcelas</th>
                <th className="text-left p-2 text-foreground">Taxa</th>
                <th className="text-left p-2 text-foreground">
                  Valor da Parcela
                </th>
                <th className="text-left p-2 text-foreground">Total</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(platform === "payt" ? paytFees : zicPayFees).map(
                ([installment, fee]) => {
                  const calculation = calculateInstallment(
                    amount,
                    Number(installment),
                    fee
                  );

                  return (
                    <tr
                      key={installment}
                      className="border-b hover:bg-muted/50"
                    >
                      <td className="p-2 text-foreground">{installment}x</td>
                      <td className="p-2 text-blue-700">{fee}%</td>
                      <td className="p-2 text-foreground">
                        {calculation.installmentValue.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </td>
                      <td className="p-2 font-medium text-foreground">
                        {calculation.totalAmount.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
