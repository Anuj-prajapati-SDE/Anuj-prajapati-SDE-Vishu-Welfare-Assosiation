import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEdit, FaTrash, FaPlus, FaSave, FaTimes, FaImage, 
  FaEye, FaSearch, FaFilter 
} from 'react-icons/fa';
import './ContentManagement.css';

const ContentManagement = () => {
  const [activeSection, setActiveSection] = useState('hero-sections');
  const [editingItem, setEditingItem] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  // Mock data for different content sections
  const [contentData, setContentData] = useState({
    'hero-sections': [
      {
        id: 1,
        page: 'Home',
        title: 'Give Helping Hand For Livelihood',
        subtitle: 'Donate & Helps',
        description: 'We provide the best latest technology of equipment and our staff are available in 24/7 at clients call.',
        backgroundImage: '/src/assets/images/banners/banner1.jpg',
        ctaText: 'Donate Now',
        ctaLink: '/donate',
        isActive: true
      },
      {
        id: 2,
        page: 'About',
        title: 'About Our Organization',
        subtitle: '',
        description: 'Vishu Welfare Association is a registered non-profit organization based in Delhi, driven by a singular mission—to uplift lives and build stronger, self-reliant communities across India.',
        backgroundImage: '/src/assets/images/banners/banner_2.jpg',
        ctaText: '',
        ctaLink: '',
        isActive: true
      },
      {
        id: 3,
        page: 'Donation',
        title: 'Your Help Can Light a Life',
        subtitle: '',
        description: 'Your kindness has the power to change lives. With just a small act of giving, you can bring hope, food, education, and care to those who need it most.',
        backgroundImage: '/src/assets/images/banners/Donor.jpg',
        ctaText: '',
        ctaLink: '',
        isActive: true
      }
    ],
    'mission-vision': [
      {
        id: 1,
        type: 'mission',
        title: 'Our Mission',
        content: 'At Vishu Welfare Association, our mission is to empower marginalized communities through sustainable development initiatives that address fundamental needs in education, healthcare, livelihood, and environmental sustainability.',
        image: '/src/assets/images/gallery/23.jpg',
        order: 1,
        isActive: true
      },
      {
        id: 2,
        type: 'vision',
        title: 'Our Vision',
        content: 'We envision a society where every individual has equal access to opportunities, resources, and rights, enabling them to live with dignity and reach their full potential.',
        image: '/src/assets/images/vision.jpg',
        order: 2,
        isActive: true
      }
    ],
    'work-areas': [
      {
        id: 1,
        title: 'Education & Livelihood',
        description: 'Empowering individuals through education and skills for self-reliance.',
        icon: 'fas fa-graduation-cap',
        color: '#ffc600',
        image: '/src/assets/images/work/educational-livelihood.jpg',
        content: 'We provide comprehensive education programs and skill development initiatives to help individuals become self-reliant and economically independent.',
        isActive: true,
        order: 1
      },
      {
        id: 2,
        title: 'Health Awareness',
        description: 'Making healthcare and hygiene accessible to all communities.',
        icon: 'fas fa-heartbeat',
        color: '#ff6f61',
        image: '/src/assets/images/work/health.jpg',
        content: 'Our health programs focus on preventive care, awareness campaigns, and providing access to basic healthcare services in underserved areas.',
        isActive: true,
        order: 2
      },
      {
        id: 3,
        title: 'Plantation & Environment',
        description: 'Promoting sustainability and eco-awareness for a greener future.',
        icon: 'fas fa-seedling',
        color: '#4caf50',
        image: '/src/assets/images/work/plantation-photo.jpg',
        content: 'We conduct tree plantation drives and environmental awareness programs to combat climate change and promote sustainable living.',
        isActive: true,
        order: 3
      },
      {
        id: 4,
        title: 'Food Distribution',
        description: 'Ensuring no one goes hungry through nutritious meal programs.',
        icon: 'fas fa-utensils',
        color: '#2196f3',
        image: '/src/assets/images/work/food-donation.jpg',
        content: 'We provide nutritious meals and food security programs to vulnerable communities, especially during emergencies and disasters.',
        isActive: true,
        order: 4
      }
    ],
    'values': [
      {
        id: 1,
        title: 'Compassion',
        description: 'We approach our work with genuine care and empathy for those we serve, recognizing the dignity and worth of every individual.',
        icon: 'fas fa-heart',
        order: 1,
        isActive: true
      },
      {
        id: 2,
        title: 'Integrity',
        description: 'We hold ourselves to the highest standards of honesty, transparency, and ethical conduct in all our operations and relationships.',
        icon: 'fas fa-check-circle',
        order: 2,
        isActive: true
      },
      {
        id: 3,
        title: 'Collaboration',
        description: 'We believe in the power of partnerships and work closely with communities, organizations, and stakeholders to achieve common goals.',
        icon: 'fas fa-handshake',
        order: 3,
        isActive: true
      },
      {
        id: 4,
        title: 'Sustainability',
        description: 'We focus on creating long-term solutions that empower communities to become self-sufficient and environmentally responsible.',
        icon: 'fas fa-seedling',
        order: 4,
        isActive: true
      },
      {
        id: 5,
        title: 'Innovation',
        description: 'We embrace creative approaches and new technologies to enhance the effectiveness and reach of our programs.',
        icon: 'fas fa-lightbulb',
        order: 5,
        isActive: true
      },
      {
        id: 6,
        title: 'Adaptability',
        description: 'We are flexible and responsive to changing needs and circumstances, continuously evolving our approaches to meet new challenges.',
        icon: 'fas fa-sync-alt',
        order: 6,
        isActive: true
      }
    ]
  });

  const sections = [
    { id: 'hero-sections', label: 'Hero Sections', icon: 'fas fa-image' },
    { id: 'mission-vision', label: 'Mission & Vision', icon: 'fas fa-bullseye' },
    { id: 'work-areas', label: 'Work Areas', icon: 'fas fa-briefcase' },
    { id: 'values', label: 'Core Values', icon: 'fas fa-star' }
  ];

  const handleEdit = (item) => {
    setEditingItem({ ...item });
    setShowAddForm(true);
  };

  const handleSave = async (formData) => {
    setLoading(true);
    try {
      // Here you would make API call to save data
      await new Promise(resolve => setTimeout(resolve, 1000)); // Mock API call
      
      if (editingItem && editingItem.id) {
        // Update existing item
        setContentData(prev => ({
          ...prev,
          [activeSection]: prev[activeSection].map(item => 
            item.id === editingItem.id ? { ...formData, id: item.id } : item
          )
        }));
      } else {
        // Add new item
        const newId = Math.max(...contentData[activeSection].map(item => item.id)) + 1;
        setContentData(prev => ({
          ...prev,
          [activeSection]: [...prev[activeSection], { ...formData, id: newId }]
        }));
      }
      
      setShowAddForm(false);
      setEditingItem(null);
    } catch (error) {
      console.error('Error saving content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setLoading(true);
      try {
        // API call to delete
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setContentData(prev => ({
          ...prev,
          [activeSection]: prev[activeSection].filter(item => item.id !== id)
        }));
      } catch (error) {
        console.error('Error deleting content:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const toggleStatus = async (id) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setContentData(prev => ({
        ...prev,
        [activeSection]: prev[activeSection].map(item => 
          item.id === id ? { ...item, isActive: !item.isActive } : item
        )
      }));
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredData = contentData[activeSection]?.filter(item => {
    const searchFields = Object.values(item).join(' ').toLowerCase();
    return searchFields.includes(searchTerm.toLowerCase());
  }) || [];

  const renderSectionTabs = () => (
    <div className="section-tabs">
      {sections.map(section => (
        <button
          key={section.id}
          className={`section-tab ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => setActiveSection(section.id)}
        >
          <i className={section.icon}></i>
          <span>{section.label}</span>
        </button>
      ))}
    </div>
  );

  const renderContentTable = () => (
    <div className="content-table-container">
      <div className="table-header">
        <div className="search-filter">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="filter-btn">
            <FaFilter />
            Filter
          </button>
        </div>
        <button 
          className="add-btn"
          onClick={() => {
            setEditingItem(null);
            setShowAddForm(true);
          }}
        >
          <FaPlus />
          Add New
        </button>
      </div>

      <div className="content-table">
        <table>
          <thead>
            <tr>
              {getTableHeaders().map(header => (
                <th key={header}>{header}</th>
              ))}
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(item => (
              <tr key={item.id}>
                {renderTableRow(item)}
                <td>
                  <span className={`status-badge ${item.isActive ? 'active' : 'inactive'}`}>
                    {item.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className="action-btn edit"
                      onClick={() => handleEdit(item)}
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button 
                      className="action-btn view"
                      onClick={() => {/* Preview functionality */}}
                      title="Preview"
                    >
                      <FaEye />
                    </button>
                    <button 
                      className={`action-btn toggle ${item.isActive ? 'active' : 'inactive'}`}
                      onClick={() => toggleStatus(item.id)}
                      title={item.isActive ? 'Deactivate' : 'Activate'}
                    >
                      {item.isActive ? '●' : '○'}
                    </button>
                    <button 
                      className="action-btn delete"
                      onClick={() => handleDelete(item.id)}
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const getTableHeaders = () => {
    switch (activeSection) {
      case 'hero-sections':
        return ['Page', 'Title', 'Description', 'Image'];
      case 'mission-vision':
        return ['Type', 'Title', 'Content', 'Image'];
      case 'work-areas':
        return ['Title', 'Description', 'Color', 'Order'];
      case 'values':
        return ['Title', 'Description', 'Icon', 'Order'];
      default:
        return ['Title', 'Description'];
    }
  };

  const renderTableRow = (item) => {
    switch (activeSection) {
      case 'hero-sections':
        return (
          <>
            <td>{item.page}</td>
            <td className="title-cell">{item.title}</td>
            <td className="description-cell">{item.description.substring(0, 100)}...</td>
            <td>
              {item.backgroundImage && (
                <img src={item.backgroundImage} alt="Hero" className="table-image" />
              )}
            </td>
          </>
        );
      case 'mission-vision':
        return (
          <>
            <td><span className="type-badge">{item.type}</span></td>
            <td className="title-cell">{item.title}</td>
            <td className="description-cell">{item.content.substring(0, 100)}...</td>
            <td>
              {item.image && (
                <img src={item.image} alt={item.title} className="table-image" />
              )}
            </td>
          </>
        );
      case 'work-areas':
        return (
          <>
            <td className="title-cell">{item.title}</td>
            <td className="description-cell">{item.description}</td>
            <td>
              <div className="color-indicator" style={{ backgroundColor: item.color }}></div>
              {item.color}
            </td>
            <td>{item.order}</td>
          </>
        );
      case 'values':
        return (
          <>
            <td className="title-cell">{item.title}</td>
            <td className="description-cell">{item.description.substring(0, 100)}...</td>
            <td><i className={item.icon}></i></td>
            <td>{item.order}</td>
          </>
        );
      default:
        return <td>No data</td>;
    }
  };

  return (
    <motion.div 
      className="content-management"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="content-header">
        <h1>Content Management</h1>
        <p>Manage all website content including hero sections, mission & vision, work areas, and core values.</p>
      </div>

      {renderSectionTabs()}
      {renderContentTable()}

      {/* Add/Edit Form Modal */}
      {showAddForm && (
        <ContentForm
          section={activeSection}
          item={editingItem}
          onSave={handleSave}
          onCancel={() => {
            setShowAddForm(false);
            setEditingItem(null);
          }}
          loading={loading}
        />
      )}
    </motion.div>
  );
};

const ContentForm = ({ section, item, onSave, onCancel, loading }) => {
  const [formData, setFormData] = useState(item || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderFormFields = () => {
    switch (section) {
      case 'hero-sections':
        return (
          <>
            <div className="form-group">
              <label>Page</label>
              <select 
                value={formData.page || ''}
                onChange={(e) => handleChange('page', e.target.value)}
                required
              >
                <option value="">Select Page</option>
                <option value="Home">Home</option>
                <option value="About">About</option>
                <option value="Donation">Donation</option>
                <option value="Contact">Contact</option>
                <option value="Gallery">Gallery</option>
                <option value="Careers">Careers</option>
              </select>
            </div>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={formData.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Subtitle</label>
              <input
                type="text"
                value={formData.subtitle || ''}
                onChange={(e) => handleChange('subtitle', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={formData.description || ''}
                onChange={(e) => handleChange('description', e.target.value)}
                rows="4"
                required
              />
            </div>
            <div className="form-group">
              <label>Background Image URL</label>
              <input
                type="url"
                value={formData.backgroundImage || ''}
                onChange={(e) => handleChange('backgroundImage', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>CTA Text</label>
              <input
                type="text"
                value={formData.ctaText || ''}
                onChange={(e) => handleChange('ctaText', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>CTA Link</label>
              <input
                type="text"
                value={formData.ctaLink || ''}
                onChange={(e) => handleChange('ctaLink', e.target.value)}
              />
            </div>
          </>
        );
      case 'mission-vision':
        return (
          <>
            <div className="form-group">
              <label>Type</label>
              <select 
                value={formData.type || ''}
                onChange={(e) => handleChange('type', e.target.value)}
                required
              >
                <option value="">Select Type</option>
                <option value="mission">Mission</option>
                <option value="vision">Vision</option>
              </select>
            </div>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={formData.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea
                value={formData.content || ''}
                onChange={(e) => handleChange('content', e.target.value)}
                rows="6"
                required
              />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input
                type="url"
                value={formData.image || ''}
                onChange={(e) => handleChange('image', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Display Order</label>
              <input
                type="number"
                value={formData.order || ''}
                onChange={(e) => handleChange('order', parseInt(e.target.value))}
                min="1"
              />
            </div>
          </>
        );
      case 'work-areas':
        return (
          <>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={formData.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={formData.description || ''}
                onChange={(e) => handleChange('description', e.target.value)}
                rows="3"
                required
              />
            </div>
            <div className="form-group">
              <label>Icon Class</label>
              <input
                type="text"
                value={formData.icon || ''}
                onChange={(e) => handleChange('icon', e.target.value)}
                placeholder="e.g., fas fa-graduation-cap"
              />
            </div>
            <div className="form-group">
              <label>Color</label>
              <input
                type="color"
                value={formData.color || '#000000'}
                onChange={(e) => handleChange('color', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input
                type="url"
                value={formData.image || ''}
                onChange={(e) => handleChange('image', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Detailed Content</label>
              <textarea
                value={formData.content || ''}
                onChange={(e) => handleChange('content', e.target.value)}
                rows="4"
              />
            </div>
            <div className="form-group">
              <label>Display Order</label>
              <input
                type="number"
                value={formData.order || ''}
                onChange={(e) => handleChange('order', parseInt(e.target.value))}
                min="1"
              />
            </div>
          </>
        );
      case 'values':
        return (
          <>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={formData.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={formData.description || ''}
                onChange={(e) => handleChange('description', e.target.value)}
                rows="4"
                required
              />
            </div>
            <div className="form-group">
              <label>Icon Class</label>
              <input
                type="text"
                value={formData.icon || ''}
                onChange={(e) => handleChange('icon', e.target.value)}
                placeholder="e.g., fas fa-heart"
              />
            </div>
            <div className="form-group">
              <label>Display Order</label>
              <input
                type="number"
                value={formData.order || ''}
                onChange={(e) => handleChange('order', parseInt(e.target.value))}
                min="1"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{item ? 'Edit' : 'Add'} {section.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
          <button className="close-btn" onClick={onCancel}>
            <FaTimes />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="content-form">
          {renderFormFields()}
          
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.isActive !== false}
                onChange={(e) => handleChange('isActive', e.target.checked)}
              />
              Active
            </label>
          </div>
          
          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="save-btn" disabled={loading}>
              {loading ? (
                <>
                  <div className="spinner"></div>
                  Saving...
                </>
              ) : (
                <>
                  <FaSave />
                  Save
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContentManagement;
