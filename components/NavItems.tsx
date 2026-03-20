"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My journey", href: "/my-journey" },
  { label: "Subscriptions", href: "/subscription" },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(
            "text-sm transition-colors",
            pathname === href
              ? "text-primary font-semibold"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;