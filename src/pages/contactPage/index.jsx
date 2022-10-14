import React, { useEffect, useState } from "react";
import { AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import * as s from "./style";
import SubmitForm from "./Submit";

const ContactPage = () => {
	const [isDesktop, setDesktop] = useState(window.innerWidth > 1090);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 1090);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});
	return (
		<section>
			<div className="container">
				<s.ContactContainer>
					{/* Delen hvor vi lager boxen som man kan skriv inn i */}
					<s.ContactLeft>
						<s.User type="text" placeholder="Name" />
						<s.User type="email" placeholder="Mail" />
						<s.Comment placeholder="Comment" />
						<br />
						<s.SubmitBtn onClick={SubmitForm}>Submit</s.SubmitBtn>
					</s.ContactLeft>
					<s.ContactRight>
						{/* Delen hvor vi gir vår kontakt informasjon */}
						<s.ContactInfo>
							<s.Title>Contact information</s.Title>
							<s.Text>Hjemmeaddressen 15B, Bergen</s.Text>
							<s.Text>+47 123 45 678</s.Text>
						</s.ContactInfo>
						{/* Delen hvor vi gir muligheter å nå oss på */}
						<s.ContactLink>
							<s.Title>Find us at</s.Title>
							<s.LinkWrapper>
								<s.Link href="">
									{" "}
									{isDesktop ? "Discord" : ""} <BsDiscord />
								</s.Link>
								<s.Link href="">
									{" "}
									{isDesktop ? "Twitter" : ""} <AiOutlineTwitter />
								</s.Link>
								<s.Link href="">
									{" "}
									{isDesktop ? "LinkedIn" : ""} <AiOutlineLinkedin />
								</s.Link>
							</s.LinkWrapper>
						</s.ContactLink>
					</s.ContactRight>
				</s.ContactContainer>
			</div>
		</section>
	);
};

export default ContactPage;
