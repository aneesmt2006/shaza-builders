
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-shaza-black px-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-serif mb-6 font-bold">
          <span className="text-white">4</span>
          <span className="text-shaza-gold">0</span>
          <span className="text-white">4</span>
        </h1>
        <h2 className="text-2xl font-serif mb-6 text-white">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to our homepage.
        </p>
        <Button asChild className="bg-shaza-gold hover:bg-shaza-lightgold text-shaza-black">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
