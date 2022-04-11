
import  { Alert}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SectionOne () {
  return (
  <Alert className='w-75 mx-auto p-3 mt-5 h-50 d-inline-block mb-0' variant="secondary">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, I guess you are hear to mint an NFT, welcome. First things first you
            would need to upload your image to IPFS. You can quickly do this by creating an account
            with <a href="https://nft.storage/#getting-started" target="_blank" rel="noopener noreferrer">nft.storage </a>
            and following the instructions presented on the website. The purpose of this is to retrieve a cryptographic 
            hash of the media you upload, with it no one can dispute the content the hash is refering too. You would be needing 
            this hash to mint your nft, go on, I am waiting.
          </p>
  </Alert>  
  );
}

export default SectionOne;