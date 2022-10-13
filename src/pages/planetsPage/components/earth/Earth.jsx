import React from "react";
import EARTH from "../../../../assets/images/earth.png";
import * as s from "../../style";

const Earth = () => {
	return (
		<>
			<s.Section id="earth">
				<s.Planet_Container>
					<s.Planet>
						<s.Img src={EARTH} alt="earth" />

						<s.Api_Info>Api Info</s.Api_Info>
						<s.Angled_Line />
					</s.Planet>
					<a href="https://www.freepik.com/free-vector/sun-moon-mercury-venus-earth-mars-jupiter-saturn-uranus-neptun-colorful-planets-set_13768792.htm#query=planets&position=23&from_view=keyword">
						Image by <span>macrovector</span>
					</a>
				</s.Planet_Container>

				<s.Info_Container>
					<s.Info_Container_Div>
						<s.Api_Links>
							<s.Api_Link>api 1</s.Api_Link>
							<s.Api_Link>api 2</s.Api_Link>
							<s.Api_Link>api 3</s.Api_Link>
						</s.Api_Links>
						<s.Planet_Name>EARTH</s.Planet_Name>
						<s.Info_Headline>
							You can see Earth's magnetic field at work during light shows.
						</s.Info_Headline>
						<s.Info_Text>
							<p>
								We have a magnetic field surrounding our planet that protects us
								from the blasts of radiation and particles the Sun sends our way.
							</p>
							<br />
							<p>
								Good thing, too, because such flare-ups could prove deadly to
								unprotected people; that's why NASA keeps an eye on solar activity
								for astronauts on the International Space Station, for example.
							</p>
							<br />
							<p>
								At any rate, when you see auroras shining in the sky, that's what
								happens when the particles from the Sun flow along the magnetic
								field lines and interact with Earth's upper atmosphere.
							</p>
						</s.Info_Text>
						<s.Info_Container_Underline />
					</s.Info_Container_Div>
				</s.Info_Container>
			</s.Section>
		</>
	);
};

export default Earth;
