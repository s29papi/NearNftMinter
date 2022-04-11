import React  from 'react';
import  { Alert, Form, Button, Stack }  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {logout} from "../../utility/utils.js";
const BN = require("bn.js");

function SectionTwo() {
  // after submitting the form, we want to show Notification
  const [showNotification, setShowNotification] = React.useState(false);
  return (
    <div style={{display: "grid"}}>
        <Alert className='w-75 mx-auto p-3 mt-0 h-75 d-inline-block mb-1' variant="secondary">
            <Alert.Heading className="p-3">NFTMinter{<Notification />}</Alert.Heading>
              <Form onSubmit={async event => {  event.preventDefault(); 
                                              const { fieldset, ipfsValue } = event.target.elements;

                                              // hold onto new user-entered value from React's SynthenticEvent for use after `await` call
                                              const newipfsValue = ipfsValue.value
                                              // disable the form while the value gets updated on-chain
                                              fieldset.disabled = true
                                                try {
                                                            // make an update call to the smart contract
                                                            await window.contract.nft_mint({
                                                            // pass the value that the user entered in the greeting field
                                                                    token_id: `${window.accountId}--your-new-token`,
                                                                    receiver_id: "heednft.testnet",
                                                                    metadata: {
                                                                      "title": `${window.accountId}--new-NFT`,
                                                                      "description": "You minted an NFT using heeds Minter",
                                                                      "media": newipfsValue,
                                                                      "copies": 1,
                                                                    },
                                                                 },
                                                           300000000000000,
                                                           new BN("1000000000000000000000000")
                                                          )
                                                            
                                                          
                                                      } catch (e) {
                                                        alert(
                                                          'Something went wrong! ' +
                                                          'Maybe you need to sign out and back in? ' +
                                                          'Check your browser console for more info.'
                                                        )
                                                        throw e
                                                      } finally {
                                                        // re-enable the form, whether the call succeeded or failed
                                                        fieldset.disabled = false;
                                                      }

                                                      // show Notification
                                                      setShowNotification(true);

                                }}>
                  <fieldset id="fieldset">
                            <Stack className="justify-content-md-center mx-auto w-75 h-25" direction="horizontal" gap={3}> 
                                <Form.Control id="ipfsValue" className="me-auto w-100" placeholder="Paste the IPFS content hash address you received..." />
                                <Button className="me-auto w-25" variant="success" value="submit" type="submit">Mint</Button>
                            </Stack>
                    </fieldset>
              </Form>
        </Alert>
        <Button className="me-auto mx-auto w-25 h-50 mt-0" onClick={logout} variant="success">Sign Out</Button>
    </div>
  );
}

function Notification() {

  return (
   <>
    &nbsp; (Check your wallet, when done to verify you successfully minted your nft). 
  </>  
  )
}

export default SectionTwo;
