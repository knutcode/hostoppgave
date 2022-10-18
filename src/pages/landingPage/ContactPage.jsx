import React, { useEffect, useState } from "react";
import { AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import * as style from "./contactPageFiles/style";
import SubmitForm from "./contactPageFiles/Submit";

const ContactPage = () => {
	const [isDesktop, setDesktop] = useState("");

	const updateMedia = () => {
		setDesktop(window.innerWidth > 600);
	};

	useEffect(() => {
		updateMedia();
	}, []);

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});

	return (
		<section>
			<div className="container">
				<style.Container>
					{/* Delen hvor vi lager boxen som man kan skriv inn i */}
					<style.Form_Container onSubmit={SubmitForm}>
						<style.Name_Email type="text" placeholder="Name" required />
						<style.Name_Email type="email" placeholder="Mail" required />
						<style.Comment placeholder="Comment" required />
						<br />
						<style.Submit_Btn type="submit">Submit</style.Submit_Btn>
					</style.Form_Container>

					<style.Contact_Container>
						{/* Delen hvor vi gir vår kontakt informasjon */}
						<style.Contact_Info>
							<style.Title>Contact information</style.Title>
							<style.Text>
								Hjemmeaddressen 15B, Bergen
								<br />
								+47 123 45 678
							</style.Text>
						</style.Contact_Info>

						{/* Delen hvor vi gir muligheter å nå oss på */}
						<div>
							<style.Title>Find us at</style.Title>
							<style.Socials_Container>
								<style.Socials href="">
									{isDesktop ? "Discord" : ""} <BsDiscord className="icon" />
								</style.Socials>
								<style.Socials href="">
									{isDesktop ? "Twitter" : ""}
									<AiOutlineTwitter className="icon" />
								</style.Socials>
								<style.Socials href="">
									{isDesktop ? "LinkedIn" : ""}
									<AiOutlineLinkedin className="icon" />
								</style.Socials>
							</style.Socials_Container>
						</div>
					</style.Contact_Container>
				</style.Container>
			</div>
		</section>
	);
};

export default ContactPage;
