import React, { Component } from 'react'
import CopyIcon2 from '../images/copy-icon2.png'
import Logo2 from '../images/logo2.png'

export class Footer extends Component {
    render() {
        return (
            <footer>
			    <div class="footy-sec mn no-margin">
				    <div class="container">
					    <ul>
                            <li><a href="about.html" title="">About</a></li>
                            <li><a href="/" title="">Privacy Policy</a></li>
                            <li><a href="/" title="">Community Guidelines</a></li>
                            <li><a href="/" title="">Cookies Policy</a></li>
                            <li><a href="/" title="">Career</a></li>
                            <li><a href="/" title="">Language</a></li>
                            <li><a href="/" title="">Copyright Policy</a></li>
					    </ul>
					    <p><img src={CopyIcon2} alt=""/>Copyright 2020 code4kongo</p>
					    <img class="fl-rgt" src={Logo2} alt=""/>
				    </div>
			    </div>
		    </footer>
        )
    }
}

export default Footer
