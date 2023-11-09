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
  let nav = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);

  // State variables for form fields
  const [bankName, setBankName] = useState('');
  const [upiID, setUpiID] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  const isSubmitDisabled = () => {
    switch (selectedTab) {
      case 0:
        return bankName.trim() === '';
      case 1:
        return upiID.trim() === '';
      case 2:
        return cardNumber.trim() === '' || expiryDate.trim() === '' || cvv.trim() === '';
      default:
        return true;
    }
  };

  const handlePaymentSubmit = () => {
    // Implement your payment submission logic here
    alert('Payment successfull!');
    nav('/');
  };

  return (
    <>
      <div>
        <Box
          maxW="500px"
          m="auto"
          p="4"
          bgColor="white"
          borderRadius="lg"
          boxShadow="lg"
        >
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
                  <Input
                    type="text"
                    placeholder="Enter bank name"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </FormControl>
                {/* Other netbanking fields */}
              </TabPanel>
              <TabPanel>
                {/* UPI form */}
                <FormControl mb="3">
                  <FormLabel>UPI ID</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter UPI ID"
                    value={upiID}
                    onChange={(e) => setUpiID(e.target.value)}
                  />
                </FormControl>
                {/* Other UPI fields */}
              </TabPanel>
              <TabPanel>
                {/* Card form */}
                <FormControl mb="3">
                  <FormLabel>Card Number</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter card number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </FormControl>
                <FormControl mb="3">
                  <FormLabel>Card Expiry Date</FormLabel>
                  <Input
                    type="text"
                    placeholder="MM/YYYY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </FormControl>
                <FormControl mb="3">
                  <FormLabel>CVV</FormLabel>
                  <Input
                    type="text"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </FormControl>
                {/* Other card fields */}
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Button
            colorScheme="teal"
            onClick={handlePaymentSubmit}
            isDisabled={isSubmitDisabled()}
          >
            Submit Payment
          </Button>
        </Box>
      </div>
    </>
  );
};

export default Payment;
