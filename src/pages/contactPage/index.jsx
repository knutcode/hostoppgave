import React from "react";
import Flexbox from 'flexbox-react';
import * as s from "./style";

const ContactPage = () => {

	return (
		<section>
			<Flexbox flexDirection="row">
				<s.ContactLeft>
					<s.User type="text" placeholder="Name" />
					<s.User type="text" placeholder="Mail"/>
					<s.Comment type="text" placeholder="Comment" />
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
						<s.Link href="">Discord</s.Link>
						<s.Link href="">Twitter</s.Link>
						<s.Link href="">Linkedin</s.Link>
					</s.ContactLink>
				</s.ContactRight>
			</Flexbox>
		</section>
	);
};

export default ContactPage;

