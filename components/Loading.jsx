"use client"

import { useState, useEffect } from "react";

function Loading() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  });

  if (mounted) {
    return null;
  }

  return ( 
    <div id="preloader">
        <div className="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>  
  );
}

export default Loading;