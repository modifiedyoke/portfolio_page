import React from 'react';
import Card from '../components/Card';

export default function PortfolioPage() {
  return (
    <div className="container pt-4">
      <div className="columns">
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
      </div>
    </div>
  );
}
