import React from "react";
import { Ticket } from "lucide-react";

function ButTicketNow({label}) {
  return (
    <button className="flex items-center justify-center gap-3 bg-yellow-400 text-black font-bold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-yellow-500 transition-colors shadow-lg w-full sm:w-auto">
      <Ticket className="h-5 w-5 fill-black" />
      {label}
    </button>
  );
}
export default ButTicketNow;
