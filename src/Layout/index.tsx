// Partials
// import Nav from "@partials/Navbar";
// import Footer from "../Footer";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* <Nav /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
