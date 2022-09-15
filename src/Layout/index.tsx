// Partials
// import Nav from "@partials/Navbar";
// import Footer from "../Footer";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      one
      {/* <Nav /> */}
      {children}
      {/* <Footer /> */}
      two
    </div>
  );
};

export default Layout;
