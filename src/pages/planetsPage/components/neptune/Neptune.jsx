import React from "react";
import NEPTUNE from "../../../../assets/images/neptune.png";
import * as s from "../../style";

const Neptune = () => {
	return (
		<>
			<s.Section id="neptune">
				<s.Planet_Container>
					<s.Planet>
						<s.Img src={NEPTUNE} alt="neptune" />

						<s.Api_Info>Api Info</s.Api_Info>
						<s.Angled_Line />
					</s.Planet>
					<a href="https://www.freepik.com/free-vector/sun-moon-mercury-venus-earth-mars-jupiter-saturn-uranus-neptun-colorful-planets-set_13768792.htm#query=planets&position=23&from_view=keyword">
						Image by <span>macrovector</span>
					</a>
				</s.Planet_Container>

				<s.Info_Container>
					<div style={{ maxWidth: "50rem" }}>
						<s.Api_Links>
							<s.Api_Link>api 1</s.Api_Link>
							<s.Api_Link>api 2</s.Api_Link>
							<s.Api_Link>api 3</s.Api_Link>
						</s.Api_Links>
						<s.Planet_Name>NEPTUNE</s.Planet_Name>
						<s.Info_Headline>Neptune has supersonic winds. </s.Info_Headline>
						<s.Info_Text>
							While on Earth we are concerned about hurricanes, the strength of these
							storms is nowhere near what you would find on Neptune. At its highest
							altitudes, according to NASA, winds blow at more than 1,100 miles per
							hour (1,770 kilometers per hour). To put that in context, that's faster
							than the speed of sound on Earth, at sea level. Why Neptune is so
							blustery is a mystery, especially considering the Sun's heat is so
							little at its distance.
						</s.Info_Text>
						<s.Info_Container_Underline />
					</div>
				</s.Info_Container>
			</s.Section>
		</>
	);
};

export default Neptune;
