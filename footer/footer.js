function footer() {
  return `
    <div id="row1">
      <div class="footerDiv">
        <h6>ABOUT</h6>
        <div>
          <a>Contact Us</a>
          <a>About Us</a>
          <a>Careers</a>
          <a>Flipkart Stories</a>
          <a>Press</a>
          <a>Flipkart</a>
          <a>Wholesale</a>
          <a>Corporate</a>
          <a>Information</a>
        </div>
      </div>
      <div class="footerDiv">
        <h6>HELP</h6>
        <div>
          <a>Payments</a>
          <a>Shipping</a>
          <a>Cancellation&</a>
          <a>Returns</a>
          <a>FAQ</a>
          <a>Report</a>
          <a>Infringment</a>
        </div>
      </div>
      <div class="footerDiv">
        <h6>CONSUMER POLICY</h6>
        <div>
          <a>Rturn policy</a>
          <a>Term of use</a>
          <a>Security</a>
          <a>Privacy</a>
          <a>Sitemap</a>
          <a>Grievance</a>
          <a>Redressal</a>
          <a>EPR complience</a>
        </div>
      </div>
      <div class="footerDiv">
        <h6>SOCIAL</h6>
        <div>
          <a>Facebook</a>
          <a>Twitter</a>
          <a>Youtube</a>
        </div>
      </div>
      <var id="hr"></var>
      <div class="footerDiv">
        <h6>Mail us</h6>
        <div>
          <p>Flipkart Internet Private Limited,</p>
          <p>Buildings Alyssa, Begonia &</p>
          <p>Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103,</p>
          <p>Karnataka, India</p>
        </div>
      </div>
      <div class="footerDiv">
        <h6>Registered Office Address:</h6>
        <div>
          <p>Flipkart Internet Private Limited,</p>
          <p>Buildings Alyssa, Begonia &</p>
          <p>Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103,</p>
          <p>Karnataka, India</p>
          <p>CIN : U51109KA2012PTC066107</p>
          <p>Telephone: <a href="#">044-45614700</a></p>
        </div>
      </div>
    </div>
    <hr>
    <div id="row2">
      <div>
        <span>Sell On Flipkart</span>
      </div>
      <div>
        <span>Advertise</span>
      </div>
      <div>
        <span>Gift Cards</span>
      </div>
      <div>
        <span>Help Center</span>
      </div>
      <div>
        <span>&copy; 2007-2023 Flipkart.com</span>
      </div>
      <div>
        <img
          class="img-fluid"
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_7934bc.svg"
        />
      </div>
    </div>
  `;
}

function filter() {
  return `
    <div id="filerTest">
      <div id="Filterfst">
        <h3 class="filterWr">Filter</h3>
        <button id="clearAll">Clear All</button>
      </div>
      <hr />
    </div>
    <hr />
    <div id="filtfrth">
      <h5>GENDER</h5>
      <select name="select" id="selectCat">
        <option value="">select gender</option>
        <option value="Women">Women</option>
        <option value="Men">Men</option>
        <option value="Boys">Boys</option>
        <option value="Girls">Girls</option>
        <option value="Men & Women">Men & Women</option>
      </select>
    </div>
    <hr />

    <div id="filterscnd">
      <h5>BRANDS</h5>
      <select name="select" id="select">
        <option value="">select brand</option>
        <option value="PUMA">puma</option>
        <option value="Peter England">peter England</option>
        <option value="Libas">Libas</option>
        <option value="Zara">Zara</option>
        <option value="Sabyasachi">Sabyasachi</option>
      </select>
    </div>
    <hr />
    <div id="filterrd">
      <h5>SIZE</h5>
      <select name="select" id="selectSize">
        <option value="">select size</option>
        <option value="M">M</option>
        <option value="S">S</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
    </div>
    <hr />
    <div id="filterrd">
      <h5>Discount</h5>
      <select name="select" id="selectDiscount">
        <option value="">Discount</option>
        <option value="10">10%</option>
        <option value="20">20%</option>
        <option value="40">40%</option>
        <option value="60">60%</option>
      </select>
    </div>
    <hr />
    <div id="filterrd">
      <h5>Sort</h5>
      <select name="select" id="selectPrice">
        <option value="">Sort->Price</option>
        <option value="price">LOW-TO- HIGH</option>
        <option value="price">HIGH-TO-LOW</option>
      </select>
    </div>
  `;
}
export { footer, filter };
