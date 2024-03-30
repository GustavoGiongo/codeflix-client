import React from 'react';
import { getAppSettings } from '../lib/settings';

async function Settings() {
  const { theme, language } = await getAppSettings();

  return (
    <div className='text-2xl font-bold'>
      <h1>Theme: {theme}</h1>
      <h1>language: {language}</h1>
    </div>
  );
}

export default Settings;
