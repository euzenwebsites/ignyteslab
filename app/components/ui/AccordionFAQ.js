import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

const AccordionFAQ = () => {
  return (
<Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' pb="15px" className='font-bold text-xl text-light-blue '>
        Which software application is your company offering?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='text-gray text-lg font-light'>
    At Ignytes Digital, we excel at unlocking the full potential of advanced technology to craft bespoke solutions for your business. Our expertise extends across a spectrum of services, ranging from website development and mobile applications to strategic social media campaigns and captivating logo design. 
    We don't just deliver codes and designs; we're the architects of your digital success story.
    </AccordionPanel>
  </AccordionItem>
  
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' pb="15px" className='font-bold text-xl text-light-blue '>
        How long does it take to develop custom software?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='text-gray text-lg font-light'>
    The project's complexity and scope determine how long it will take to complete the project. After the initial inspection, our team works closely with clients to understand their requirements and deliver estimates. Timelines for more complex solutions can take many months, 
    while those for shorter initiatives can take only a few weeks.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' pb="15px" className='font-bold text-xl text-light-blue '>
        Do you provide after-sale support and maintenance for your software?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='text-gray text-lg font-light'>
    Yes, we offer thorough post-deployment support and maintenance services. Our staff takes care of updates, patches, 
    troubleshooting, and quick solutions to any new issues to guarantee your program runs properly.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' pb="15px" className='font-bold text-xl text-light-blue'>
        What security protocols do you use to safeguard data and software?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='text-gray text-lg font-light'>
    Our priority is security. To protect software and sensitive data, we use strong encryption, multi-layered authentication, frequent security audits, 
    and compliance with industry standards. This guarantees the greatest degree of protection against cyber threats.
    </AccordionPanel>
  </AccordionItem>
  
  
</Accordion>
  )
}

export default AccordionFAQ
