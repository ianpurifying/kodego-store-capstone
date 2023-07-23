import Link from "next/link";
import Image from "next/image";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <div className="border-b" style={{ backgroundColor: "#9ec2c2" }}>
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <Image src="/logo1.png" alt="EdgeXtreme" width={240} height={1} />
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;
