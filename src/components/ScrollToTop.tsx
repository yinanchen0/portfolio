import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const isGoingToProject = location.pathname.startsWith("/projects/");
    const wasOnProject = prevPathRef.current.startsWith("/projects/");
    
    // Only scroll to top when navigating TO a project page
    // Never scroll when leaving a project page (user wants to go back to projects section)
    if (isGoingToProject && !wasOnProject) {
      window.scrollTo(0, 0);
    }
    
    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
