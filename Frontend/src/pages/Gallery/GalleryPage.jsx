import React, { useState } from 'react';
// import images from '../../data/images.json';
import images from '../../assets/images/gallery/imageGalleryData.js';
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import HeroSection from '../../components/HeroSection/HeroSection';
import GalleryBanner from '../../assets/images/banners/banner_1.jpg'

const categories = ["ALL", "CHARITY", "HEALTH", "FOOD", "EDUCATION"];

const Gallery = () => { 
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedId, setSelectedId] = useState(null);
  const [viewImg, setViewImg] = useState(null); 
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // You can adjust this number

  const filteredImages = activeCategory === "ALL" 
    ? images 
    : images.filter(img => img.category.toUpperCase() === activeCategory);

  // Pagination calculations
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = filteredImages.slice(startIndex, endIndex);

  // Pagination handlers
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Reset to first page when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Generate page numbers array
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pageNumbers.push(i);
        }
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="gallery-page">
      <Navbar />
      <HeroSection  Tittle={'Our Gallery'} Heading={'Our gallery showcases the heart of Vishu Welfare Association in action—moments of learning, healing, empowerment, and unity. From rural outreach programs to urban initiatives, every image tells a story of change and compassion.'} Banner={`${GalleryBanner}`}/>
      
      <div className="gallery-container">
        {/* Category Bar */}
        <div className="category-section">
          <div className="category-wrapper">
            {categories.map((cat, idx) => (
              <React.Fragment key={cat}>
                <button
                  onClick={() => handleCategoryChange(cat)}
                  className={`category-btn ${cat === activeCategory ? 'active' : ''}`}
                >
                  {cat}
                </button>
                {idx < categories.length - 1 && (
                  <span className="category-separator">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="results-info">
          <span className="results-count">
            {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'} found
            {filteredImages.length > itemsPerPage && (
              <span className="page-info">
                {' '}- Showing {startIndex + 1} to {Math.min(endIndex, filteredImages.length)} of {filteredImages.length}
              </span>
            )}
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {currentImages.map((img, index) => (
            <div
              key={img.id}
              className={`gallery-item ${img.id === selectedId ? 'selected' : ''}`}
              onClick={() => setSelectedId(img.id)}
            >
              <div className="image-container">
                <img
                  src={img.url}
                  alt={img.category}
                  className="gallery-image"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div 
                  className="image-overlay"
                  onClick={(e) => {
                    e.stopPropagation();
                    setViewImg(img.url);
                  }}
                >
                  <div className="overlay-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15 3h6v6m-6 0L21 3m-6 18H9a6 6 0 01-6-6V9l6 6h6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="category-badge">
                  {img.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls - Only show if there are multiple pages */}
        {totalPages > 1 && (
          <div className="pagination-container">
            <div className="pagination-wrapper">
              {/* Previous Button */}
              <button
                className={`pagination-btn prev-btn ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={handlePrevious}
                disabled={currentPage === 1}
              >
                ← Previous
              </button>

              {/* Page Numbers */}
              <div className="page-numbers">
                {getPageNumbers().map((pageNum) => (
                  <button
                    key={pageNum}
                    className={`page-btn ${currentPage === pageNum ? 'active' : ''}`}
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                className={`pagination-btn next-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📷</div>
            <h3>No images found</h3>
            <p>Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Modal for viewing image */}
      {viewImg && (
        <div className="modal-overlay" onClick={() => setViewImg(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setViewImg(null)}
            >
              ✕
            </button>
            <img
              src={viewImg}
              alt="Full view"
              className="modal-image"
            />
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        .gallery-page {
          background: #fff;
          min-height: 100vh;
        }

        .gallery-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Category Section */
        .category-section {
          padding: 40px 0 20px;
          display: flex;
          justify-content: center;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .category-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 20px;
          min-width: max-content;
        }

        .category-btn {
          background: transparent;
          border: 2px solid #e5e7eb;
          color: #6b7280;
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          text-transform: uppercase;
        }

        .category-btn:hover {
          border-color: #ff9935;
          color: #ff9935;
          transform: translateY(-2px);
        }

        .category-btn.active {
          background: #ff9935;
          border-color: #ff9935;
          color: white;
          box-shadow: 0 4px 15px rgba(255, 71, 76, 0.3);
        }

        .category-separator {
          color: #d1d5db;
          font-size: 18px;
          margin: 0 4px;
        }

        /* Results Info */
        .results-info {
          text-align: center;
          margin: 20px 0 40px;
        }

        .results-count {
          color: #6b7280;
          font-size: 16px;
          font-weight: 500;
        }

        .page-info {
          color: #9ca3af;
          font-size: 14px;
        }

        /* Gallery Grid */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
          padding-bottom: 40px;
        }

        .gallery-item {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          background: white;
          border: 3px solid transparent;
        }

        .gallery-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .gallery-item.selected {
          border-color: #ff9935;
          box-shadow: 0 8px 30px rgba(255, 71, 76, 0.3);
        }

        .image-container {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .image-overlay {
          opacity: 1;
        }

        .overlay-icon {
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff9935;
          transition: transform 0.2s ease;
        }

        .overlay-icon:hover {
          transform: scale(1.1);
        }

        .category-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #ff9935;
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Pagination Styles */
        .pagination-container {
          display: flex;
          justify-content: center;
          margin: 20px 0 60px;
        }

        .pagination-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .pagination-btn {
          background: transparent;
          border: 2px solid #e5e7eb;
          color: #6b7280;
          padding: 10px 16px;
          border-radius: 8px;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .pagination-btn:hover:not(.disabled) {
          border-color: #ff9935;
          color: #ff9935;
          transform: translateY(-1px);
        }

        .pagination-btn.disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background: #f9fafb;
        }

        .page-numbers {
          display: flex;
          align-items: center;
          gap: 4px;
          margin: 0 8px;
        }

        .page-btn {
          background: transparent;
          border: 2px solid #e5e7eb;
          color: #6b7280;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .page-btn:hover {
          border-color: #ff9935;
          color: #ff9935;
          transform: translateY(-1px);
        }

        .page-btn.active {
          background: #ff9935;
          border-color: #ff9935;
          color: white;
          box-shadow: 0 4px 15px rgba(255, 153, 53, 0.3);
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 80px 20px;
          color: #6b7280;
        }

        .empty-icon {
          font-size: 64px;
          margin-bottom: 20px;
        }

        .empty-state h3 {
          font-size: 24px;
          margin: 0 0 8px;
          color: #374151;
        }

        .empty-state p {
          font-size: 16px;
          margin: 0;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .modal-close {
          position: absolute;
          top: -50px;
          right: 0;
          background: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 18px;
          font-weight: bold;
          color: #374151;
          transition: all 0.2s ease;
        }

        .modal-close:hover {
          background: #f3f4f6;
          transform: scale(1.1);
        }

        .modal-image {
          max-width: 100%;
          max-height: 100%;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .gallery-container {
            padding: 0 16px;
          }
          
          .category-section {
            padding: 30px 0 15px;
          }
          
          .category-btn {
            padding: 10px 18px;
            font-size: 12px;
          }
          
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 16px;
          }
          
          .results-info {
            margin: 15px 0 30px;
          }
          
          .modal-close {
            top: -40px;
            width: 35px;
            height: 35px;
          }

          .pagination-wrapper {
            gap: 4px;
          }

          .pagination-btn {
            padding: 8px 12px;
            font-size: 12px;
          }

          .page-btn {
            width: 35px;
            height: 35px;
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          
          .category-wrapper {
            gap: 6px;
            padding: 0 10px;
          }
          
          .category-btn {
            padding: 8px 14px;
            font-size: 11px;
          }
          
          .image-container {
            aspect-ratio: 1;
          }

          .pagination-wrapper {
            gap: 2px;
          }

          .page-numbers {
            margin: 0 4px;
          }
        }

        @media (max-width: 360px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;