import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <img src="src\assets\My HEALTHCARE.png" alt="" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">About Us</h2>
              <p className="text-sm text-gray-400">
                My HealthCare is a leading healthcare provider with a dedicated
                team of professionals committed to providing high-quality
                medical services.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <ul className="text-sm text-gray-400">
                <li className="mb-2">
                  <a href="/doctor" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/clinicalexcellence" className="hover:underline">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/alldoctors" className="hover:underline">
                    Doctors
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/bookapt" className="hover:underline">
                    Make an Appointment
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
              <ul className="text-sm text-gray-400">
                <li className="mb-2">
                  <span>Phone: </span>
                  <a href="tel:+1234567890" className="hover:underline">
                    +123 456 7890
                  </a>
                </li>
                <li className="mb-2">
                  <span>Email: </span>
                  <a
                    href="mailto:info@healthworldhospitals.com"
                    className="hover:underline"
                  >
                    info@healthworldhospitals.com
                  </a>
                </li>
                <li className="mb-2">
                  <span>Address: </span>
                  <span>123 Health St, Qwertyuiop City, HWXX 12345</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
              <div className="flex space-x-4  text-2xl">
                <a
                  href="https://www.facebook.com/nayan.maji.501"
                  className="text-gray-400 hover:text-white"
                >
                  <FontAwesomeIcon icon="fa-brands fa-facebook" />
                </a>
                <a
                  href="https://x.com/Nayanmaji2001"
                  className="text-gray-400 hover:text-white"
                >
                  <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nayan-maji-06046822b/"
                  className="text-gray-400 hover:text-white"
                >
                  <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 mt-8">
            © 2024 My HealthCare. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
