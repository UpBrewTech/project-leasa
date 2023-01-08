import { Button } from "ui";
import { formatCurrency } from "utils";

export const B2BComponent = () => (
  <div>
    <h1 className="bg-red">B2B - Business App</h1>
    {formatCurrency(1000)}
    <Button />
  </div>
);
