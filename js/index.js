//  dont touch this file!!!!!!!!!!!!
//  if you want to write js, create a js file 
class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="header">
                    <img src="../images/logo/logo1.png" alt="EDSU Logo" width="50.91px">
                    <p>Edo State <br> Univeristy Uzairue</p>
                </div>
                <nav class="navbar">
                    <ul>
                        <li><a href="./login.html">Login</a></li>
                        <li><a href="./signup.html">Sign Up</a></li>
                        <li><a href="./generate.html">Generate Room</a></li>
                        <li><a href="./congrat.html">Congrat</a></li>
                        <li><a href="./reciept.html">Reciept</a></li>
                    </ul>
                </nav>
            </header>
        `
    }
}


customElements.define('app-navbar', Navbar)