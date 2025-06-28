import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEdit, FaTrash, FaPlus, FaSave, FaTimes, FaUser, 
  FaEye, FaSearch, FaFilter, FaCheck, FaEnvelope, FaPhone,
  FaMapMarkerAlt, FaCalendar, FaDownload, FaStar
} from 'react-icons/fa';
import './VolunteersManagement.css';

const VolunteersManagement = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [filteredVolunteers, setFilteredVolunteers] = useState([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editingVolunteer, setEditingVolunteer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  // Mock volunteer data
  useEffect(() => {
    const mockVolunteers = [
      {
        id: 1,
        name: 'Priya Sharma',
        email: 'priya.sharma@email.com',
        phone: '+91 98765 43210',
        address: 'Delhi, India',
        age: 26,
        occupation: 'Software Engineer',
        skills: ['Teaching', 'Event Management', 'Photography'],
        experience: '2 years',
        preferredWorkArea: 'Education',
        availability: 'Weekends',
        applicationDate: '2024-01-15',
        status: 'active',
        profileImage: null,
        bio: 'Passionate about education and helping underprivileged children.',
        rating: 4.8,
        hoursContributed: 120,
        projectsCompleted: 8
      },
      {
        id: 2,
        name: 'Rahul Verma',
        email: 'rahul.verma@email.com',
        phone: '+91 87654 32109',
        address: 'Mumbai, India',
        age: 32,
        occupation: 'Doctor',
        skills: ['Medical Care', 'Health Education', 'Emergency Response'],
        experience: '5 years',
        preferredWorkArea: 'Healthcare',
        availability: 'Evenings',
        applicationDate: '2024-02-01',
        status: 'active',
        profileImage: null,
        bio: 'Medical professional dedicated to providing healthcare in rural areas.',
        rating: 5.0,
        hoursContributed: 200,
        projectsCompleted: 12
      },
      {
        id: 3,
        name: 'Anjali Gupta',
        email: 'anjali.gupta@email.com',
        phone: '+91 76543 21098',
        address: 'Bangalore, India',
        age: 24,
        occupation: 'Student',
        skills: ['Social Media', 'Content Writing', 'Translation'],
        experience: '1 year',
        preferredWorkArea: 'Communication',
        availability: 'Flexible',
        applicationDate: '2024-01-20',
        status: 'pending',
        profileImage: null,
        bio: 'Student passionate about social causes and digital marketing.',
        rating: 4.2,
        hoursContributed: 45,
        projectsCompleted: 3
      },
      {
        id: 4,
        name: 'Vikash Kumar',
        email: 'vikash.kumar@email.com',
        phone: '+91 65432 10987',
        address: 'Patna, India',
        age: 29,
        occupation: 'Teacher',
        skills: ['Teaching', 'Curriculum Development', 'Child Psychology'],
        experience: '4 years',
        preferredWorkArea: 'Education',
        availability: 'After school hours',
        applicationDate: '2024-02-10',
        status: 'inactive',
        profileImage: null,
        bio: 'Experienced teacher committed to improving rural education.',
        rating: 4.6,
        hoursContributed: 180,
        projectsCompleted: 15
      }
    ];

    setVolunteers(mockVolunteers);
    setFilteredVolunteers(mockVolunteers);
  }, []);

  // Filter volunteers based on search and status
  useEffect(() => {
    let filtered = volunteers;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(volunteer =>
        volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        volunteer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        volunteer.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
        volunteer.preferredWorkArea.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(volunteer => volunteer.status === statusFilter);
    }

    setFilteredVolunteers(filtered);
  }, [searchTerm, statusFilter, volunteers]);

  const handleStatusChange = (volunteerId, newStatus) => {
    setVolunteers(prev => prev.map(volunteer =>
      volunteer.id === volunteerId
        ? { ...volunteer, status: newStatus }
        : volunteer
    ));
  };

  const handleDelete = (volunteerId) => {
    if (window.confirm('Are you sure you want to delete this volunteer?')) {
      setVolunteers(prev => prev.filter(volunteer => volunteer.id !== volunteerId));
    }
  };

  const handleViewDetails = (volunteer) => {
    setSelectedVolunteer(volunteer);
    setShowModal(true);
  };

  const exportToCSV = () => {
    const csvData = volunteers.map(volunteer => ({
      Name: volunteer.name,
      Email: volunteer.email,
      Phone: volunteer.phone,
      Address: volunteer.address,
      Age: volunteer.age,
      Occupation: volunteer.occupation,
      Skills: volunteer.skills.join('; '),
      Experience: volunteer.experience,
      'Work Area': volunteer.preferredWorkArea,
      Availability: volunteer.availability,
      Status: volunteer.status,
      'Hours Contributed': volunteer.hoursContributed,
      'Projects Completed': volunteer.projectsCompleted,
      Rating: volunteer.rating
    }));

    const csvContent = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'volunteers_data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      active: 'status-badge active',
      pending: 'status-badge pending',
      inactive: 'status-badge inactive'
    };

    return (
      <span className={statusClasses[status] || 'status-badge'}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <motion.div 
      className="volunteers-management"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="volunteers-header">
        <div className="header-content">
          <h1>Volunteers Management</h1>
          <p>Manage volunteer applications, profiles, and assignments</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary" onClick={exportToCSV}>
            <FaDownload /> Export CSV
          </button>
          <button className="btn btn-primary">
            <FaPlus /> Add Volunteer
          </button>
        </div>
      </div>

      <div className="volunteers-controls">
        <div className="search-filter-bar">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search volunteers by name, email, skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
              className="status-filter"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-number">{volunteers.filter(v => v.status === 'active').length}</span>
            <span className="stat-label">Active Volunteers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{volunteers.filter(v => v.status === 'pending').length}</span>
            <span className="stat-label">Pending Applications</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{volunteers.reduce((sum, v) => sum + v.hoursContributed, 0)}</span>
            <span className="stat-label">Total Hours</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{volunteers.reduce((sum, v) => sum + v.projectsCompleted, 0)}</span>
            <span className="stat-label">Projects Completed</span>
          </div>
        </div>
      </div>

      <div className="volunteers-grid">
        {filteredVolunteers.map(volunteer => (
          <motion.div
            key={volunteer.id}
            className="volunteer-card"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -5 }}
          >
            <div className="volunteer-avatar">
              {volunteer.profileImage ? (
                <img src={volunteer.profileImage} alt={volunteer.name} />
              ) : (
                <div className="avatar-placeholder">
                  <FaUser />
                </div>
              )}
              <div className="rating">
                <FaStar /> {volunteer.rating}
              </div>
            </div>

            <div className="volunteer-info">
              <h3>{volunteer.name}</h3>
              <p className="occupation">{volunteer.occupation}</p>
              <p className="work-area">{volunteer.preferredWorkArea}</p>
              
              <div className="contact-info">
                <span><FaEnvelope /> {volunteer.email}</span>
                <span><FaPhone /> {volunteer.phone}</span>
                <span><FaMapMarkerAlt /> {volunteer.address}</span>
              </div>

              <div className="skills">
                {volunteer.skills.slice(0, 3).map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
                {volunteer.skills.length > 3 && (
                  <span className="skill-tag more">+{volunteer.skills.length - 3}</span>
                )}
              </div>

              <div className="volunteer-stats">
                <div className="stat">
                  <span className="stat-value">{volunteer.hoursContributed}</span>
                  <span className="stat-label">Hours</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{volunteer.projectsCompleted}</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{volunteer.experience}</span>
                  <span className="stat-label">Experience</span>
                </div>
              </div>
            </div>

            <div className="volunteer-status">
              {getStatusBadge(volunteer.status)}
            </div>

            <div className="volunteer-actions">
              <button
                className="btn-icon view"
                onClick={() => handleViewDetails(volunteer)}
                title="View Details"
              >
                <FaEye />
              </button>
              <button
                className="btn-icon edit"
                onClick={() => setEditingVolunteer(volunteer)}
                title="Edit Volunteer"
              >
                <FaEdit />
              </button>
              <div className="status-dropdown">
                <select
                  value={volunteer.status}
                  onChange={(e) => handleStatusChange(volunteer.id, e.target.value)}
                  className="status-select"
                >
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <button
                className="btn-icon delete"
                onClick={() => handleDelete(volunteer.id)}
                title="Delete Volunteer"
              >
                <FaTrash />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Volunteer Details Modal */}
      {showModal && selectedVolunteer && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <motion.div
            className="modal volunteer-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="modal-header">
              <h2>Volunteer Details</h2>
              <button 
                className="close-btn"
                onClick={() => setShowModal(false)}
              >
                <FaTimes />
              </button>
            </div>

            <div className="modal-body">
              <div className="volunteer-profile">
                <div className="profile-section">
                  <div className="profile-avatar">
                    {selectedVolunteer.profileImage ? (
                      <img src={selectedVolunteer.profileImage} alt={selectedVolunteer.name} />
                    ) : (
                      <div className="avatar-placeholder large">
                        <FaUser />
                      </div>
                    )}
                  </div>
                  <div className="profile-basic">
                    <h3>{selectedVolunteer.name}</h3>
                    <p className="occupation">{selectedVolunteer.occupation}</p>
                    <div className="rating-display">
                      <FaStar /> {selectedVolunteer.rating} / 5.0
                    </div>
                    {getStatusBadge(selectedVolunteer.status)}
                  </div>
                </div>

                <div className="profile-details">
                  <div className="detail-row">
                    <strong>Email:</strong>
                    <span>{selectedVolunteer.email}</span>
                  </div>
                  <div className="detail-row">
                    <strong>Phone:</strong>
                    <span>{selectedVolunteer.phone}</span>
                  </div>
                  <div className="detail-row">
                    <strong>Address:</strong>
                    <span>{selectedVolunteer.address}</span>
                  </div>
                  <div className="detail-row">
                    <strong>Age:</strong>
                    <span>{selectedVolunteer.age} years</span>
                  </div>
                  <div className="detail-row">
                    <strong>Experience:</strong>
                    <span>{selectedVolunteer.experience}</span>
                  </div>
                  <div className="detail-row">
                    <strong>Preferred Work Area:</strong>
                    <span>{selectedVolunteer.preferredWorkArea}</span>
                  </div>
                  <div className="detail-row">
                    <strong>Availability:</strong>
                    <span>{selectedVolunteer.availability}</span>
                  </div>
                  <div className="detail-row">
                    <strong>Application Date:</strong>
                    <span>{new Date(selectedVolunteer.applicationDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="profile-skills">
                  <strong>Skills:</strong>
                  <div className="skills-list">
                    {selectedVolunteer.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="profile-bio">
                  <strong>Bio:</strong>
                  <p>{selectedVolunteer.bio}</p>
                </div>

                <div className="profile-stats-detailed">
                  <div className="stat-box">
                    <span className="stat-number">{selectedVolunteer.hoursContributed}</span>
                    <span className="stat-label">Hours Contributed</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-number">{selectedVolunteer.projectsCompleted}</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-number">{selectedVolunteer.rating}</span>
                    <span className="stat-label">Average Rating</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                Close
              </button>
              <button className="btn btn-primary">
                <FaEdit /> Edit Profile
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
    </motion.div>
  );
};

export default VolunteersManagement;
