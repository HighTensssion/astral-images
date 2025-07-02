import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';

const Gallery = ({ category }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Map route categories to manifest categories
  const categoryMapping = {
    'all': 'all',
    'members': 'Astral Solos',
    'astralPairings': 'Astral Pairings',
    'pairingCustoms': 'Pairing Customs',
    'singles': 'Solo Customs',
    'pairingGifs': 'Pairing Custom GIFS',
    'singleGifs': 'Solo Custom GIFS'
  };

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      
      try {
        // Fetch the manifest file that contains all image paths
        const response = await fetch(`${process.env.PUBLIC_URL}/images-manifest.json`);
        if (!response.ok) {
          throw new Error('Failed to load image manifest');
        }
        
        const manifest = await response.json();
        let imageList = [];
        
        if (category === 'all') {
          // Load all categories
          Object.keys(manifest).forEach(cat => {
            imageList = [...imageList, ...manifest[cat]];
          });
        } else {
          // Get the manifest category name from our route category
          const targetCategory = categoryMapping[category];
          if (targetCategory && manifest[targetCategory]) {
            imageList = manifest[targetCategory];
          }
        }
        
        setImages(imageList);
      } catch (err) {
        console.error("Error loading images:", err);
        setError("Failed to load images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    loadImages();
  }, [category]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading beautiful images...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  // Format the category name for display
  const formatCategoryTitle = (cat) => {
    if (cat === 'all') return 'All Images';
    
    // Handle special cases
      switch (cat) {
      case 'members': return 'Astral Singles';
      case 'singles': return 'Custom Singles';
      case 'astralPairings': return 'Astral Pairings';
      case 'pairingCustoms': return 'Custom Pairings';
      case 'pairingGifs': return 'Custom Pairing GIFs';
      case 'singleGifs': return 'Custom Single GIFs';
      default:
        // Capitalize first letter
        return cat.charAt(0).toUpperCase() + cat.slice(1);
    }
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">
        {formatCategoryTitle(category)}
      </h1>
      
      {images.length === 0 ? (
        <div className="no-images">
          <p>No images found in this category.</p>
        </div>
      ) : (
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <div className="image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `${process.env.PUBLIC_URL}/placeholder.png`;
                    e.target.alt = "Image not found";
                  }}
                />
                <div className="image-overlay">
                  <a href={image.src} target="_blank" rel="noopener noreferrer" className="view-full">
                    View Full
                  </a>
                </div>
              </div>
              <div className="image-caption">
                <p className="image-title">{image.alt}</p>
                <p className="image-category">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;