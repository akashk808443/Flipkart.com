function navbar() {
  return `
    <div onclick="window.location.href='../home/index.html'">
      <img
        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png"
      />
    </div>
    <br />
    <div class="search">
      <input
        type="text"
        id="input"
        placeholder="Search for Brands products and more"
      />
      <i class="fa-solid fa-magnifying-glass" id="inputSearch"></i>
    </div>
    <br />
    <a href="../signinSignup/Login.html"
      ><button class="loginbtn">Login</button></a
    >
    <a href="" class="moretab"><p class="text">Become a Seller</p></a>
    <span>
      <a href="" class="moretab">More</a>
      <i class="fa-solid fa-angle-down" class="angledownicon"></i>
      <div class="droptab">
        <a href=""><i class="fa-solid fa-bell"></i>Notification Preference</a>
        <hr />
        <a href=""><i class="fa-solid fa-question"></i>24*7 Customer Care</a>
        <hr />
        <a href="">
          <i class="fa-sharp fa-solid fa-bolt-lightning"></i>Advertise</a
        >
        <hr />
        <a href=""><i class="fa-solid fa-download"></i>Download App</a>
        <hr />
      </div>
    </span>
    `;
}
export default navbar;
