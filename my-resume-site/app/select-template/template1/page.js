"use client";

export default function ResumeTemplate1() {
  const printResume = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto p-8 font-sans text-gray-900 grid grid-cols-2 gap-8">
      {/* Left Column - Name, School & Skills */}
      <div>
        <h1 className="text-3xl font-bold">MICHELLE FLACKS</h1>
        <p className="text-sm italic text-gray-600">VISUAL DESIGNER</p>
        
        <section className="mt-6 mb-6">
          <h2 className="text-xl font-bold border-b pb-1">SCHOOL</h2>
          <p className="mt-2 font-semibold">FASHION INSTITUTE OF TECHNOLOGY</p>
          <p className="italic">B.F.A Advertising Design<br />Minor in Psychology & Art History<br />NEW YORK, NY / AUG 2013 - MAY 2015</p>
          <p className="italic">A.A.S Communication Design<br />NEW YORK, NY / AUG 2011 - MAY 2013</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-bold border-b pb-1">SKILLS</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Proficient in Sketch</li>
            <li>Proficient in Adobe Creative Suite</li>
            <li>Proficient in Microsoft Office</li>
            <li>Identity and Brand Development</li>
            <li>Social Media Strategy</li>
            <li>Basic HTML / CSS</li>
            <li>Google Analytics Experience</li>
            <li>Photography</li>
          </ul>
        </section>
      </div>

      {/* Right Column - Work Experience */}
      <div>
        <section className="mb-6">
          <h2 className="text-xl font-bold border-b pb-1">WORK</h2>
          <div className="mt-2">
            <h3 className="font-semibold">UX/UI Designer</h3>
            <p className="italic text-gray-600">IBM iX (Formerly Resource/Ammirati) - July 2017 - Present</p>
            <ul className="list-disc list-inside mt-1 text-sm">
              <li>Designed an eCommerce desktop and mobile website...</li>
              <li>Researched Chinese UI practices...</li>
              <li>Worked closely with developers for UI/UX input...</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Art Director</h3>
            <p className="italic text-gray-600">Resource/Ammirati - May 2015 - July 2017</p>
            <ul className="list-disc list-inside mt-1 text-sm">
              <li>Designed logos and branding assets...</li>
              <li>Presented design concepts to clients...</li>
              <li>Led social media ad strategies...</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Art Direction Intern</h3>
            <p className="italic text-gray-600">Resource/Ammirati - Jan 2015 - May 2015</p>
            <ul className="list-disc list-inside mt-1 text-sm">
              <li>Assisted in RFP efforts...</li>
              <li>Brought digital best practice knowledge to the firm...</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Student Representative</h3>
            <p className="italic text-gray-600">Adobe - Sept 2013 - May 2015</p>
            <ul className="list-disc list-inside mt-1 text-sm">
              <li>Served as a brand representative for Adobe...</li>
              <li>Executed marketing strategies for Adobe Creative Cloud...</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Assistant Graphic Designer</h3>
            <p className="italic text-gray-600">Eric Sorelle Studios - May 2011 - 2014</p>
            <ul className="list-disc list-inside mt-1 text-sm">
              <li>Designed various packages, brochures, and logos...</li>
              <li>Assisted in photo shoots and finalizing layouts...</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Full-width Footer - Contact Info */}
      <div className="col-span-2 border-t pt-4 mt-6 text-left">
        <p className="text-sm">516.776.5059</p>
        <p className="text-sm">michelleflacks@gmail.com</p>
        <p className="text-sm">michelleflacks.com</p>
      </div>

      {/* Buttons for Navigation and Printing */}
      <div className="col-span-2 flex justify-between mt-6">
        <button 
          onClick={() => window.location.href = '/select-template'} 
          className="bg-gray-500 text-white py-2 px-4 rounded-lg text-sm">
          Back to Templates
        </button>
        <button 
          onClick={printResume} 
          className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm">
          Print Resume
        </button>
      </div>
    </div>
  );
}
