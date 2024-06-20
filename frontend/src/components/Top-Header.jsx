import './Top-Header.css';

function TopHeader() {
  return (
    <>
      <div className="head-top">
            <div className="mobile_no">
                <i className="fa-sharp fa-solid fa-phone-volume"></i>
                <small>Helpline No +91- 9875768879 +91 8976785698 +91 9800986767</small>
            </div>
            <div className="email">
                <i className="fa-regular fa-envelope"></i> 
                <small>hr@techpile.in || techpile@gmail.com</small>
            </div>
            <div className="social-icon">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-whatsapp"></i>
            </div>
        </div>
    </>
  )
}

export default TopHeader;
