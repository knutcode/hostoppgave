import React, { useEffect, useState } from "react";
import { AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import * as s from "./contactPageFiles/style";
import SubmitForm from "./contactPageFiles/Submit";

const ContactPage = () => {
	const [isDesktop, setDesktop] = useState(window.innerWidth > 1090);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 600);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});
	return (
		<section>
			<div className="container">
				<s.Container>
					{/* Delen hvor vi lager boxen som man kan skriv inn i */}
					<s.Form_Container>
						<s.Name_Email type="text" placeholder="Name" />
						<s.Name_Email type="email" placeholder="Mail" />
						<s.Comment placeholder="Comment" />
						<br />
						<s.Submit_Btn onClick={SubmitForm}>Submit</s.Submit_Btn>
					</s.Form_Container>

					<s.Contact_Container>
						{/* Delen hvor vi gir vår kontakt informasjon */}
						<s.Contact_Info>
							<s.Title>Contact information</s.Title>
							<s.Text>
								Hjemmeaddressen 15B, Bergen
								<br />
								+47 123 45 678
							</s.Text>
						</s.Contact_Info>

						{/* Delen hvor vi gir muligheter å nå oss på */}
						<div>
							<s.Title>Find us at</s.Title>
							<s.Socials_Container>
								<s.Socials href="">
									{isDesktop ? "Discord" : ""} <BsDiscord className="icon" />
								</s.Socials>
								<s.Socials href="">
									{isDesktop ? "Twitter" : ""}
									<AiOutlineTwitter className="icon" />
								</s.Socials>
								<s.Socials href="">
									{isDesktop ? "LinkedIn" : ""}
									<AiOutlineLinkedin className="icon" />
								</s.Socials>
							</s.Socials_Container>
						</div>
					</s.Contact_Container>
				</s.Container>
			</div>
		</section>
	);
};

export default ContactPage;
