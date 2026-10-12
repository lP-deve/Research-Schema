import React from 'react';
import { 
  FaBullseye, 
  FaUsers, 
  FaChartPie, 
  FaLightbulb, 
  FaSearch, 
  FaCheckCircle 
} from 'react-icons/fa';
import './ReasearchPoster.css';

const ResearchPoster = () => {
  return (
    <div className="poster-container">
      
      <header className="poster-header">
        <span className="poster-badge">ახმეტის მუნიციპალიტეტი</span>
        <h1>მოსახლეობის სოციალური მდგომარეობის კომპლექსური კვლევა</h1>
        <p className="poster-subtitle">
          წარმომადგენლობითი შერჩევა და მუნიციპალიტეტის სოციალურ-ეკონომიკური პროფილის ანალიზი
        </p>
      </header>

     
      <div className="poster-grid">
        
        <div className="poster-card highlight-card">
          <div className="card-header">
            <FaSearch className="card-icon" />
            <h3>მთავარი იდეა</h3>
          </div>
          <p>
            მუნიციპალიტეტში მცხოვრები ოჯახებისგან/ადამიანებისგან წარმომადგენლობითი შერჩევის საფუძველზე მონაცემთა შეგროვება და მიღებული მონაცემებით მთელ მუნიციპალიტეტზე დასკვნების გაკეთება.
          </p>
        </div>

        <div className="poster-card">
          <div className="card-header">
            <FaBullseye className="card-icon" />
            <h3>1. კვლევის მიზანი</h3>
          </div>
          <p className="purpose-text">
            მოსახლეობის სოციალურ-ეკონომიკური მდგომარეობის, დასაქმების, 
            შემოსავლების, სოციალური დახმარების საჭიროების, განათლების, 
            ჯანდაცვის ხელმისაწვდომობისა და მიგრაციული ტენდენციების შეფასება.
          </p>
          <div className="key-takeaway">
            <strong>ძირითადი ამოცანა:</strong> გავიგოთ, როგორ ცხოვრობს მოსახლეობა 
            და რა არის მათი მთავარი სოციალური პრობლემები.
          </div>
        </div>

       
        <div className="poster-card">
          <div className="card-header">
            <FaUsers className="card-icon" />
            <h3>2. კვლევის ერთეული</h3>
          </div>
          <div className="unit-box">
            <span className="unit-title">ოჯახი / შინამეურნეობა</span>
            <p>
              ყველაზე პრაქტიკული და ეფექტური ერთეული სოციალურ-ეკონომიკური 
              საჭიროებების შესასწავლად.
            </p>
          </div>
        </div>

      
        <div className="poster-card">
          <div className="card-header">
            <FaChartPie className="card-icon" />
            <h3>3. მეთოდოლოგია & შერჩევა</h3>
          </div>
          <ul className="poster-list">
            <li>
              <FaCheckCircle className="check-icon" />
              <span><strong>რაოდენობრივი გამოკითხვა:</strong> პირისპირ პირდაპირი ინტერვიუები.</span>
            </li>
            <li>
              <FaCheckCircle className="check-icon" />
              <span><strong>წარმომადგენლობითი შერჩევა:</strong> სოფლებისა და ქალაქის პროპორციული გადანაწილება.</span>
            </li>
          </ul>
        </div>

        
        <div className="poster-card full-width-card">
          <div className="card-header">
            <FaLightbulb className="card-icon" />
            <h3>4. სავარაუდო შედეგები & სარგებელი</h3>
          </div>
          <div className="outcomes-grid">
            <div className="outcome-item">
              <h4>ზუსტი მონაცემთა ბაზა</h4>
              <p>რეალური სურათი მოსახლეობის შემოსავლებზე, დასაქმებასა და საჭიროებებზე.</p>
            </div>
            <div className="outcome-item">
              <h4>სტრატეგიული დაგეგმვა</h4>
              <p>მუნიციპალური ბიუჯეტისა და სოციალური პროგრამების ეფექტური დაგეგმვა</p>
            </div>
            <div className="outcome-item">
              <h4>დონორების მოზიდვა</h4>
              <p>კვლევაზე დაყრდნობილი პროექტების წარდგენა საერთაშორისო ორგანიზაციებთან.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResearchPoster;