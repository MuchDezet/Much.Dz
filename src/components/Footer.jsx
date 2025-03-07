import { FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--text-secondary)] py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright Section */}
        <div className="text-sm font-[var(--font-secondary)] mb-4 md:mb-0">
          © {new Date().getFullYear()} Muchamad Dzaki. All rights reserved.
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/muchdzf?igsh=MW8zZGU3YjJrbXJkaQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-hover)] transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@muchraf1727?_t=ZS-8uNNfZPzMdr&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-hover)] transition-colors duration-300"
            aria-label="TikTok"
          >
            <FaTiktok size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-hover)] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;