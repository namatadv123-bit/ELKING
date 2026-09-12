import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AnalyticsTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Backend removed, we don't track analytics locally anymore.
    // Use Google Analytics or Facebook Pixel via MetaTags/Index.html instead.
  }, [location.pathname]);

  return null;
};

export default AnalyticsTracker;
