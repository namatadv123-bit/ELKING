import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const AnalyticsTracker = () => {
  const location = useLocation();
  const lastPathRef = useRef(location.pathname);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (lastPathRef.current === location.pathname) return;
    lastPathRef.current = location.pathname;

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      try {
        let visitorId = localStorage.getItem("ganna_visitor_id");
        if (!visitorId) {
          visitorId = crypto.randomUUID?.() || Math.random().toString(36).substring(2, 15);
          localStorage.setItem("ganna_visitor_id", visitorId);
        }

        try {
          await supabase.from("page_views").insert({
            path: location.pathname,
            referrer: document.referrer || "direct",
            user_agent: navigator.userAgent,
            ip_hash: visitorId,
          });
        } catch (err) {
          // Ignore analytics errors silently to prevent console spam
          console.debug("Analytics tracker blocked by RLS (expected for anon users if RLS is strict)");
        }
      } catch {
        // Fail silently
      }
    }, 2000);

    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [location.pathname]);

  return null;
};

export default AnalyticsTracker;
