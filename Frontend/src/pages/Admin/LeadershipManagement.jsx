import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEdit, FaTrash, FaPlus, FaSave, FaTimes, FaUser, 
  FaEye, FaSearch, FaFilter, FaLinkedin, FaTwitter,
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap,
  FaBriefcase, FaStar, FaDownload
} from 'react-icons/fa';
import './LeadershipManagement.css';

const LeadershipManagement = () => {
  const [leaders, setLeaders] = useState([]);
  const [filteredLeaders, setFilteredLeaders] = useState([]);
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingLeader, setEditingLeader] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  // Departments/categories
  const departments = [
    'all',
    'Executive Board',
    'Management',
    'Operations',
    'Finance',
    'Programs',
    'Community Outreach',
    'Advisory Board'
  ];

  // Mock leadership data
  useEffect(() => {
    const mockLeaders = [
      {
        id: 1,
        name: 'Dr. Rajesh Kumar',
        position: 'Founder & Chairman',
        department: 'Executive Board',
        bio: 'Dr. Rajesh Kumar is the visionary founder of Vishu Welfare Association with over 25 years of experience in social work and community development. He holds a PhD in Social Work and has been instrumental in establishing numerous welfare programs across India.',
        email: 'rajesh.kumar@vishuwelfare.org',
        phone: '+91 98765 43210',
        location: 'Delhi, India',
        education: 'PhD in Social Work, MSW',
        experience: '25+ years',
        joinDate: '2010-01-15',
        profileImage: null,
        socialLinks: {
          linkedin: 'https://linkedin.com/in/rajeshkumar',
          twitter: 'https://twitter.com/rajeshkumar',
          email: 'rajesh.kumar@vishuwelfare.org'
        },
        achievements: [
          'Founded 3 NGOs',
          'Social Impact Award 2022',
          'Community Leadership Recognition'
        ],
        skills: ['Leadership', 'Strategic Planning', 'Community Development', 'Fundraising'],
        isActive: true,
        displayOrder: 1
      },
      {
        id: 2,
        name: 'Ms. Priya Sharma',
        position: 'Executive Director',
        department: 'Management',
        bio: 'Ms. Priya Sharma oversees the day-to-day operations of the organization and ensures that all programs align with our mission. She brings 15 years of experience in nonprofit management and has a proven track record of scaling social impact initiatives.',
        email: 'priya.sharma@vishuwelfare.org',
        phone: '+91 87654 32109',
        location: 'Mumbai, India',
        education: 'MBA, Masters in Public Administration',
        experience: '15+ years',
        joinDate: '2012-03-20',
        profileImage: null,
        socialLinks: {
          linkedin: 'https://linkedin.com/in/priyasharma',
          email: 'priya.sharma@vishuwelfare.org'
        },
        achievements: [
          'Scaled operations by 300%',
          'Excellence in Management Award',
          'Women Leadership Recognition'
        ],
        skills: ['Operations Management', 'Strategic Leadership', 'Team Building', 'Program Development'],
        isActive: true,
        displayOrder: 2
      },
      {
        id: 3,
        name: 'Mr. Amit Patel',
        position: 'Program Director',
        department: 'Programs',
        bio: 'Mr. Amit Patel leads our core programs in education, healthcare, and community development. With a background in development studies and 12 years of field experience, he ensures our programs create meaningful impact in the communities we serve.',
        email: 'amit.patel@vishuwelfare.org',
        phone: '+91 76543 21098',
        location: 'Bangalore, India',
        education: 'Masters in Development Studies',
        experience: '12+ years',
        joinDate: '2014-06-10',
        profileImage: null,
        socialLinks: {
          linkedin: 'https://linkedin.com/in/amitpatel',
          email: 'amit.patel@vishuwelfare.org'
        },
        achievements: [
          'Launched 10+ successful programs',
          'Community Impact Award',
          'Innovation in Social Programs'
        ],
        skills: ['Program Management', 'Community Engagement', 'Project Planning', 'Impact Measurement'],
        isActive: true,
        displayOrder: 3
      },
      {
        id: 4,
        name: 'Dr. Sunita Gupta',
        position: 'Medical Advisor',
        department: 'Advisory Board',
        bio: 'Dr. Sunita Gupta is a renowned physician who provides medical expertise and guidance for our healthcare initiatives. She has been practicing medicine for over 20 years and volunteers her time to help us design effective health programs.',
        email: 'sunita.gupta@vishuwelfare.org',
        phone: '+91 65432 10987',
        location: 'Delhi, India',
        education: 'MBBS, MD (Internal Medicine)',
        experience: '20+ years',
        joinDate: '2015-09-15',
        profileImage: null,
        socialLinks: {
          linkedin: 'https://linkedin.com/in/sunitagupta',
          email: 'sunita.gupta@vishuwelfare.org'
        },
        achievements: [
          'Medical Excellence Award',
          'Community Health Champion',
          'Healthcare Innovation Recognition'
        ],
        skills: ['Medical Expertise', 'Healthcare Planning', 'Public Health', 'Medical Training'],
        isActive: true,
        displayOrder: 4
      },
      {
        id: 5,
        name: 'Mr. Rahul Verma',
        position: 'Finance Manager',
        department: 'Finance',
        bio: 'Mr. Rahul Verma manages our financial operations and ensures transparency and accountability in all financial matters. He is a chartered accountant with 10 years of experience in nonprofit financial management.',
        email: 'rahul.verma@vishuwelfare.org',
        phone: '+91 54321 09876',
        location: 'Delhi, India',
        education: 'CA, B.Com',
        experience: '10+ years',
        joinDate: '2016-01-20',
        profileImage: null,
        socialLinks: {
          linkedin: 'https://linkedin.com/in/rahulverma',
          email: 'rahul.verma@vishuwelfare.org'
        },
        achievements: [
          'Financial Transparency Award',
          'Audit Excellence Recognition',
          'Cost Optimization Achievement'
        ],
        skills: ['Financial Management', 'Audit & Compliance', 'Budget Planning', 'Risk Management'],
        isActive: true,
        displayOrder: 5
      }
    ];

    setLeaders(mockLeaders);
    setFilteredLeaders(mockLeaders);
  }, []);

  // Filter leaders
  useEffect(() => {
    let filtered = leaders;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(leader =>
        leader.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        leader.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        leader.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        leader.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Department filter
    if (departmentFilter !== 'all') {
      filtered = filtered.filter(leader => leader.department === departmentFilter);
    }

    // Sort by display order
    filtered.sort((a, b) => a.displayOrder - b.displayOrder);

    setFilteredLeaders(filtered);
  }, [searchTerm, departmentFilter, leaders]);

  const handleDelete = (leaderId) => {
    if (window.confirm('Are you sure you want to delete this leadership profile?')) {
      setLeaders(prev => prev.filter(leader => leader.id !== leaderId));
    }
  };

  const handleToggleActive = (leaderId) => {
    setLeaders(prev => prev.map(leader =>
      leader.id === leaderId
        ? { ...leader, isActive: !leader.isActive }
        : leader
    ));
  };

  const handleViewDetails = (leader) => {
    setSelectedLeader(leader);
    setShowModal(true);
  };

  const exportToCSV = () => {
    const csvData = leaders.map(leader => ({
      Name: leader.name,
      Position: leader.position,
      Department: leader.department,
      Email: leader.email,
      Phone: leader.phone,
      Location: leader.location,
      Education: leader.education,
      Experience: leader.experience,
      'Join Date': leader.joinDate,
      Skills: leader.skills.join('; '),
      Status: leader.isActive ? 'Active' : 'Inactive',
      'Display Order': leader.displayOrder
    }));

    const csvContent = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'leadership_data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <motion.div 
      className="leadership-management"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="leadership-header">
        <div className="header-content">
          <h1>Leadership Management</h1>
          <p>Manage leadership team profiles, bios, and organizational structure</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary" onClick={exportToCSV}>
            <FaDownload /> Export CSV
          </button>
          <button className="btn btn-primary" onClick={() => setShowAddForm(true)}>
            <FaPlus /> Add Leader
          </button>
        </div>
      </div>

      <div className="leadership-controls">
        <div className="search-filter-bar">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by name, position, department, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-group">
            <select 
              value={departmentFilter} 
              onChange={(e) => setDepartmentFilter(e.target.value)}
              className="department-filter"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-number">{leaders.length}</span>
            <span className="stat-label">Total Leaders</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{leaders.filter(l => l.isActive).length}</span>
            <span className="stat-label">Active Profiles</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{new Set(leaders.map(l => l.department)).size}</span>
            <span className="stat-label">Departments</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{Math.round(leaders.reduce((sum, l) => sum + parseInt(l.experience), 0) / leaders.length)}</span>
            <span className="stat-label">Avg Experience</span>
          </div>
        </div>
      </div>

      <div className="leadership-grid">
        {filteredLeaders.map(leader => (
          <motion.div
            key={leader.id}
            className="leader-card"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -5 }}
          >
            <div className="leader-avatar">
              {leader.profileImage ? (
                <img src={leader.profileImage} alt={leader.name} />
              ) : (
                <div className="avatar-placeholder">
                  <FaUser />
                </div>
              )}
              <div className="status-indicator">
                <span className={`status-badge ${leader.isActive ? 'active' : 'inactive'}`}>
                  {leader.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>

            <div className="leader-info">
              <h3>{leader.name}</h3>
              <p className="position">{leader.position}</p>
              <p className="department">{leader.department}</p>
              
              <div className="contact-info">
                <span><FaEnvelope /> {leader.email}</span>
                <span><FaPhone /> {leader.phone}</span>
                <span><FaMapMarkerAlt /> {leader.location}</span>
              </div>

              <div className="education-experience">
                <div className="info-item">
                  <FaGraduationCap />
                  <span>{leader.education}</span>
                </div>
                <div className="info-item">
                  <FaBriefcase />
                  <span>{leader.experience}</span>
                </div>
              </div>

              <div className="skills">
                {leader.skills.slice(0, 3).map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
                {leader.skills.length > 3 && (
                  <span className="skill-tag more">+{leader.skills.length - 3}</span>
                )}
              </div>

              <div className="social-links">
                {leader.socialLinks.linkedin && (
                  <a href={leader.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                )}
                {leader.socialLinks.twitter && (
                  <a href={leader.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                )}
                <a href={`mailto:${leader.socialLinks.email}`}>
                  <FaEnvelope />
                </a>
              </div>
            </div>

            <div className="leader-actions">
              <button
                className="btn-icon view"
                onClick={() => handleViewDetails(leader)}
                title="View Details"
              >
                <FaEye />
              </button>
              <button
                className="btn-icon edit"
                onClick={() => setEditingLeader(leader)}
                title="Edit Profile"
              >
                <FaEdit />
              </button>
              <button
                className="btn-icon toggle"
                onClick={() => handleToggleActive(leader.id)}
                title={leader.isActive ? 'Deactivate' : 'Activate'}
              >
                {leader.isActive ? <FaTimes /> : <FaSave />}
              </button>
              <button
                className="btn-icon delete"
                onClick={() => handleDelete(leader.id)}
                title="Delete Profile"
              >
                <FaTrash />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Leader Details Modal */}
      {showModal && selectedLeader && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <motion.div
            className="modal leader-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="modal-header">
              <h2>Leadership Profile</h2>
              <button 
                className="close-btn"
                onClick={() => setShowModal(false)}
              >
                <FaTimes />
              </button>
            </div>

            <div className="modal-body">
              <div className="leader-profile">
                <div className="profile-header">
                  <div className="profile-avatar">
                    {selectedLeader.profileImage ? (
                      <img src={selectedLeader.profileImage} alt={selectedLeader.name} />
                    ) : (
                      <div className="avatar-placeholder large">
                        <FaUser />
                      </div>
                    )}
                  </div>
                  <div className="profile-basic">
                    <h3>{selectedLeader.name}</h3>
                    <p className="position">{selectedLeader.position}</p>
                    <p className="department">{selectedLeader.department}</p>
                    <span className={`status-badge ${selectedLeader.isActive ? 'active' : 'inactive'}`}>
                      {selectedLeader.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>

                <div className="profile-bio">
                  <h4>Biography</h4>
                  <p>{selectedLeader.bio}</p>
                </div>

                <div className="profile-details">
                  <div className="details-grid">
                    <div className="detail-item">
                      <strong>Email:</strong>
                      <span>{selectedLeader.email}</span>
                    </div>
                    <div className="detail-item">
                      <strong>Phone:</strong>
                      <span>{selectedLeader.phone}</span>
                    </div>
                    <div className="detail-item">
                      <strong>Location:</strong>
                      <span>{selectedLeader.location}</span>
                    </div>
                    <div className="detail-item">
                      <strong>Education:</strong>
                      <span>{selectedLeader.education}</span>
                    </div>
                    <div className="detail-item">
                      <strong>Experience:</strong>
                      <span>{selectedLeader.experience}</span>
                    </div>
                    <div className="detail-item">
                      <strong>Joined:</strong>
                      <span>{new Date(selectedLeader.joinDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="profile-skills">
                  <h4>Skills & Expertise</h4>
                  <div className="skills-list">
                    {selectedLeader.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="profile-achievements">
                  <h4>Key Achievements</h4>
                  <ul>
                    {selectedLeader.achievements.map((achievement, index) => (
                      <li key={index}>
                        <FaStar /> {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="profile-social">
                  <h4>Connect</h4>
                  <div className="social-links-detailed">
                    {selectedLeader.socialLinks.linkedin && (
                      <a href={selectedLeader.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaLinkedin /> LinkedIn Profile
                      </a>
                    )}
                    {selectedLeader.socialLinks.twitter && (
                      <a href={selectedLeader.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaTwitter /> Twitter Profile
                      </a>
                    )}
                    <a href={`mailto:${selectedLeader.socialLinks.email}`} className="social-link">
                      <FaEnvelope /> Send Email
                    </a>
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

export default LeadershipManagement;
