import PaymentCalculator from "./components/payment-calculator";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <PaymentCalculator />
    </ThemeProvider>
  );
}
