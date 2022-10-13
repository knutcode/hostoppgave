import React from "react";
import VENUS from "../../../../assets/images/venus.png";
import * as s from "../../style";

const Venus = () => {
	return (
		<>
			<s.Section id="venus">
				<s.Planet_Container>
					<s.Planet>
						<s.Img src={VENUS} alt="venus" />

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
						<s.Planet_Name>VENUS</s.Planet_Name>
						<s.Info_Headline>
							Venus doesn't have any moons, and we aren't sure why.
						</s.Info_Headline>
						<s.Info_Text>
							Both Mercury and Venus have no moons, which can be considered a surprise
							given there are dozens of other ones around the Solar System. Saturn has
							over 60, for example. And some moons are little more than captured
							asteroids, which may have been what happened with Mars' two moons, for
							example. So what makes these planets different? No one is really sure
							why Venus doesn't, but there is at least one stream of research that
							suggests it could have had one in the past.
						</s.Info_Text>
						<s.Info_Container_Underline />
					</div>
				</s.Info_Container>
			</s.Section>
		</>
	);
};

export default Venus;
