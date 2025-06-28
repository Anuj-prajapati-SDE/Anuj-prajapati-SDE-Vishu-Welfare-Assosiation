import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaSearch, FaFilter, FaDownload, FaEye, FaEdit, 
  FaCheckCircle, FaTimesCircle, FaMoneyBillWave,
  FaCalendarAlt, FaSortAmountDown, FaSortAmountUp,
  FaFileInvoiceDollar, FaPrint, FaEnvelope
} from 'react-icons/fa';
import './DonationsManagement.css';

const DonationsManagement = () => {
  const [donations, setDonations] = useState([]);
  const [filteredDonations, setFilteredDonations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCampaign, setFilterCampaign] = useState('all');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // Mock data - replace with actual API calls
  useEffect(() => {
    const mockDonations = [
      {
        id: 'DON-2024-001',
        donorName: 'Rajesh Kumar',
        email: 'rajesh.kumar@email.com',
        phone: '+91 9876543210',
        amount: 5000,
        campaign: 'education',
        paymentId: 'pay_XXXXXXXXXXXXXXX',
        orderId: 'order_YYYYYYYYYYY',
        status: 'completed',
        paymentMethod: 'card',
        paymentDate: '2024-01-15T10:30:00Z',
        address: 'New Delhi, India',
        isAnonymous: false,
        taxReceipt: true,
        message: 'Happy to contribute to education initiatives',
        receiptSent: true
      },
      {
        id: 'DON-2024-002',
        donorName: 'Anonymous',
        email: 'anonymous@donor.com',
        phone: '+91 9876543211',
        amount: 10000,
        campaign: 'health',
        paymentId: 'pay_XXXXXXXXXXXXXXY',
        orderId: 'order_YYYYYYYYYYY',
        status: 'completed',
        paymentMethod: 'upi',
        paymentDate: '2024-01-14T15:45:00Z',
        address: 'Mumbai, India',
        isAnonymous: true,
        taxReceipt: true,
        message: '',
        receiptSent: false
      },
      {
        id: 'DON-2024-003',
        donorName: 'Priya Sharma',
        email: 'priya.sharma@email.com',
        phone: '+91 9876543212',
        amount: 2500,
        campaign: 'plantation',
        paymentId: 'pay_XXXXXXXXXXXXXXZ',
        orderId: 'order_YYYYYYYYYYY',
        status: 'failed',
        paymentMethod: 'netbanking',
        paymentDate: '2024-01-13T09:15:00Z',
        address: 'Bangalore, India',
        isAnonymous: false,
        taxReceipt: true,
        message: 'Supporting environmental causes',
        receiptSent: false
      },
      {
        id: 'DON-2024-004',
        donorName: 'Amit Patel',
        email: 'amit.patel@email.com',
        phone: '+91 9876543213',
        amount: 15000,
        campaign: 'food',
        paymentId: 'pay_XXXXXXXXXXXXXXA',
        orderId: 'order_YYYYYYYYYYY',
        status: 'completed',
        paymentMethod: 'card',
        paymentDate: '2024-01-12T14:20:00Z',
        address: 'Ahmedabad, India',
        isAnonymous: false,
        taxReceipt: true,
        message: 'Food security is important for everyone',
        receiptSent: true
      },
      {
        id: 'DON-2024-005',
        donorName: 'Sunita Devi',
        email: 'sunita.devi@email.com',
        phone: '+91 9876543214',
        amount: 3000,
        campaign: 'education',
        paymentId: 'pay_XXXXXXXXXXXXXXB',
        orderId: 'order_YYYYYYYYYYY',
        status: 'pending',
        paymentMethod: 'upi',
        paymentDate: '2024-01-11T11:50:00Z',
        address: 'Jaipur, India',
        isAnonymous: false,
        taxReceipt: false,
        message: 'Education transforms lives',
        receiptSent: false
      }
    ];

    setTimeout(() => {
      setDonations(mockDonations);
      setFilteredDonations(mockDonations);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter and search logic
  useEffect(() => {
    let filtered = donations.filter(donation => {
      const matchesSearch = 
        donation.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donation.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donation.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donation.paymentId.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = filterStatus === 'all' || donation.status === filterStatus;
      const matchesCampaign = filterCampaign === 'all' || donation.campaign === filterCampaign;

      const donationDate = new Date(donation.paymentDate);
      const matchesDateRange = 
        (!dateRange.start || donationDate >= new Date(dateRange.start)) &&
        (!dateRange.end || donationDate <= new Date(dateRange.end));

      return matchesSearch && matchesStatus && matchesCampaign && matchesDateRange;
    });

    // Sort filtered results
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'amount':
          aValue = a.amount;
          bValue = b.amount;
          break;
        case 'donor':
          aValue = a.donorName.toLowerCase();
          bValue = b.donorName.toLowerCase();
          break;
        case 'campaign':
          aValue = a.campaign;
          bValue = b.campaign;
          break;
        case 'date':
        default:
          aValue = new Date(a.paymentDate);
          bValue = new Date(b.paymentDate);
          break;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredDonations(filtered);
    setCurrentPage(1);
  }, [donations, searchTerm, filterStatus, filterCampaign, dateRange, sortBy, sortOrder]);

  const totalPages = Math.ceil(filteredDonations.length / itemsPerPage);
  const currentDonations = filteredDonations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalAmount = filteredDonations.reduce((sum, donation) => {
    return donation.status === 'completed' ? sum + donation.amount : sum;
  }, 0);

  const campaignLabels = {
    education: 'Education & Livelihood',
    health: 'Health Awareness',
    plantation: 'Plantation',
    food: 'Food for All'
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      completed: { class: 'success', icon: FaCheckCircle, label: 'Completed' },
      pending: { class: 'warning', icon: FaTimesCircle, label: 'Pending' },
      failed: { class: 'danger', icon: FaTimesCircle, label: 'Failed' }
    };

    const config = statusConfig[status] || statusConfig.pending;
    const IconComponent = config.icon;

    return (
      <span className={`status-badge ${config.class}`}>
        <IconComponent />
        {config.label}
      </span>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  const handleViewDetails = (donation) => {
    setSelectedDonation(donation);
    setShowDetailsModal(true);
  };

  const handleSendReceipt = async (donationId) => {
    setLoading(true);
    try {
      // API call to send receipt
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setDonations(prev => prev.map(donation => 
        donation.id === donationId 
          ? { ...donation, receiptSent: true }
          : donation
      ));
    } catch (error) {
      console.error('Error sending receipt:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const headers = ['Donation ID', 'Donor Name', 'Email', 'Amount', 'Campaign', 'Status', 'Date', 'Payment Method'];
    const csvData = [
      headers,
      ...filteredDonations.map(donation => [
        donation.id,
        donation.donorName,
        donation.email,
        donation.amount,
        campaignLabels[donation.campaign],
        donation.status,
        formatDate(donation.paymentDate),
        donation.paymentMethod
      ])
    ];

    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `donations-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading donations...</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="donations-management"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="donations-header">
        <div className="header-content">
          <h1>Donations Management</h1>
          <p>Manage and track all donation records, payments, and donor information.</p>
        </div>
        <div className="header-actions">
          <button className="export-btn" onClick={exportToCSV}>
            <FaDownload />
            Export CSV
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card total">
          <div className="card-icon">
            <FaMoneyBillWave />
          </div>
          <div className="card-content">
            <h3>{formatCurrency(totalAmount)}</h3>
            <p>Total Raised</p>
          </div>
        </div>
        <div className="summary-card count">
          <div className="card-icon">
            <FaFileInvoiceDollar />
          </div>
          <div className="card-content">
            <h3>{filteredDonations.filter(d => d.status === 'completed').length}</h3>
            <p>Successful Donations</p>
          </div>
        </div>
        <div className="summary-card pending">
          <div className="card-icon">
            <FaTimesCircle />
          </div>
          <div className="card-content">
            <h3>{filteredDonations.filter(d => d.status === 'pending').length}</h3>
            <p>Pending Payments</p>
          </div>
        </div>
        <div className="summary-card failed">
          <div className="card-icon">
            <FaTimesCircle />
          </div>
          <div className="card-content">
            <h3>{filteredDonations.filter(d => d.status === 'failed').length}</h3>
            <p>Failed Payments</p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="donations-filters">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by donor name, email, or donation ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>

          <select 
            value={filterCampaign} 
            onChange={(e) => setFilterCampaign(e.target.value)}
          >
            <option value="all">All Campaigns</option>
            <option value="education">Education & Livelihood</option>
            <option value="health">Health Awareness</option>
            <option value="plantation">Plantation</option>
            <option value="food">Food for All</option>
          </select>

          <div className="date-range">
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
              placeholder="Start Date"
            />
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
              placeholder="End Date"
            />
          </div>

          <div className="sort-controls">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date">Sort by Date</option>
              <option value="amount">Sort by Amount</option>
              <option value="donor">Sort by Donor</option>
              <option value="campaign">Sort by Campaign</option>
            </select>
            
            <button 
              className={`sort-order ${sortOrder}`}
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            >
              {sortOrder === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />}
            </button>
          </div>
        </div>
      </div>

      {/* Donations Table */}
      <div className="donations-table-container">
        <table className="donations-table">
          <thead>
            <tr>
              <th>Donation ID</th>
              <th>Donor</th>
              <th>Amount</th>
              <th>Campaign</th>
              <th>Status</th>
              <th>Date</th>
              <th>Payment Method</th>
              <th>Receipt</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentDonations.map(donation => (
              <tr key={donation.id}>
                <td className="donation-id">{donation.id}</td>
                <td>
                  <div className="donor-info">
                    <div className="donor-name">
                      {donation.isAnonymous ? 'Anonymous' : donation.donorName}
                    </div>
                    <div className="donor-email">{donation.email}</div>
                  </div>
                </td>
                <td className="amount">{formatCurrency(donation.amount)}</td>
                <td>
                  <span className="campaign-badge">
                    {campaignLabels[donation.campaign]}
                  </span>
                </td>
                <td>{getStatusBadge(donation.status)}</td>
                <td className="date">{formatDate(donation.paymentDate)}</td>
                <td>
                  <span className="payment-method">
                    {donation.paymentMethod.toUpperCase()}
                  </span>
                </td>
                <td>
                  {donation.taxReceipt && (
                    <div className="receipt-status">
                      {donation.receiptSent ? (
                        <span className="receipt-sent">✓ Sent</span>
                      ) : (
                        <button 
                          className="send-receipt-btn"
                          onClick={() => handleSendReceipt(donation.id)}
                        >
                          <FaEnvelope />
                          Send
                        </button>
                      )}
                    </div>
                  )}
                </td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className="action-btn view"
                      onClick={() => handleViewDetails(donation)}
                      title="View Details"
                    >
                      <FaEye />
                    </button>
                    <button 
                      className="action-btn print"
                      onClick={() => {/* Print receipt */}}
                      title="Print Receipt"
                    >
                      <FaPrint />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          <div className="pagination-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`pagination-number ${page === currentPage ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Donation Details Modal */}
      {showDetailsModal && selectedDonation && (
        <DonationDetailsModal 
          donation={selectedDonation}
          onClose={() => {
            setShowDetailsModal(false);
            setSelectedDonation(null);
          }}
        />
      )}
    </motion.div>
  );
};

const DonationDetailsModal = ({ donation, onClose }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const campaignLabels = {
    education: 'Education & Livelihood',
    health: 'Health Awareness',
    plantation: 'Plantation',
    food: 'Food for All'
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="donation-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Donation Details</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-content">
          <div className="detail-section">
            <h3>Donation Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <label>Donation ID:</label>
                <span>{donation.id}</span>
              </div>
              <div className="detail-item">
                <label>Amount:</label>
                <span className="amount-large">{formatCurrency(donation.amount)}</span>
              </div>
              <div className="detail-item">
                <label>Campaign:</label>
                <span>{campaignLabels[donation.campaign]}</span>
              </div>
              <div className="detail-item">
                <label>Date:</label>
                <span>{formatDate(donation.paymentDate)}</span>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h3>Donor Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <label>Name:</label>
                <span>{donation.isAnonymous ? 'Anonymous Donor' : donation.donorName}</span>
              </div>
              <div className="detail-item">
                <label>Email:</label>
                <span>{donation.email}</span>
              </div>
              <div className="detail-item">
                <label>Phone:</label>
                <span>{donation.phone}</span>
              </div>
              <div className="detail-item">
                <label>Address:</label>
                <span>{donation.address}</span>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h3>Payment Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <label>Payment ID:</label>
                <span className="payment-id">{donation.paymentId}</span>
              </div>
              <div className="detail-item">
                <label>Order ID:</label>
                <span className="order-id">{donation.orderId}</span>
              </div>
              <div className="detail-item">
                <label>Payment Method:</label>
                <span className="payment-method">{donation.paymentMethod.toUpperCase()}</span>
              </div>
              <div className="detail-item">
                <label>Status:</label>
                <span className={`status ${donation.status}`}>{donation.status.toUpperCase()}</span>
              </div>
            </div>
          </div>

          {donation.message && (
            <div className="detail-section">
              <h3>Donor Message</h3>
              <div className="message-box">
                {donation.message}
              </div>
            </div>
          )}

          <div className="detail-section">
            <h3>Additional Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <label>Anonymous Donation:</label>
                <span>{donation.isAnonymous ? 'Yes' : 'No'}</span>
              </div>
              <div className="detail-item">
                <label>Tax Receipt Required:</label>
                <span>{donation.taxReceipt ? 'Yes' : 'No'}</span>
              </div>
              <div className="detail-item">
                <label>Receipt Sent:</label>
                <span>{donation.receiptSent ? 'Yes' : 'No'}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>Close</button>
          <button className="btn-primary">Print Receipt</button>
          <button className="btn-primary">Send Receipt</button>
        </div>
      </div>
    </div>
  );
};

export default DonationsManagement;
