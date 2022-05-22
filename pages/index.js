import React, { useEffect, useState } from 'react';
import { PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import HeadComponent from '../components/Head';
import Product from '../components/Product';
import CreateProduct from '../components/CreateProduct';

// Constants
const TWITTER_HANDLE = '_FWDBUILDS';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  // This will fetch the users' public key (wallet address) from any wallet we support
  const { publicKey } = useWallet();
  const isOwner = ( publicKey ? publicKey.toString() === process.env.NEXT_PUBLIC_OWNER_PUBLIC_KEY : false );
  const [creating, setCreating] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (publicKey) {
      fetch(`/api/fetchProducts`)
        .then(response => response.json())
        .then(data => {
          setProducts(data);
          console.log("Products", data);
        });
    }
  }, [publicKey]);

  const renderNotConnectedContainer = () => (
    <div>
      <img src="https://img.freepik.com/free-vector/cute-alien-flying-with-spaceship-ufo-cartoon-science-technology-icon-concept-isolated-flat-cartoon-style_138676-2203.jpg?t=st=1653161148~exp=1653161748~hmac=4e4b5d1fdb03b324f17805d2bb6f4aa234ccb63ccd035b46ceb306c62c5eb916&w=1380" alt="emoji" width="400px" />
      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" autoConnect />
      </div>    
    </div>
  );

  const renderItemBuyContainer = () => (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );

  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header"> 👽 Alien Life Pirate Store 👽 </p>
          <p className="sub-text">The only alien pirate store on SolanaPay!</p>
          {isOwner && (
            <button className="create-product-button" onClick={() => setCreating(!creating)}>
              {creating ? "Close" : "Create Product"}
            </button>
          )}
        </header>

        <main>
          {/* Item Creation Feature */}
          {creating && <CreateProduct />}
          {/* We only render the connect button if public key doesn't exist */}
          {publicKey ? renderItemBuyContainer() : renderNotConnectedContainer()}
        </main>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
