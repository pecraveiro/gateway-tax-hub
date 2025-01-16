import { Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";

interface CalcConfigurationProps {
  platform: string;
  setPlatform: (platform: string) => void;
  amount: number | null;
  setAmount: (amount: number | null) => void;
  includeShipping: boolean;
  setIncludeShipping: (includeShipping: boolean) => void;
  shippingCost: number | null;
  setShippingCost: (shippingCost: number | null) => void;
}

export function CalcConfiguration({
  platform,
  setPlatform,
  amount,
  setAmount,
  setIncludeShipping,
  shippingCost,
  setShippingCost,
  includeShipping,
}: CalcConfigurationProps) {
  const DEFAULT_SHIPPING = 14.9;

  const handleShippingToggle = (checked: boolean) => {
    setIncludeShipping(checked);
    setShippingCost(checked ? DEFAULT_SHIPPING : null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          Configure o cálculo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">
            Plataforma
          </label>
          <Select value={platform} onValueChange={setPlatform}>
            <SelectTrigger aria-label="Selecione a plataforma">
              <SelectValue placeholder="Selecione a plataforma" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="payt">Payt</SelectItem>
              <SelectItem value="zicpay">Zicpay</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">
            Valor do produto
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              R$
            </span>
            <Input
              type="number"
              className="pl-8"
              placeholder="0,00"
              value={amount !== null ? amount : ""}
              onChange={(e) =>
                setAmount(e.target.value ? Number(e.target.value) : null)
              }
              min="0"
              step="0.01"
            />
          </div>
        </div>

        <div className="p-4 rounded-lg border bg-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Switch
                id="shipping-toggle"
                checked={includeShipping}
                onCheckedChange={handleShippingToggle}
              />
              <div>
                <label
                  htmlFor="shipping-toggle"
                  className="text-sm font-medium text-foreground"
                >
                  Incluir frete
                </label>
                <p className="text-sm text-muted-foreground">
                  Adicionar valor do frete ao cálculo
                </p>
              </div>
            </div>
            {includeShipping && (
              <div className="relative w-32">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  R$
                </span>
                <Input
                  type="number"
                  className="pl-8"
                  value={shippingCost !== null ? shippingCost : ""}
                  onChange={(e) =>
                    setShippingCost(
                      e.target.value ? Number(e.target.value) : null
                    )
                  }
                  placeholder="0,00"
                  min="0"
                  step="0.01"
                />
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
