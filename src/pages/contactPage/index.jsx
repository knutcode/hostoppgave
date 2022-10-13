import React from "react";
import Flexbox from 'flexbox-react';
import * as s from "./style";

const ContactPage = () => {

	return (
		<section>
			<Flexbox flexDirection="row">
				{/* Delen hvor vi lager boxen som man kan skriv inn i */}
				<s.ContactLeft>
					<s.User type="text" placeholder="Name" />		
					<s.User type="email" placeholder="Mail"/>
					<s.Comment placeholder="Comment" />
					<br />
					<button>Submit</button>
				</s.ContactLeft>
				<s.ContactRight>
				{/* Delen hvor vi gir vår kontakt informasjon */}
					<s.ContactInfo>
						<s.Titel>Contact information</s.Titel>
						<s.Text>+47 123 45 678</s.Text>
						<s.Text>Hjemmeaddressen 15B, Bergen</s.Text>
					</s.ContactInfo>
				{/* Delen hvor vi gir muligheter å nå oss på */}
					<s.ContactLink>
						<s.Titel>Find us at</s.Titel>
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

