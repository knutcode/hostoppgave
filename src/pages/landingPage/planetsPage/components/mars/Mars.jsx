import React from "react";
import MARS from "../../../../../assets/images/mars.png";
import * as s from "../../style";

const Mars = () => {
	return (
		<>
			<s.Section id="mars">
				<s.Planet_Container>
					<s.Planet>
						<s.Img src={MARS} alt="mars" />

						<s.Api_Info_Absolute>Api Info</s.Api_Info_Absolute>
						<s.Angled_Line />
					</s.Planet>
					<p>
						Image by &nbsp;
						<a href="https://www.freepik.com/free-vector/sun-moon-mercury-venus-earth-mars-jupiter-saturn-uranus-neptun-colorful-planets-set_13768792.htm#query=planets&position=23&from_view=keyword">
							macrovector
						</a>
					</p>
				</s.Planet_Container>

				<s.Info_Container>
					<s.Info_Container_Div>
						<s.Api_Links>
							<s.Api_Link>api 1</s.Api_Link>
							<s.Api_Link>api 2</s.Api_Link>
							<s.Api_Link>api 3</s.Api_Link>
						</s.Api_Links>
						<s.Planet_Name>MARS</s.Planet_Name>
						<s.Info_Headline>Mars had a thicker atmosphere in the past.</s.Info_Headline>
						<s.Info_Text>
							<p>
								What a bunch of contrasts in the inner Solar System: practically atmosphere-less Mercury, a runaway hothouse
								greenhouse effect happening in Venus' thick atmosphere, temperate conditions on much of Earth and then a thin
								atmosphere on Mars.
							</p>
							<br />
							<p>But look at the planet and you can see gullies carved in the past from probable water.</p>
							<p>Water requires more atmosphere, so Mars had more in the past.</p>
							<br />
							<p>
								Where did it go? Some scientists believe it's because the Sun's energy pushed the lighter molecules out of
								Mars' atmosphere over millions of years, decreasing the thickness over time.
							</p>
						</s.Info_Text>
						<s.Info_Container_Underline />
					</s.Info_Container_Div>
				</s.Info_Container>
			</s.Section>
		</>
	);
};

export default Mars;
