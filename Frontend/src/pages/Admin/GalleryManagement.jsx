import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEdit, FaTrash, FaPlus, FaSave, FaTimes, FaImage, 
  FaEye, FaSearch, FaFilter, FaDownload, FaUpload,
  FaFolder, FaImages, FaCalendar, FaTag, FaExpand
} from 'react-icons/fa';
import './GalleryManagement.css';

const GalleryManagement = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [loading, setLoading] = useState(false);
  const [uploadFiles, setUploadFiles] = useState([]);

  // Categories for organizing gallery
  const categories = [
    'all',
    'Education',
    'Healthcare',
    'Environment',
    'Food Distribution',
    'Community Events',
    'Volunteer Activities',
    'Achievements',
    'Campaigns'
  ];

  // Mock gallery data
  useEffect(() => {
    const mockGallery = [
      {
        id: 1,
        title: 'Education Initiative - Rural School',
        description: 'Teaching and learning activities at our partner rural school',
        category: 'Education',
        imageUrl: '/src/assets/images/education.jpeg',
        uploadDate: '2024-01-15',
        photographer: 'Admin',
        tags: ['education', 'children', 'rural', 'teaching'],
        isActive: true,
        views: 1250,
        location: 'Rural Village, Delhi'
      },
      {
        id: 2,
        title: 'Health Camp - Community Service',
        description: 'Free health checkup camp organized for underprivileged communities',
        category: 'Healthcare',
        imageUrl: '/src/assets/images/health.jpeg',
        uploadDate: '2024-01-20',
        photographer: 'Dr. Volunteer',
        tags: ['health', 'medical', 'community', 'checkup'],
        isActive: true,
        views: 980,
        location: 'Community Center, Mumbai'
      },
      {
        id: 3,
        title: 'Tree Plantation Drive',
        description: 'Environmental conservation initiative with local volunteers',
        category: 'Environment',
        imageUrl: '/src/assets/images/plantation.jpeg',
        uploadDate: '2024-02-01',
        photographer: 'Eco Team',
        tags: ['environment', 'trees', 'plantation', 'green'],
        isActive: true,
        views: 750,
        location: 'Delhi NCR'
      },
      {
        id: 4,
        title: 'Food Distribution Program',
        description: 'Distributing meals to homeless and needy people',
        category: 'Food Distribution',
        imageUrl: '/src/assets/images/food-donation.jpg',
        uploadDate: '2024-02-05',
        photographer: 'Volunteer Team',
        tags: ['food', 'distribution', 'homeless', 'charity'],
        isActive: true,
        views: 1100,
        location: 'Various Locations, Delhi'
      },
      {
        id: 5,
        title: 'Volunteer Training Session',
        description: 'Training new volunteers for upcoming projects',
        category: 'Volunteer Activities',
        imageUrl: '/src/assets/images/v1.jpeg',
        uploadDate: '2024-02-10',
        photographer: 'Training Team',
        tags: ['volunteers', 'training', 'capacity building'],
        isActive: true,
        views: 650,
        location: 'Delhi Office'
      },
      {
        id: 6,
        title: 'Annual Achievement Awards',
        description: 'Recognizing outstanding volunteers and achievements',
        category: 'Achievements',
        imageUrl: '/src/assets/images/h2.jpeg',
        uploadDate: '2024-02-15',
        photographer: 'Event Team',
        tags: ['awards', 'recognition', 'achievement', 'ceremony'],
        isActive: true,
        views: 890,
        location: 'Delhi Conference Hall'
      }
    ];

    setGalleryItems(mockGallery);
    setFilteredItems(mockGallery);
  }, []);

  // Filter gallery items
  useEffect(() => {
    let filtered = galleryItems;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(item => item.category === categoryFilter);
    }

    setFilteredItems(filtered);
  }, [searchTerm, categoryFilter, galleryItems]);

  const handleDelete = (itemId) => {
    if (window.confirm('Are you sure you want to delete this gallery item?')) {
      setGalleryItems(prev => prev.filter(item => item.id !== itemId));
    }
  };

  const handleToggleActive = (itemId) => {
    setGalleryItems(prev => prev.map(item =>
      item.id === itemId
        ? { ...item, isActive: !item.isActive }
        : item
    ));
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadFiles(files);
    setShowUploadModal(true);
  };

  const handleUploadSubmit = (uploadData) => {
    // Mock upload process
    const newItems = uploadFiles.map((file, index) => ({
      id: Date.now() + index,
      title: uploadData.title || file.name,
      description: uploadData.description || '',
      category: uploadData.category,
      imageUrl: URL.createObjectURL(file),
      uploadDate: new Date().toISOString().split('T')[0],
      photographer: 'Admin',
      tags: uploadData.tags ? uploadData.tags.split(',').map(tag => tag.trim()) : [],
      isActive: true,
      views: 0,
      location: uploadData.location || ''
    }));

    setGalleryItems(prev => [...prev, ...newItems]);
    setShowUploadModal(false);
    setUploadFiles([]);
  };

  const handleViewImage = (item) => {
    setSelectedItem(item);
    setShowModal(true);
    
    // Increment view count
    setGalleryItems(prev => prev.map(galleryItem =>
      galleryItem.id === item.id
        ? { ...galleryItem, views: galleryItem.views + 1 }
        : galleryItem
    ));
  };

  const exportGalleryData = () => {
    const csvData = galleryItems.map(item => ({
      Title: item.title,
      Description: item.description,
      Category: item.category,
      'Upload Date': item.uploadDate,
      Photographer: item.photographer,
      Tags: item.tags.join('; '),
      Status: item.isActive ? 'Active' : 'Inactive',
      Views: item.views,
      Location: item.location
    }));

    const csvContent = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gallery_data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <motion.div 
      className="gallery-management"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="gallery-header">
        <div className="header-content">
          <h1>Gallery Management</h1>
          <p>Upload, organize, and manage photo galleries for different projects</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary" onClick={exportGalleryData}>
            <FaDownload /> Export Data
          </button>
          <label className="btn btn-primary upload-btn">
            <FaUpload /> Upload Images
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
            />
          </label>
        </div>
      </div>

      <div className="gallery-controls">
        <div className="search-filter-bar">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by title, description, tags, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <select 
              value={categoryFilter} 
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="category-filter"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-number">{galleryItems.length}</span>
            <span className="stat-label">Total Images</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{galleryItems.filter(item => item.isActive).length}</span>
            <span className="stat-label">Active Images</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{galleryItems.reduce((sum, item) => sum + item.views, 0)}</span>
            <span className="stat-label">Total Views</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{new Set(galleryItems.map(item => item.category)).size}</span>
            <span className="stat-label">Categories</span>
          </div>
        </div>
      </div>

      <div className="gallery-grid">
        {filteredItems.map(item => (
          <motion.div
            key={item.id}
            className="gallery-card"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -5 }}
          >
            <div className="image-container">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                onError={(e) => {
                  e.target.src = '/src/assets/images/placeholder.jpg';
                }}
              />
              <div className="image-overlay">
                <button
                  className="overlay-btn view"
                  onClick={() => handleViewImage(item)}
                  title="View Image"
                >
                  <FaEye />
                </button>
                <button
                  className="overlay-btn expand"
                  onClick={() => handleViewImage(item)}
                  title="Full Screen"
                >
                  <FaExpand />
                </button>
              </div>
              <div className="status-indicator">
                <span className={`status-badge ${item.isActive ? 'active' : 'inactive'}`}>
                  {item.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>

            <div className="gallery-info">
              <div className="category-tag">
                <FaFolder /> {item.category}
              </div>
              
              <h3>{item.title}</h3>
              <p className="description">{item.description}</p>
              
              <div className="meta-info">
                <span className="meta-item">
                  <FaCalendar /> {new Date(item.uploadDate).toLocaleDateString()}
                </span>
                <span className="meta-item">
                  <FaEye /> {item.views} views
                </span>
              </div>

              <div className="tags">
                {item.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="tag">
                    <FaTag /> {tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="tag more">+{item.tags.length - 3}</span>
                )}
              </div>

              <div className="photographer">
                <span>By: {item.photographer}</span>
              </div>
            </div>

            <div className="gallery-actions">
              <button
                className="btn-icon edit"
                title="Edit Item"
              >
                <FaEdit />
              </button>
              <button
                className="btn-icon toggle"
                onClick={() => handleToggleActive(item.id)}
                title={item.isActive ? 'Deactivate' : 'Activate'}
              >
                {item.isActive ? <FaTimes /> : <FaSave />}
              </button>
              <button
                className="btn-icon delete"
                onClick={() => handleDelete(item.id)}
                title="Delete Item"
              >
                <FaTrash />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Viewer Modal */}
      {showModal && selectedItem && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <motion.div
            className="modal image-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="modal-header">
              <h2>{selectedItem.title}</h2>
              <button 
                className="close-btn"
                onClick={() => setShowModal(false)}
              >
                <FaTimes />
              </button>
            </div>

            <div className="modal-body">
              <div className="image-viewer">
                <img 
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.title}
                  className="full-image"
                />
              </div>
              
              <div className="image-details">
                <div className="detail-section">
                  <h4>Description</h4>
                  <p>{selectedItem.description}</p>
                </div>

                <div className="detail-grid">
                  <div className="detail-item">
                    <strong>Category:</strong>
                    <span>{selectedItem.category}</span>
                  </div>
                  <div className="detail-item">
                    <strong>Upload Date:</strong>
                    <span>{new Date(selectedItem.uploadDate).toLocaleDateString()}</span>
                  </div>
                  <div className="detail-item">
                    <strong>Photographer:</strong>
                    <span>{selectedItem.photographer}</span>
                  </div>
                  <div className="detail-item">
                    <strong>Location:</strong>
                    <span>{selectedItem.location}</span>
                  </div>
                  <div className="detail-item">
                    <strong>Views:</strong>
                    <span>{selectedItem.views}</span>
                  </div>
                  <div className="detail-item">
                    <strong>Status:</strong>
                    <span className={selectedItem.isActive ? 'active' : 'inactive'}>
                      {selectedItem.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>

                <div className="detail-section">
                  <h4>Tags</h4>
                  <div className="tags-list">
                    {selectedItem.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        <FaTag /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                Close
              </button>
              <button className="btn btn-primary">
                <FaEdit /> Edit Details
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <UploadModal 
          files={uploadFiles}
          onSubmit={handleUploadSubmit}
          onClose={() => {
            setShowUploadModal(false);
            setUploadFiles([]);
          }}
        />
      )}

      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
    </motion.div>
  );
};

// Upload Modal Component
const UploadModal = ({ files, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Education',
    tags: '',
    location: ''
  });

  const categories = [
    'Education',
    'Healthcare',
    'Environment',
    'Food Distribution',
    'Community Events',
    'Volunteer Activities',
    'Achievements',
    'Campaigns'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal upload-modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <div className="modal-header">
          <h2>Upload Images</h2>
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="upload-preview">
              <h4>Selected Files ({files.length})</h4>
              <div className="files-grid">
                {files.slice(0, 4).map((file, index) => (
                  <div key={index} className="file-preview">
                    <img 
                      src={URL.createObjectURL(file)} 
                      alt={file.name}
                    />
                    <span className="file-name">{file.name}</span>
                  </div>
                ))}
                {files.length > 4 && (
                  <div className="file-preview more-files">
                    <FaImages />
                    <span>+{files.length - 4} more</span>
                  </div>
                )}
              </div>
            </div>

            <div className="upload-form">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter title for the images"
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe the images"
                  rows={3}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="Where were these taken?"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Tags (comma separated)</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                  placeholder="education, children, rural, teaching"
                />
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              <FaUpload /> Upload Images
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default GalleryManagement;
