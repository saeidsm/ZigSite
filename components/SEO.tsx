import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  schema?: object; // JSON-LD structured data for AI crawlers
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = [], 
  image = '/pic/900.jpg', // Default OG Image
  schema 
}) => {
  const location = useLocation();
  const canonicalUrl = `https://zigguratsolutions.com${location.pathname}`;
  const siteName = "راهکارهای پایدار زیگورات | Ziggurat Solutions";
  const fullTitle = `${title} | ${siteName}`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Update Meta Tags
    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const setOgMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('keywords', keywords.join(', '));
    
    // Open Graph / Social Media
    setOgMeta('og:title', fullTitle);
    setOgMeta('og:description', description);
    setOgMeta('og:image', image);
    setOgMeta('og:url', canonicalUrl);
    setOgMeta('og:type', 'website');
    setOgMeta('og:locale', 'fa_IR');

    // Canonical Link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    // 3. Inject JSON-LD Schema (For Google & AI Crawlers)
    let script = document.querySelector('script[type="application/ld+json"]');
    if (schema) {
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else if (script) {
        // Remove schema if not provided for this page to prevent stale data
        script.remove();
    }

  }, [fullTitle, description, keywords, image, canonicalUrl, schema]);

  return null;
};

export default SEO;