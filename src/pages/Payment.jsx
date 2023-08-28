
import React, { useState } from 'react';
import {
    Box,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Button,
    Input,
    FormControl,
    FormLabel,
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';

const Payment = () => {
let nav=useNavigate();
    const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  const handlePaymentSubmit = () => {
    // Implement your payment submission logic here
    alert('Payment submitted!');
    nav("/");
  };
  return (
    <>
    <div>
      <Box maxW="500px" m="auto" p="4" bgColor="white" borderRadius="lg" boxShadow="lg">
        <Tabs index={selectedTab} onChange={handleTabChange} mt="50px" colorScheme="teal">
          <TabList mb="4">
            <Tab>Netbanking</Tab>
            <Tab>UPI</Tab>
            <Tab>Card</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {/* Netbanking form */}
              <FormControl mb="3">
                <FormLabel>Bank Name</FormLabel>
                <Input type="text" placeholder="Enter bank name" />
              </FormControl>
              {/* Other netbanking fields */}
            </TabPanel>
            <TabPanel>
              {/* UPI form */}
              <FormControl mb="3">
                <FormLabel>UPI ID</FormLabel>
                <Input type="text" placeholder="Enter UPI ID" />
              </FormControl>
              {/* Other UPI fields */}
            </TabPanel>
            <TabPanel>
              {/* Card form */}
              <FormControl mb="3">
                <FormLabel>Card Number</FormLabel>
                <Input type="text" placeholder="Enter card number" />
              </FormControl>
              <FormControl mb="3">
                <FormLabel>Card Expiry Date</FormLabel>
                <Input type="text" placeholder="MM/YYYY" />
              </FormControl>
              <FormControl mb="3">
                <FormLabel>CVV</FormLabel>
                <Input type="text" placeholder="CVV" />
              </FormControl>
              {/* Other card fields */}
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Button colorScheme="teal" onClick={handlePaymentSubmit}>
          Submit Payment
        </Button>
      </Box>
    </div>
    </>
  )
}

export default Payment