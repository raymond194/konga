import { useEffect } from "react";


declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdComponent({ slot }: { slot: string }) {
  useEffect(() => {
    try {
      // reinitialize ads when component mounts
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-3092213822765999"  // your AdSense publisher ID
      data-ad-slot={slot}                  // your ad slot ID
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
