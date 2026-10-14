import React from 'react';
import './GirlDeveloper.css';

/**
 * GirlDeveloper Component
 * Renders a smoothly animated girl developer sitting in her office chair with laptop.
 * The girl and her entire chair glide horizontally using CSS `transform: translateX()`
 * with gentle floating/bouncing vertical motion and reduced-motion support.
 */
export default function GirlDeveloper({
  imageSrc = './assets/girl-developer.png',
  alt = 'Cute anime girl developer sitting with laptop on office chair',
  className = ''
}) {
  return (
    <div className={`girl-developer-container ${className}`} aria-hidden="true">
      {/* The girl and her entire chair move together as one coordinated unit */}
      <div className="girl-developer-unit">
        <div className="girl-developer-bobbing">
          <img
            src={imageSrc}
            alt={alt}
            className="girl-developer-img"
            loading="lazy"
          />
          <div className="girl-developer-shadow" />
        </div>
      </div>
    </div>
  );
}
