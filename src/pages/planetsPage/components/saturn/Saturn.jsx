import React from "react";
import SATURN from "../../../../assets/images/saturn.png";
import * as s from "../../style";

const Saturn = () => {
	return (
		<>
			<s.Section id="saturn">
				<s.Planet_Container>
					<s.Planet>
						<s.Img src={SATURN} alt="saturn" />

						<s.Api_Info>Api Info</s.Api_Info>
						<s.Angled_Line />
					</s.Planet>
					<a href="https://www.freepik.com/free-vector/sun-moon-mercury-venus-earth-mars-jupiter-saturn-uranus-neptun-colorful-planets-set_13768792.htm#query=planets&position=23&from_view=keyword">
						Image by <span>macrovector</span>
					</a>
				</s.Planet_Container>

				<s.Info_Container>
					<div>
						<s.Api_Links>
							<s.Api_Link>api 1</s.Api_Link>
							<s.Api_Link>api 2</s.Api_Link>
							<s.Api_Link>api 3</s.Api_Link>
						</s.Api_Links>
						<s.Planet_Name>SATURN</s.Planet_Name>
						<s.Info_Headline>No one knows how old Saturn's rings are</s.Info_Headline>
						<s.Info_Text>
							There's a field of ice and rock debris circling Saturn that from afar,
							appear as rings. Early telescope observations of the planet in the 1600s
							caused some confusion: does that planet have ears, or moons, or what?
							With better resolution, however, it soon became clear that there was a
							chain of small bodies encircling the gas giant. It's possible that a
							single moon tore apart under Saturn's strong gravity and produced the
							rings. Or, maybe they've been around (pun intended) for the last few
							billion years, unable to coalesce into a larger body but resistant
							enough to gravity not to break up.
						</s.Info_Text>
						<s.Info_Container_Underline />
					</div>
				</s.Info_Container>
			</s.Section>
		</>
	);
};

export default Saturn;
