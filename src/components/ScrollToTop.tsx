import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    // Only scroll to top when navigating TO a project page (not away from it)
    const isGoingToProject = location.pathname.startsWith("/projects/");
    const wasOnProject = prevPathRef.current.startsWith("/projects/");
    
    if (isGoingToProject && !wasOnProject) {
      window.scrollTo(0, 0);
    }
    
    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
