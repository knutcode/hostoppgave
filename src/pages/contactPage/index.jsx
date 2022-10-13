import React from "react";
import Flexbox from 'flexbox-react';
import * as s from "./style";

const ContactPage = () => {

	return (
		<section>
			<Flexbox flexDirection="row">
				<s.ContactLeft>
					<s.user type="text" placeholder="Name" />
					<s.user type="text" placeholder="Mail"/>
					<s.comment type="text" placeholder="Comment" />
					<br />
					<button>Submit</button>
				</s.ContactLeft>
				<s.ContactRight>
					<s.ContactInfo>
						<h1>Contact information</h1>
						<h2>+47 123 45 678</h2>
						<h2>Hjemmeaddressen 15B, Bergen</h2>
					</s.ContactInfo>
					<s.ContactLink>
						<h1>Find us at</h1>
						<s.link href="">Discord</s.link>
						<s.link href="">Twitter</s.link>
						<s.link href="">Linkedin</s.link>
					</s.ContactLink>
				</s.ContactRight>
			</Flexbox>
		</section>
	);
};

export default ContactPage;

