import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, FaUsers, FaDonate, FaImages, FaUserTie, FaBlog, 
  FaEnvelope, FaBriefcase, FaHandsHelping, FaCog, FaChartBar,
  FaPlus, FaEdit, FaTrash, FaEye, FaSearch, FaFilter,
  FaBell, FaSignOutAlt, FaUserCircle, FaTimes, FaBars
} from 'react-icons/fa';
import './AdminDashboard.css';
import ContentManagement from './ContentManagement';
import DonationsManagement from './DonationsManagement';
import VolunteersManagement from './VolunteersManagement';
import GalleryManagement from './GalleryManagement';
import LeadershipManagement from './LeadershipManagement';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);

  // Mock data - replace with actual API calls
  const [dashboardStats, setDashboardStats] = useState({
    totalDonations: 156750,
    totalVolunteers: 234,
    totalProjects: 45,
    totalBeneficiaries: 12500,
    recentDonations: 15,
    activeProjects: 8,
    pendingVolunteers: 12,
    monthlyGrowth: 15.5
  });

  const [notifications, setNotifications] = useState([
    { id: 1, type: 'donation', message: 'New donation of ₹5,000 received', time: '2 min ago', unread: true },
    { id: 2, type: 'volunteer', message: 'New volunteer application', time: '15 min ago', unread: true },
    { id: 3, type: 'project', message: 'Health camp project completed', time: '1 hour ago', unread: false },
    { id: 4, type: 'system', message: 'Monthly report generated', time: '2 hours ago', unread: false }
  ]);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FaHome },
    { id: 'content', label: 'Content Management', icon: FaEdit, 
      submenu: [
        { id: 'hero-sections', label: 'Hero Sections' },
        { id: 'about-content', label: 'About Content' },
        { id: 'mission-vision', label: 'Mission & Vision' },
        { id: 'work-areas', label: 'Work Areas' },
        { id: 'values', label: 'Values & Principles' }
      ]
    },
    { id: 'donations', label: 'Donations', icon: FaDonate },
    { id: 'volunteers', label: 'Volunteers', icon: FaUsers },
    { id: 'gallery', label: 'Gallery', icon: FaImages },
    { id: 'leadership', label: 'Leadership', icon: FaUserTie },
    { id: 'testimonials', label: 'Testimonials', icon: FaUsers },
    { id: 'projects', label: 'Projects & Campaigns', icon: FaHandsHelping },
    { id: 'blog', label: 'Blog & News', icon: FaBlog },
    { id: 'contact', label: 'Contact Inquiries', icon: FaEnvelope },
    { id: 'careers', label: 'Career Applications', icon: FaBriefcase },
    { id: 'partners', label: 'Partners', icon: FaHandsHelping },
    { id: 'analytics', label: 'Analytics', icon: FaChartBar },
    { id: 'settings', label: 'Settings', icon: FaCog }
  ];

  const StatCard = ({ title, value, icon: Icon, change, color = "primary" }) => (
    <motion.div 
      className={`stat-card ${color}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="stat-icon">
        <Icon />
      </div>
      <div className="stat-content">
        <h3>{value}</h3>
        <p>{title}</p>
        {change && (
          <span className={`change ${change > 0 ? 'positive' : 'negative'}`}>
            {change > 0 ? '↑' : '↓'} {Math.abs(change)}%
          </span>
        )}
      </div>
    </motion.div>
  );

  const renderDashboard = () => (
    <motion.div 
      className="dashboard-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome back! Here's what's happening with your organization today.</p>
      </div>

      <div className="stats-grid">
        <StatCard 
          title="Total Donations" 
          value={`₹${dashboardStats.totalDonations.toLocaleString()}`}
          icon={FaDonate}
          change={12.5}
          color="primary"
        />
        <StatCard 
          title="Active Volunteers" 
          value={dashboardStats.totalVolunteers}
          icon={FaUsers}
          change={8.2}
          color="success"
        />
        <StatCard 
          title="Projects Completed" 
          value={dashboardStats.totalProjects}
          icon={FaHandsHelping}
          change={15.3}
          color="info"
        />
        <StatCard 
          title="Lives Impacted" 
          value={dashboardStats.totalBeneficiaries.toLocaleString()}
          icon={FaHome}
          change={22.1}
          color="warning"
        />
      </div>

      <div className="dashboard-widgets">
        <div className="widget recent-activities">
          <div className="widget-header">
            <h3>Recent Activities</h3>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="activities-list">
            <div className="activity-item">
              <div className="activity-icon donation">
                <FaDonate />
              </div>
              <div className="activity-content">
                <p><strong>New donation</strong> of ₹5,000 received from Anonymous</p>
                <span className="time">2 minutes ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon volunteer">
                <FaUsers />
              </div>
              <div className="activity-content">
                <p><strong>Volunteer application</strong> submitted by Priya Sharma</p>
                <span className="time">15 minutes ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon project">
                <FaHandsHelping />
              </div>
              <div className="activity-content">
                <p><strong>Health camp project</strong> completed in Rural Area</p>
                <span className="time">1 hour ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="widget quick-actions">
          <div className="widget-header">
            <h3>Quick Actions</h3>
          </div>
          <div className="quick-actions-grid">
            <button className="quick-action-btn" onClick={() => setActiveTab('donations')}>
              <FaPlus />
              <span>Add Donation</span>
            </button>
            <button className="quick-action-btn" onClick={() => setActiveTab('gallery')}>
              <FaImages />
              <span>Upload Photos</span>
            </button>
            <button className="quick-action-btn" onClick={() => setActiveTab('blog')}>
              <FaBlog />
              <span>Create Post</span>
            </button>
            <button className="quick-action-btn" onClick={() => setActiveTab('volunteers')}>
              <FaUsers />
              <span>Manage Volunteers</span>
            </button>
          </div>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-widget">
          <div className="widget-header">
            <h3>Donation Trends</h3>
            <select className="time-filter">
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="chart-placeholder">
            <p>Chart will be implemented with a charting library</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'donations':
        return <DonationsManagement />;
      case 'volunteers':
        return <VolunteersManagement />;
      case 'gallery':
        return <GalleryManagement />;
      case 'leadership':
        return <LeadershipManagement />;
      case 'testimonials':
        return <TestimonialsManagement />;
      case 'content':
        return <ContentManagement />;
      case 'hero-sections':
        return <HeroSectionsManagement />;
      case 'about-content':
        return <AboutContentManagement />;
      case 'mission-vision':
        return <MissionVisionManagement />;
      case 'work-areas':
        return <WorkAreasManagement />;
      case 'values':
        return <ValuesManagement />;
      case 'projects':
        return <ProjectsManagement />;
      case 'blog':
        return <BlogManagement />;
      case 'contact':
        return <ContactManagement />;
      case 'careers':
        return <CareersManagement />;
      case 'partners':
        return <PartnersManagement />;
      case 'analytics':
        return <AnalyticsManagement />;
      case 'settings':
        return <SettingsManagement />;
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Mobile Menu Overlay */}
      {sidebarOpen && window.innerWidth <= 768 && (
        <div className="mobile-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <motion.aside 
        className={`admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}
        initial={{ x: -250 }}
        animate={{ x: sidebarOpen ? 0 : -250 }}
        transition={{ duration: 0.3 }}
      >
        <div className="sidebar-header">
          <div className="logo">
            <img src="/src/assets/images/VISHU_LOGO.png" alt="Vishu Welfare" />
            <span>Admin Panel</span>
          </div>
          <button 
            className="sidebar-toggle mobile-only"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map(item => (
            <div key={item.id} className="nav-item">
              <button
                className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon className="nav-icon" />
                <span>{item.label}</span>
              </button>
              {item.submenu && (
                <div className="submenu">
                  {item.submenu.map(subItem => (
                    <button
                      key={subItem.id}
                      className={`submenu-link ${activeTab === subItem.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(subItem.id)}
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Top Header */}
        <header className="admin-header">
          <div className="header-left">
            <button 
              className="sidebar-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <FaBars />
            </button>
            
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="header-right">
            <div className="notifications">
              <button 
                className="notification-btn"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <FaBell />
                <span className="notification-count">
                  {notifications.filter(n => n.unread).length}
                </span>
              </button>

              {showNotifications && (
                <div className="notifications-dropdown">
                  <div className="notifications-header">
                    <h4>Notifications</h4>
                    <button>Mark all read</button>
                  </div>
                  <div className="notifications-list">
                    {notifications.map(notification => (
                      <div 
                        key={notification.id} 
                        className={`notification-item ${notification.unread ? 'unread' : ''}`}
                      >
                        <p>{notification.message}</p>
                        <span className="time">{notification.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="user-menu">
              <button className="user-btn">
                <FaUserCircle />
                <span>Admin</span>
              </button>
              <div className="user-dropdown">
                <a href="/profile">Profile</a>
                <a href="/settings">Settings</a>
                <hr />
                <a href="/logout">
                  <FaSignOutAlt />
                  Logout
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="admin-content">
          {renderContent()}
        </div>
      </main>

      {/* Loading Overlay */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Component placeholders for different management sections that are not yet implemented
const TestimonialsManagement = () => (
  <motion.div 
    className="management-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h1>Testimonials Management</h1>
    <p>Manage client testimonials, success stories, and feedback.</p>
  </motion.div>
);

const HeroSectionsManagement = () => (
  <motion.div 
    className="management-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h1>Hero Sections Management</h1>
    <p>Manage hero banners, titles, and call-to-action content for all pages.</p>
  </motion.div>
);

const AboutContentManagement = () => (
  <motion.div 
    className="management-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h1>About Content Management</h1>
    <p>Manage organization information, history, and about page content.</p>
  </motion.div>
);

const MissionVisionManagement = () => (
  <motion.div 
    className="management-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h1>Mission & Vision Management</h1>
    <p>Update mission statements, vision content, and organizational goals.</p>
  </motion.div>
);

const WorkAreasManagement = () => (
  <motion.div 
    className="management-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h1>Work Areas Management</h1>
    <p>Manage different work areas: Education, Health, Environment, Food Distribution.</p>
  </motion.div>
);

const ValuesManagement = () => (
  <motion.div 
    className="management-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h1>Values & Principles Management</h1>
    <p>Manage core values, principles, and organizational culture content.</p>
  </motion.div>
);

const ProjectsManagement = () => (
  <motion.div 
    className="management-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h1>Projects & Campaigns Management</h1>
    <p>Manage ongoing projects, campaigns, and their progress.</p>
  </motion.div>
);

const BlogManagement = () => (
  <motion.div 
    className="management-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h1>Blog & News Management</h1>
    <p>Create, edit, and manage blog posts and news articles.</p>
  </motion.div>
);

const ContactManagement = () => (
  <motion.div 
    className="management-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h1>Contact Inquiries</h1>
    <p>View and respond to contact form submissions and inquiries.</p>
  </motion.div>
);

const CareersManagement = () => (
  <motion.div 
    className="management-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h1>Career Applications</h1>
    <p>Manage job postings and career applications.</p>
  </motion.div>
);

const PartnersManagement = () => (
  <motion.div 
    className="management-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h1>Partners Management</h1>
    <p>Manage partnership applications and partner information.</p>
  </motion.div>
);

const AnalyticsManagement = () => (
  <motion.div 
    className="management-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h1>Analytics & Reports</h1>
    <p>View website analytics, donation reports, and performance metrics.</p>
  </motion.div>
);

const SettingsManagement = () => (
  <motion.div 
    className="management-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h1>System Settings</h1>
    <p>Configure system settings, user permissions, and site preferences.</p>
  </motion.div>
);

export default AdminDashboard;
