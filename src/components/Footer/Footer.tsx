import React from 'react';
import { FooterHelp, Text, Link, VerticalStack } from '@shopify/polaris';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <FooterHelp>
      <div className="footer-container">
        <VerticalStack>
          <Text as="span" color="subdued">
            © {new Date().getFullYear()} Dan's Hats. All rights reserved.
          </Text>
          <div className="links">
            <Link url="/privacy-policy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link url="/terms-of-service">Terms of Service</Link>
          </div>
        </VerticalStack>
      </div>
    </FooterHelp>
  );
};

export default Footer;
