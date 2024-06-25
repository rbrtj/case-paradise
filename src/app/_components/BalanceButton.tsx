import { Button } from "@/components/ui/button";
import { CirclePlus, Wallet } from "lucide-react";

const BalanceButton = () => {
  return (
    <Button
      variant="ghost"
      className="bg-[#00ff84]/10 p-2 rounded-md flex items-center hover:bg-[#00ff84]/20"
    >
      <div className="flex items-center space-x-2 text-[#00ff84]">
        <Wallet size="20" />
        <span className="text-md">1.34zł</span>
        <CirclePlus size="20" />
      </div>
    </Button>
  );
};

export default BalanceButton;
