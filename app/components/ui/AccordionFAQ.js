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
    Our specialty at Ignytes Digital is utilizing advanced technology to its fullest to create custom solutions for your company. Our services cover a wide range of areas, from developing mobile applications and websites to creating compelling logos and clever social media campaigns.
     We are the designers and coders that build your digital success story.
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
    The project&apos;s complexity and scope determine how long it will take to complete the project. After the initial inspection, our team works closely with clients to understand their requirements and deliver estimates. Timelines for more complex solutions can take many months, 
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
