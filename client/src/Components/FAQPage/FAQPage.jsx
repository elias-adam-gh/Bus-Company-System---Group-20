import React from 'react'
import './FAQPage.css'
import Navbar from './/../NavBar/Navbar.jsx'; 
// Should be completed by Nick

// This page should have the following:
// - Frequently asked questions
// - Questions like "How to book a ticket?", "How to cancel a ticket?" etc.
// - Answers to the questions
// - Contact information of the bus reservation system (dummy values)

// Styling for this page should be on the FAQPage.css file

const FAQPage = (props) => {
  return (
    <div>
      <Navbar />
    <div className="faq-page-container">
          <div className="faq-page-container1">
            <h1 className="faq-page-text">Frequently Asked Questions</h1>
            <span className="faq-page-text01">
              Q.  How early should I arrive before departure?
            </span>
            <span className="faq-page-text02">
              <span>
                A. We recommend arriving at least 30 minutes before the scheduled
                departure time to allow enough time for boarding and any necessary
                procedures.
              </span>
              <br></br>
              <br></br>
            </span>
            <span className="faq-page-text06">Q. How can I book a ticket?</span>
            <span>
              <span>
                A. Easily book your tickets through our user-friendly website by
                choosing your destination, travel date, and preferred time.
              </span>
              <br></br>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span className="faq-page-text12">Q. How can I cancel a ticket?</span>
            <span className="faq-page-text13">
              <span>A. Easily cancel your tickets through our website.</span>
              <br></br>
              <br></br>
            </span>
            <span className="faq-page-text17">
              Q.  What is your luggage policy?
            </span>
            <span className="faq-page-text18">
              <span>
                A. Each passenger is allowed one carry-on bag and one checked bag
                free of charge. Additional baggage may incur extra fees.
              </span>
              <br></br>
              <br></br>
            </span>
            <span className="faq-page-text22">Q.  Are pets allowed on board?</span>
            <span className="faq-page-text23">
              <span>
                A. We are happy to inform you that pets are allowed on board.
              </span>
              <br></br>
              <br></br>
            </span>
            <span className="faq-page-text27">
              Q.  What are your safety measures amid COVID-19?
            </span>
            <span className="faq-page-text28">
              <span>
                A. We have implemented various safety measures in accordance with
                local health guidelines, including mandatory mask-wearing, regular
                sanitization of buses, and limited seating capacity to ensure social
                distancing.
              </span>
              <br></br>
              <br></br>
            </span>
            <span className="faq-page-text32">Q.  Are pets allowed on board?</span>
            <span className="faq-page-text33">
              <span>
                A. We are happy to inform you that pets are allowed on board.
              </span>
              <br></br>
              <br></br>
            </span>
            <span className="faq-page-text37">
              Q.  Can I get a refund if I cancel my ticket?
            </span>
            <span className="faq-page-text38">
              <span>
                A. Refund policies vary depending on the type of ticket and the
                timing of the cancellation. Please contact our customer service team
                for any questions or concerns.
              </span>
              <br></br>
              <br></br>
            </span>
            <span className="faq-page-text42">
              Q.  Do you offer Wi-Fi on your buses?
            </span>
            <span className="faq-page-text43">
              <span>
                A. Yes, we provide complimentary Wi-Fi on board our buses, allowing
                you to stay connected during your journey.
              </span>
              <br></br>
              <br></br>
            </span>
          </div>
        </div>
    </div>
  )
}

export default FAQPage