import React from "react";
import MERCURY from "../../../../assets/images/mercury.png";
import * as s from "../../style";

const Mercury = () => {
	return (
		<>
			<s.Section id="mercury">
				<s.Planet_Container>
					<s.Planet>
						<s.Img src={MERCURY} alt="mercury" />

						<s.Api_Info>Api Info</s.Api_Info>
						<s.Angled_Line />
					</s.Planet>
				</s.Planet_Container>

				<s.Info_Container>
					<div>
						<s.Api_Links>
							<s.Api_Link>api 1</s.Api_Link>
							<s.Api_Link>api 2</s.Api_Link>
							<s.Api_Link>api 3</s.Api_Link>
						</s.Api_Links>
						<s.Planet_Name>MERCURY</s.Planet_Name>
						<s.Info_Headline>Mercury is hot, but not too hot for ice</s.Info_Headline>
						<s.Info_Text>
							The closest planet to the Sun does indeed have ice on its surface. That
							sounds surprising at first glance, but the ice is found in permanently
							shadowed craters — those that never receive any sunlight. It is thought
							that perhaps comets delivered this ice to Mercury in the first place. In
							fact, NASA's MESSENGER spacecraft not only found ice at the north pole,
							but it also found organics, which are the building blocks for life.
							Mercury is way too hot and airless for life as we know it, but it shows
							how these elements are distributed across the Solar System.
						</s.Info_Text>
						<s.Info_Container_Underline />
					</div>
				</s.Info_Container>
			</s.Section>
		</>
	);
};

export default Mercury;
