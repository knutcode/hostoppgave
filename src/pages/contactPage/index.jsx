import React from "react";
import Flexbox from 'flexbox-react';
import * as s from "./style";
import { AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import {BsDiscord} from 'react-icons/bs'
import SubmitForm from "./Submit";

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
					<s.SubmitBTN onClick={SubmitForm}>Submit</s.SubmitBTN>
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
						<s.Link href=""> <BsDiscord /> </s.Link>
						<s.Link href=""> <AiOutlineTwitter /> </s.Link>
						<s.Link href=""> <AiOutlineLinkedin /> </s.Link>
					</s.ContactLink>
				</s.ContactRight>
			</Flexbox>
		</section>
	);
};

export default ContactPage;

