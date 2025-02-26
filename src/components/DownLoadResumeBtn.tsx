"use client";

import React from 'react';
import { Download } from 'lucide-react';
import HackerBtn from './animation/HackerBtn';

function DownLoadResumeBtn() {
  const handleDownload = () => {
    window.open(
      'https://drive.google.com/file/d/1idcN2l35raHGvRXK1WEFFyXbHMUhEQqz/view?usp=drive_link',
      '_blank'
    );
  };

  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <HackerBtn label="Download Resume" onClick={handleDownload} />
    </div>
  );
}

export default DownLoadResumeBtn;
