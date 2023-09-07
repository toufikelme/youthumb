// components/AdSense.js
import React from 'react';

const AdSense = () => (
  <>
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6949411170952048"
      crossOrigin="anonymous"
    ></script>
    <ins
      className="adsbygoogle"
      style={{ display: 'inline-block', width: '160px', height: '600px' }}
      data-ad-client="ca-pub-6949411170952048"
      data-ad-slot="9214060987"
    ></ins>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  </>
);

export default AdSense;
