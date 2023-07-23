"use client";

import { ShoppingBag, HelpCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import useAbout from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();
  useAbout();

  if (!isMounted) {
    return null;
  }

  return ( 
    <div className="ml-auto flex items-center gap-x-0">
      <Button onClick={() => router.push('/cart')} className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
      <Button onClick={() => router.push('/about')} className="flex items-center rounded-full bg-green px-4 py-2">
        <HelpCircle
          size={20}
          color="white"
        />
      </Button>
    </div>
  );
}
 
export default NavbarActions;