"use client";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Loader from "@/components/Loading"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait until the entire page (fonts, images, etc.) has loaded
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {loading ? (
        <Loader onLoaded={() => setLoading(false)}
        />
      ) : (
        <>
          <Analytics />
          <SpeedInsights />
          {children}
        </>
      )}
    </>
  );
}
