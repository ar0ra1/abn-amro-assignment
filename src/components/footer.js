import React, { memo } from "react";

const FooterComponent = () => {
  return (
    <div className="flex px-10 py-5 text-white shadow-md justify-evenly bg-abn-green">
      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer nofollow"
        data-testid="footer-github"
      >
        Github
      </a>
      <p data-testid="footer-author">by Akash Arora</p>
    </div>
  );
};

export const Footer = memo(FooterComponent);
