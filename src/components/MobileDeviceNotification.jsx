import { useState, useEffect } from 'react';
import { FaDesktop, FaMobileAlt, FaCopy } from 'react-icons/fa';

const MobileDeviceNotification = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const checkMobileDevice = () => {
      // Deteksi mobile dengan metode yang lebih komprehensif
      const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isNarrowScreen = window.innerWidth <= 768;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      console.log('Mobile Detection Debug:', {
        userAgent: navigator.userAgent,
        isMobileUserAgent,
        windowWidth: window.innerWidth,
        isNarrowScreen,
        isTouchDevice
      });

      const hasMobileAccess = localStorage.getItem('mobileAccess') === 'true';
      
      // Kondisi untuk menampilkan notifikasi
      const shouldShowNotification = 
        (isMobileUserAgent || isNarrowScreen || isTouchDevice) && 
        !hasMobileAccess;

      console.log('Should Show Notification:', shouldShowNotification);

      if (shouldShowNotification) {
        setShowNotification(true);
      }
    };

    // Jalankan pemeriksaan saat komponen dimuat
    checkMobileDevice();

    // Tambahkan event listener untuk menangani perubahan ukuran layar
    window.addEventListener('resize', checkMobileDevice);

    // Bersihkan event listener saat komponen dibongkar
    return () => {
      window.removeEventListener('resize', checkMobileDevice);
    };
  }, []);

  const handleContinueMobile = () => {
    console.log('Continue Mobile clicked');
    localStorage.setItem('mobileAccess', 'true');
    setShowNotification(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('Tautan telah disalin. Buka di desktop Anda!');
    }).catch(err => {
      console.error('Gagal menyalin tautan:', err);
      alert('Gagal menyalin tautan. Silakan coba manual.');
    });
  };

  // Log notification state
  useEffect(() => {
    console.log('Current Notification State:', showNotification);
  }, [showNotification]);

  if (!showNotification) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4">
      <div className="bg-[#101010] text-[#c0c0c0] rounded-lg border border-[#c0c0c0]/20 max-w-md w-full p-6 space-y-4 shadow-2xl">
        <div className="flex items-center space-x-3">
          <FaDesktop className="text-2xl text-[#c0c0c0]" />
          <h2 className="text-xl font-bold">Gunakan Desktop untuk Pengalaman Terbaik</h2>
        </div>
        
        <p className="text-[#c0c0c0]/80">
          Situs web ini dirancang untuk pengalaman desktop optimal. Kami menyarankan beralih ke komputer untuk fitur lengkap.
        </p>
        
        <div className="flex flex-col space-y-3">
          <button 
            onClick={handleContinueMobile} 
            className="w-full py-3 bg-[#c0c0c0] text-[#101010] 
                       rounded-md hover:bg-[#c0c0c0]/90 
                       transition-colors duration-300 
                       font-semibold flex items-center justify-center space-x-2"
          >
            <FaMobileAlt />
            <span>Lanjutkan di Perangkat Mobile</span>
          </button>
          
          <button 
            onClick={handleCopyLink}
            className="w-full py-3 border border-[#c0c0c0]/30 
                       text-[#c0c0c0] rounded-md 
                       hover:bg-[#c0c0c0]/10 
                       transition-colors duration-300
                       flex items-center justify-center space-x-2"
          >
            <FaCopy />
            <span>Salin Tautan Desktop</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileDeviceNotification;