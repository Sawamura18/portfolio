import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Search not found</p>
        <p className="text-muted-foreground mb-6">The page you're looking for doesn't exist in our search results.</p>
        <a 
          href="/" 
          className="inline-block bg-search-button hover:bg-search-button-hover text-search-button-foreground px-6 py-2 rounded transition-colors"
        >
          Back to Search
        </a>
      </div>
    </div>
  );
};

export default NotFound;
