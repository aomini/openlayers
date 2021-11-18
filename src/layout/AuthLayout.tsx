import Navbar from "src/components/Navbar";

interface LayoutProps {
  children: any;
}

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <section className="p-2">{children}</section>
    </div>
  );
};

export default AuthLayout;