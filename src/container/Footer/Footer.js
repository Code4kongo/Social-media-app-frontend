import React, { Component } from 'react'
import CopyIcon2 from '../../images/copy-icon2.png'
import Logo2 from '../../images/logo2.png'

export class Footer extends Component {
    render() {
        return (
            <footer>
			    <div className="footy-sec mn no-margin">
				    <div className="container">
					    <ul>
                            <li><a href="/about" title="">About Page</a></li>
                            <li><a href="/privacy-policy" title="">Privacy Policy</a></li>
                            <li><a href="/community-guide-line" title="">Community Guidelines</a></li>
                            <li><a href="/about" title="">Language</a></li>
                            <li><a href="/" title="">Copyright Policy</a></li>
					    </ul>
					    <p><img src={CopyIcon2} alt=""/>Copyright 2020 code4kongo</p>
					    <img className="fl-rgt" src={Logo2} alt=""/>
				    </div>
			    </div>
		    </footer>
        )
    }
}

export default Footer
