"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "All", href: "/educkstore/productcategoria/all" },
  { label: "Mugs", href: "/educkstore/productcategoria/mug" },
  { label: "Keychains", href: "/educkstore/productcategoria/keychain" },
  { label: "Pets outfit", href: "/educkstore/productcategoria/petsoutfit" },
  { label: "Apparel", href: "/educkstore/productcategoria/apparel" },
  { label: "Stationary", href: "/educkstore/productcategoria/stationary" }
];

const CategoriesMenu = () => {
  const pathname = usePathname();

  return (
    <p className="flex gap-5">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`${
            pathname === link.href ? "font-bold border-b text-[#f82a35]" : ""
          } py-2 hover:text-[#f82a35] text-lg mt-2 mb-6`}
        >
          {link.label}
        </Link>
      ))}
    </p>
  );
};

export default CategoriesMenu;
