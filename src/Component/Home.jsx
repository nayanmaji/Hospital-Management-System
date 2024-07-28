import ContactUs from "./ContactUs";

export default function Home() {
  return (
    <>
      <div className="">
        <img
          src="src\assets\What-is-Healthcare-Management-Definition-Roles-Careers-1.png"
          alt="Healthcare"
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 border-gray-300 border text-center text-lg subpixel-antialiased font-normal text-gray-600 tracking-widest">
        <a href="/patient" className=" py-3.5">
          For Patient
        </a>
        <a href="/doctor" className="border-gray-300 border-x py-3.5">
          For Doctor
        </a>
        <a href="/admin" className=" py-3.5">
          For Admin
        </a>
      </div>
      <div className="my-6 text-slate-800 px-20 sm:px-52 lg:px-52">
        <p className="text-xl font-bold">
          Book your doctor appointment at My HealthCare today!
        </p>
        <p className="font-normal text-lg my-3">
          <span className="text-[#007bff]">My HealthCare </span> — A name you
          can trust for all your healthcare needs.
        </p>
        <p className="font-normal text-lg my-2">
          My HealthCare is the Best Maternity & Children’s hospital in India. We
          are equipped with experts and experienced specialists that put
          compassion and care at the forefront of their focus. Book online
          appointments with the{" "}
          <span className="text-[#007bff]">best doctors at My HealthCare</span>
        </p>
        <div className="font-normal text-lg text-justify">
          <p className="font-medium text-xl py-5">You are assured of:</p>
          <li className="text-lg font-medium py-3">Best-in-class services</li>
          <p className="font-normal text-lg pl-5">
            My HealthCare prides itself on a whole host of services. The
            hospital is equipped with all the advanced medical solutions and
            infrastructure including level 3 NICU, neonatal transport services,
            labour, delivery and recovery room (LDR), rooms and suites,
            laboratory with 24/7 access for all, and operation theatre with all
            the latest medical technology,
            <span className="text-[#007bff]"> 24/7 pharmacy,</span> , blood bank
            and ultrasound.My HealthCare also extend their services to the
            comfort of your home with their{" "}
            <span className="text-[#007bff]"> home services </span> including–{" "}
            <span className="text-[#007bff]">video consultations</span>, home
            vaccinations, flu vaccinations and SafeConnect through which mothers
            and children are just a call away from the best care. You can safely
            book a My HealthCare Hospital appointment for yourself or for
            friends and family, whenever needed.
          </p>
          <li className="text-lg font-medium py-3">Multispecialty doctors</li>
          <p className="font-normal text-lg pl-5">
            From expert paediatricians to gynaecologists and surgeons, you will
            find all of the best professional doctors here with years of
            experience in handling complex medical cases. There are doctors for{" "}
            <span className="text-[#007bff]"> pregnancy care</span>,
            gynaecology, fertility, general surgery, radiology, nutrition, fetal
            medicine, neonatology, paediatrics, internal medicine, cosmetology
            and physiotherapy.
          </p>
          <li className="text-lg font-medium py-3">24 hour service</li>
          <p className="font-normal text-lg pl-5">
            We understand how important it is to have access to medicines at any
            time of the day. Be it late nights or the earliest of mornings, our
            pharmacy is open 24/7. You can easily book a doctor’s appointment at
            My HealthCare.
          </p>
        </div>
      </div>
      <ContactUs />
    </>
  );
}
