import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container bg-black">
      <span className="text-muted">
        &#169;
        {`${new Date().getFullYear()} `}
      </span>
      <div className="pull-right">
        <a
          href="https://github.com/blewjy/ImHungry"
          target="blank"
        >
          Github
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
