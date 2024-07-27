import React from "react";
import { motion } from "framer-motion";
import { appearVariant } from "@/variants";

const PrivacyContent = () => {
  return (
    <motion.div
      variants={appearVariant}
      initial='start'
      animate='end'
      className='md:px-[50px] px-[20px] md:max-w-7xl mx-auto'
    >
      <p className='text-[16px] text-justify lg:text-[17px] mb-[20px] mt-[40px]'>
        {`Schoolmates is committed to protecting the privacy of our users (“Users”) in accordance with the NDPR and GDPR regulations. This Privacy Policy (“Policy”) explains how we collect, use, and disclose information in connection with the Schoolmates platform, including its website, web application, and mobile applications for teachers and parents (collectively, “Applications”).`}
      </p>

      {/* row 1 */}
      <div className='mb-[20px]'>
        <div className='flex space-x-[10px] pl-[0px] mt-[30px] mb-[10px]'>
          <p className='font-bold text-[18px] lg:text-[20px]'>1.</p>
          <p className='text-[18px] lg:text-[20px] font-bold  text-justify '>
            Information We Collect
          </p>
        </div>
        <p className='text-[16px] text-justify lg:text-[17px] mb-[10px] mt-[0px]'>
          {`We collect the following types of information from Users:`}
        </p>
        <div className='flex space-x-[10px] pl-[20px]'>
          {/* <div className=''>
              <RxDotFilled className='text-[20px] text-black' />
                        </div> */}
          <p className='font-bold'>1.1</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            School Information: School name, address, contact information, and
            other relevant details provided by the School Owner during the
            subscription process.
          </p>
        </div>
        <div className='flex space-x-[10px] pl-[20px]'>
          <p className='font-bold'>1.2</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            User Information: Name, email address, phone number, and other
            information provided by Users during account creation or as
            authorized by the School Owner/Administrator.
          </p>
        </div>
        <div className='flex space-x-[10px] pl-[20px]'>
          <p className='font-bold'>1.3</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            Student Information: Name, identification number, grade level, and
            other information provided by the School Owner/Administrator with.
            This information may also include academic performance data,
            attendance records, and disciplinary reports, as authorized by the
            school.
          </p>
        </div>
        <div className='flex space-x-[10px] pl-[20px]'>
          <p className='font-bold'>1.3</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            Usage Data: Information about how Users interact with the Platform,
            such as IP address, device information, browsing activity, and
            access times.
          </p>
        </div>
      </div>

      {/* row 2 */}
      <div className='mb-[20px]'>
        <div className='flex space-x-[10px] pl-[0px] mt-[30px] mb-[10px]'>
          <p className='font-bold text-[18px] lg:text-[20px] '>2.</p>
          <p className=' text-[18px] lg:text-[20px] font-bold  text-justify '>
            How We Use Your Information
          </p>
        </div>
        <p className='text-[16px] text-justify lg:text-[17px] mb-[10px] mt-[0px]'>
          {`We use the information we collect for the following purposes:`}
        </p>
        <div className='flex space-x-[10px] pl-[20px]'>
          {/* <div className=''>
              <RxDotFilled className='text-[20px] text-black' />
                        </div> */}
          <p className='font-bold'>2.1</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            To provide and maintain the Platform and its features.
          </p>
        </div>
        <div className='flex space-x-[10px] pl-[20px]'>
          <p className='font-bold'>2.2</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            To communicate with Users regarding their accounts, subscriptions,
            and platform updates.
          </p>
        </div>
        <div className='flex space-x-[10px] pl-[20px]'>
          <p className='font-bold'>1.3</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            Student Information: Name, identification number, grade level, and
            other information provided by the School Owner/Administrator with.
            This information may also include academic performance data,
            attendance records, and disciplinary reports, as authorized by the
            school.
          </p>
        </div>
        <div className='flex space-x-[10px] pl-[20px]'>
          <p className='font-bold'>2.3</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            To personalize the user experience and content based on user
            preferences and activity.
          </p>
        </div>
        <div className='flex space-x-[10px] pl-[20px]'>
          <p className='font-bold'>2.4</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            To fulfill requests from School Owners/Administrators, such as
            providing student reports or facilitating communication between
            parents and teachers.
          </p>
        </div>
        <div className='flex space-x-[10px] pl-[20px]'>
          <p className='font-bold'>2.5</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            To improve the Platform and develop new features and services.
          </p>
        </div>
        <div className='flex space-x-[10px] pl-[20px]'>
          <p className='font-bold'>2.6</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            To comply with legal and regulatory requirements.
          </p>
        </div>
      </div>

      {/* row 3 */}
      <div className='mb-[20px]'>
        <div className='flex space-x-[10px] pl-[0px] mt-[30px] mb-[10px]'>
          <p className='font-bold text-[18px] lg:text-[20px]'>3.</p>
          <p className=' font-bold text-[18px] lg:text-[20px] text-justify '>
            Sharing Your Information
          </p>
        </div>
        <p className='text-[16px] text-justify lg:text-[17px] mb-[10px] mt-[0px]'>
          {`We share your information with the following entities:`}
        </p>
        <div className='flex space-x-[10px] pl-[20px]'>
          {/* <div className=''>
              <RxDotFilled className='text-[20px] text-black' />
                        </div> */}
          <p className='font-bold'>3.1</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            <span className='font-bold'>School Owners/Administrators:</span> We
            share User information, including student information, with School
            Owners/Administrators who have authorized access to manage the
            Platform for their schools.
          </p>
        </div>
        <div className='flex space-x-[10px] pl-[20px]'>
          {/* <div className=''>
              <RxDotFilled className='text-[20px] text-black' />
                        </div> */}
          <p className='font-bold'>3.1</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            <span className='font-bold'>Service Providers:</span> We may share
            your information with third-party service providers who help us
            operate and maintain the Platform, such as data storage providers or
            communication platforms. These service providers are contractually
            obligated to keep your information confidential and secure.
          </p>
        </div>
      </div>

      {/* row 4 */}
      <div className='mb-[20px]'>
        <div className='flex space-x-[10px] pl-[0px] mt-[30px] mb-[10px]'>
          <p className='font-bold text-[18px] lg:text-[20px]'>4.</p>
          <p className=' font-bold text-[18px] lg:text-[20px] text-justify '>
            Data Retention
          </p>
        </div>
        <p className='text-[16px] text-justify lg:text-[17px] mb-[10px] mt-[0px]'>
          {`We retain your information for as long as necessary to fulfill the purposes described in this Policy, unless a longer retention period is required or permitted by law.`}
        </p>
      </div>

      {/* row 5 */}
      <div className='mb-[20px]'>
        <div className='flex space-x-[10px] pl-[0px] mt-[30px] mb-[10px]'>
          <p className='font-bold text-[18px] lg:text-[20px]'>5.</p>
          <p className='text-[18px] lg:text-[20px] font-bold  text-justify '>
            Your Choices and Rights
          </p>
        </div>
        <p className='text-[16px] text-justify lg:text-[17px] mb-[10px] mt-[0px]'>
          {`You have certain choices and rights regarding your information:`}
        </p>
        <div className='flex space-x-[10px] pl-[20px]'>
          {/* <div className=''>
              <RxDotFilled className='text-[20px] text-black' />
                        </div> */}
          <p className='font-bold'>5.1</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            <span className='font-bold'>Access:</span> You may request access to
            your personal information by contacting Schoolmates.
          </p>
        </div>
        <div className='flex space-x-[10px] pl-[20px]'>
          <p className='font-bold'>5.2</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            <span className='font-bold'>Correction:</span> You may request to
            correct inaccurate or incomplete personal information.
          </p>
        </div>
        <div className='flex space-x-[10px] pl-[20px]'>
          <p className='font-bold'>5.3</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            <span className='font-bold'>Deletion:</span> You may request to
            delete your personal information, subject to certain exceptions.
          </p>
        </div>
        <div className='flex space-x-[10px] pl-[20px]'>
          <p className='font-bold'>5.4</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            <span className='font-bold'>Withdrawal of Consent:</span> You may
            withdraw your consent to our processing of your personal information
            at any time.
          </p>
        </div>
      </div>

      {/* row 6 */}
      <div className='mb-[20px]'>
        <div className='flex space-x-[10px] pl-[0px] mt-[30px] mb-[10px]'>
          <p className='font-bold text-[18px] lg:text-[20px]'>6.</p>
          <p className=' font-bold text-[18px] lg:text-[20px] text-justify '>
            Security
          </p>
        </div>
        <p className='text-[16px] text-justify lg:text-[17px] mb-[10px] mt-[0px]'>
          {`We take appropriate technical and organizational measures to protect your information against unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage is completely secure, so we cannot guarantee the absolute security of your information.`}
        </p>
      </div>

      {/* row 7 */}
      <div className='mb-[20px]'>
        <div className='flex space-x-[10px] pl-[0px] mt-[30px] mb-[10px]'>
          <p className='font-bold text-[18px] lg:text-[20px]'>7.</p>
          <p className=' font-bold text-[18px] lg:text-[20px] text-justify '>
            Children's Privacy
          </p>
        </div>
        <p className='text-[16px] text-justify lg:text-[17px] mb-[10px] mt-[0px]'>
          {`The Platform is used for school management and may collect personal information of children under the age of 13 as part of its functionality through the School Administrators/Owners. We are committed to protecting the privacy of all users, including children as required by applicable laws and regulations.`}
        </p>
      </div>

      {/* row 8 */}
      <div className='mb-[20px]'>
        <div className='flex space-x-[10px] pl-[0px] mt-[30px] mb-[10px]'>
          <p className='font-bold text-[18px] lg:text-[20px]'>8.</p>
          <p className=' font-bold text-[18px] lg:text-[20px] text-justify '>
            Changes to this Policy
          </p>
        </div>
        <p className='text-[16px] text-justify lg:text-[17px] mb-[10px] mt-[0px]'>
          {`We may update this Policy from time to time. We will notify you of any changes by posting the new Policy on the Platform and may send you an email notification (if you have provided us with your email address).`}
        </p>
      </div>

      {/* row 9 */}
      <div className='mb-[60px] md:mb-[80px]'>
        <div className='flex space-x-[10px] pl-[0px] mt-[30px] mb-[10px]'>
          <p className='font-bold text-[18px] lg:text-[20px]'>9.</p>
          <p className=' font-bold text-[18px] lg:text-[20px] text-justify '>
            Contact Us
          </p>
        </div>
        <p className='text-[16px] text-justify lg:text-[17px] mb-[10px] mt-[0px]'>
          {`If you have any questions about this Policy, please contact us at info@schoolmateglobal.com`}
        </p>
        <p className='text-[16px] text-justify lg:text-[17px] mb-[10px] mt-[0px]'>
          {`This Privacy Policy is incorporated into and subject to the Schoolmates Terms and Conditions. `}
        </p>
      </div>
    </motion.div>
  );
};

export default PrivacyContent;
