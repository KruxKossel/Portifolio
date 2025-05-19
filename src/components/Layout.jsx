import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, useFlexibleGrid }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full overflow-x-hidden">
        <div className={useFlexibleGrid ? "w-full px-4" : "w-[98%] mx-auto"}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
} 