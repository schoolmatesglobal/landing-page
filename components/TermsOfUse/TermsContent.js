import React from "react";
import { motion } from "framer-motion";
import { appearVariant } from "@/variants";

const TermsContent = () => {
  return (
    <motion.div
      variants={appearVariant}
      initial='start'
      animate='end'
      className='md:px-[50px] px-[20px] md:max-w-7xl mx-auto'
    >
      {/* row 1 */}
      <div className='mb-[20px] mt-[40px]'>
        <div className='flex space-x-[10px] pl-[0px] mt-[30px] mb-[10px]'>
          <p className='font-bold text-[18px] lg:text-[20px]'>1.</p>
          <p className='text-[18px] lg:text-[20px] font-bold  text-justify '>
            Introduction
          </p>
        </div>
        <p className='text-[16px] text-justify lg:text-[17px] mb-[10px] mt-[0px]'>
          {`These Terms and Conditions (“Terms”) govern your access to and use of the Schoolmates platform, including its website, web application, and mobile applications for teachers and parents (collectively, “Applications”). By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree to all of the Terms, you are not authorized to use the Platform.`}
        </p>
        <p className='text-[16px] text-justify lg:text-[17px] mb-[10px] mt-[0px]'>
          {`By accessing or using Schoolmates, you acknowledge that you have read, understood, and agree to be bound by these Terms.`}
        </p>
      </div>

      {/* row 2 */}
      <div className='mb-[20px]'>
        <div className='flex space-x-[10px] pl-[0px] mt-[30px] mb-[10px]'>
          <p className='font-bold text-[18px] lg:text-[20px] '>2.</p>
          <p className=' text-[18px] lg:text-[20px] font-bold  text-justify '>
            Definitions
          </p>
        </div>
        <p className='text-[16px] text-justify lg:text-[17px] mb-[10px] mt-[0px]'>
          {`We use the information we collect for the following purposes:`}
        </p>
        <div className='flex space-x-[10px] pl-[20px]'>
          <p className='font-bold'>2.1</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            <span className='font-bold'>Platform:</span> Refers to the
            Schoolmates website, web application, and mobile applications for
            teachers and parents.
          </p>
        </div>
        <div className=''>
          <div className='flex space-x-[10px] pl-[20px]'>
            <p className='font-bold'>2.2</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              <span className='font-bold'>User:</span> Refers to the Refers to
              any individual or entity authorized to access and use the
              Platform, including:
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>2.2.1</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              <span className='font-bold'>School Owner:</span> The entity
              subscribing to Schoolmates on behalf of the school.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>2.2.2</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              <span className='font-bold'>School Administrator:</span> An
              individual authorized by the School Owner to manage Schoolmates
              within the school.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>2.2.3</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              <span className='font-bold'>Teacher:</span> An individual
              authorized by the School Administrator to utilize Schoolmates to
              manage their class activities.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>2.2.4</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              <span className='font-bold'>Parent:</span> An individual
              authorized by the School Administrator to access their child’s
              information and school activities through Schoolmates.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>2.2.5</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              <span className='font-bold'>Student:</span> An individual
              authorized by the School Administrator to access specific features
              of Schoolmates for taking exams, assignments, and other learning
              activities under the supervision of Teachers and Parents.
            </p>
          </div>
        </div>
        <div className='flex space-x-[10px] pl-[20px]'>
          <p className='font-bold'>2.3</p>
          <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
            <span className='font-bold'>Content:</span> Refers to any data,
            information, or materials uploaded, submitted, or stored within the
            Platform by Users.
          </p>
        </div>
      </div>

      {/* row 3 */}
      <div className='mb-[20px]'>
        <div className='flex space-x-[10px] pl-[0px] mt-[30px] mb-[10px]'>
          <p className='font-bold text-[18px] lg:text-[20px] '>3.</p>
          <p className=' text-[18px] lg:text-[20px] font-bold  text-justify '>
            Access and Use
          </p>
        </div>

        <div className=''>
          <div className='flex space-x-[10px] pl-[20px]'>
            <p className='font-bold'>3.1</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              <span className='font-bold'>Eligibility:</span>
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>3.1.1</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              School Owners must be legally authorized representatives of the
              school.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>3.1.2</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              School Administrators, Teachers, and Parents must be at least 18
              years old.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>3.1.3</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              Students must be of an age appropriate for using the Platform
              under the direct supervision of Teachers and Parents.
            </p>
          </div>
        </div>

        <div className=''>
          <div className='flex space-x-[10px] pl-[20px]'>
            <p className='font-bold'>3.2</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              <span className='font-bold'>Account Creation:</span>
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>3.2.1</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              School Owners create an account to subscribe to Schoolmates.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>3.2.2</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              School Administrators, Teachers, and Parents are required to
              create individual accounts for access granted by the School Owner
              or Administrator.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>3.2.3</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              Users are responsible to provide accurate, current, and complete
              information when creating their accounts, and to update the
              information promptly if it changes.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>3.2.4</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              Users are responsible for maintaining the confidentiality of their
              account information and for all activities that occur under their
              accounts.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>3.2.5</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              Users are to notify their school or Schoolmates immediately of any
              unauthorized use of their account or any other breach of security.
            </p>
          </div>
        </div>

        <div className=''>
          <div className='flex space-x-[10px] pl-[20px]'>
            <p className='font-bold'>3.3</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              <span className='font-bold'>Acceptable Use:</span>
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>3.3.1</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              You agree to use the Platform in a lawful manner and in accordance
              with all applicable laws and regulations.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>3.3.2</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              You will not use the Platform for any purpose that is prohibited
              by these Terms or that is harmful to the Platform or others.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>3.3.3</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              Students must be of an age appropriate for using the Platform
              under the direct supervision of Teachers and Parents.
            </p>
          </div>
        </div>
      </div>

      {/* row 4 */}
      <div className='mb-[20px]'>
        <div className='flex space-x-[10px] pl-[0px] mt-[30px] mb-[10px]'>
          <p className='font-bold text-[18px] lg:text-[20px] '>4.</p>
          <p className=' text-[18px] lg:text-[20px] font-bold  text-justify '>
            Content
          </p>
        </div>

        <div className=''>
          <div className='flex space-x-[10px] pl-[20px]'>
            <p className='font-bold'>4.1</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              <span className='font-bold'>User Responsibility:</span>
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>4.1.1</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              Each User is solely responsible for all Content they upload,
              submit, or store within the Platform.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>4.1.2</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              Users represent and warrant that they have all necessary rights
              and permissions to use, distribute, and share such Content.
            </p>
          </div>
        </div>

        <div className=''>
          <div className='flex space-x-[10px] pl-[20px]'>
            <p className='font-bold'>4.2</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              <span className='font-bold'>Company Ownership:</span>
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>4.2.1</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              Schoolmates claims no ownership rights over your Content, but you
              grant Schoolmates a non-exclusive, royalty-free license to use,
              reproduce, modify, publish, distribute, and translate your Content
              solely for the purpose of providing and improving the Platform.
            </p>
          </div>
        </div>

        <div className=''>
          <div className=' pl-[20px]'>
            <div className='flex space-x-[10px]'>
              <p className='font-bold'>4.3</p>
              <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
                <span className='font-bold'>Prohibited Conduct:</span>
              </p>
            </div>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              You agree not to:
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>4.3.1</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              Use Schoolmates for any unlawful purpose or in any way that
              violates these Terms.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>4.3.2</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              Use Schoolmates to impersonate any person or entity, or to falsely
              state or otherwise misrepresent your affiliation with any person
              or entity.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>4.3.3</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              Interfere with or disrupt the operation of Schoolmates or the
              servers or networks used to make Schoolmates available.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>4.3.4</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              Attempt to gain unauthorized access to Schoolmates or any other
              user’s account.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>4.3.5</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              Transmit any viruses, worms, defects, Trojan horses, or any other
              items of a destructive nature through Schoolmates.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>4.3.6</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              Use any robot, spider, scraper, or other automated means to access
              Schoolmates for any purpose without our express written
              permission.
            </p>
          </div>
        </div>
      </div>

      {/* row 5 */}
      <div className='mb-[20px] mt-[40px]'>
        <div className='flex space-x-[10px] pl-[0px] mt-[30px] mb-[10px]'>
          <p className='font-bold text-[18px] lg:text-[20px]'>5.</p>
          <p className='text-[18px] lg:text-[20px] font-bold  text-justify '>
            Intellectual Property Rights
          </p>
        </div>
        <p className='text-[16px] text-justify lg:text-[17px] mb-[10px] mt-[0px]'>
          {`The Platform and all intellectual property rights associated with it, including trademarks, copyrights, and patents, are the exclusive property of Schoolmates. You are granted a non-exclusive, non-transferable license to use the Platform in accordance with these Terms. You may not modify, reproduce, distribute, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any content of Schoolmates without the prior written consent of Schoolmates.`}
        </p>
      </div>

      {/* row 6 */}
      <div className='mb-[20px]'>
        <div className='flex space-x-[10px] pl-[0px] mt-[30px] mb-[10px]'>
          <p className='font-bold text-[18px] lg:text-[20px] '>6.</p>
          <p className=' text-[18px] lg:text-[20px] font-bold  text-justify '>
            Fees and Payment
          </p>
        </div>

        <div className=''>
          <div className='flex space-x-[10px] pl-[20px]'>
            <p className='font-bold'>6.1</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              <span className='font-bold'>Subscription Fees:</span>
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>6.1.1</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              School Owners agree to pay the applicable subscription fees for
              their chosen plan.
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>6.1.2</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              Parents agree to pay any transaction related charges while paying
              school fees through our payment gateway partners.
            </p>
          </div>
        </div>

        <div className=''>
          <div className='flex space-x-[10px] pl-[20px]'>
            <p className='font-bold'>6.2</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              <span className='font-bold'>Payment Methods:</span>
            </p>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>6.2.1</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              Schoolmates offers various payment methods, which may be subject
              to additional terms and conditions.
            </p>
          </div>
        </div>

        <div className=''>
          <div className=' pl-[20px]'>
            <div className='flex space-x-[10px]'>
              <p className='font-bold'>6.3</p>
              <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
                <span className='font-bold'>Refund Policy:</span>
              </p>
            </div>
          </div>
          <div className='flex space-x-[10px] pl-[40px]'>
            <p className='font-bold'>6.3.1</p>
            <p className='text-[16px] lg:text-[17px] text-justify mb-[10px]'>
              Schoolmates offers free trial for new subscribers, however, once
              the trial elapses, Schoolmates does not offer a refund once
              subscription has been paid.
            </p>
          </div>
        </div>
      </div>

      {/* row 7 */}
      <div className='mb-[20px] mt-[40px]'>
        <div className='flex space-x-[10px] pl-[0px] mt-[30px] mb-[10px]'>
          <p className='font-bold text-[18px] lg:text-[20px]'>7.</p>
          <p className='text-[18px] lg:text-[20px] font-bold  text-justify '>
            Termination
          </p>
        </div>
        <p className='text-[16px] text-justify lg:text-[17px] mb-[10px] mt-[0px]'>
          {`Users may terminate their access by contacting Schoolmates. All provisions of these Terms which by their nature should survive termination shall survive termination.`}
        </p>
      </div>
      {/* row 8 */}
      <div className='mb-[20px] mt-[40px]'>
        <div className='flex space-x-[10px] pl-[0px] mt-[30px] mb-[10px]'>
          <p className='font-bold text-[18px] lg:text-[20px]'>8.</p>
          <p className='text-[18px] lg:text-[20px] font-bold  text-justify '>
            Limitation of Liability
          </p>
        </div>
        <p className='text-[16px] text-justify lg:text-[17px] mb-[10px] mt-[0px]'>
          {`To the fullest extent permitted by applicable law, Schoolmates shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses arising out of or in connection with your use of or inability to use Schoolmates.`}
        </p>
      </div>
      {/* row 9 */}
      <div className='mb-[60px] md:mb-[80px] mt-[40px]'>
        <div className='flex space-x-[10px] pl-[0px] mt-[30px] mb-[10px]'>
          <p className='font-bold text-[18px] lg:text-[20px]'>9.</p>
          <p className='text-[18px] lg:text-[20px] font-bold  text-justify '>
            Modifications to Terms
          </p>
        </div>
        <p className='text-[16px] text-justify lg:text-[17px] mb-[10px] mt-[0px]'>
          {`Schoolmates reserves the right to modify or update these Terms at any time, with or without prior notice.`}
        </p>
        <p className='text-[16px] text-justify lg:text-[17px] mb-[10px] mt-[0px]'>
          {`Any changes to these Terms will be effective immediately upon posting on the Schoolmates website or within the Schoolmates application.`}
        </p>
      </div>
    </motion.div>
  );
};

export default TermsContent;
