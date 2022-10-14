import React from "react";
import VENUS from "../../../../../assets/images/venus.png";
import * as s from "../../style";
import axios from "axios";
import { useState } from "react";

const Venus = () => {
	const [planetName, setPlanetName] = useState();

	const getPlanetData = () => {
		axios
			.get(`https://api.le-systeme-solaire.net/rest/bodies/terre`, (res) => {
				res.json();
			})
			.then((data) => setPlanetName(data.data.englishName));
	};
	getPlanetData();
	return (
		<>
			<s.Section id="venus">
				<s.Planet_Container>
					<s.Planet>
						<s.Img src={VENUS} alt="venus" />

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
							<s.Api_Link>Temperature</s.Api_Link>
							<s.Api_Link>Distance(Earth)</s.Api_Link>
							<s.Api_Link>Mass</s.Api_Link>
						</s.Api_Links>
						<s.Planet_Name>{planetName}</s.Planet_Name>
						<s.Info_Headline>Venus doesn't have any moons, and we aren't sure why.</s.Info_Headline>
						<s.Info_Text>
							<p>
								Both Mercury and Venus have no moons, which can be considered a surprise given there are dozens of other ones
								around the Solar System.
							</p>
							<p>Saturn has over 60, for example.</p>
							<p>
								And some moons are little more than captured asteroids, which may have been what happened with Mars' two
								moons, for example.
							</p>
							<br />
							<p>So what makes these planets different?</p>
							<p>
								No one is really sure why Venus doesn't, but there is at least one stream of research that suggests it could
								have had one in the past.
							</p>
						</s.Info_Text>
						<s.Info_Container_Underline />
					</s.Info_Container_Div>
				</s.Info_Container>
			</s.Section>
		</>
	);
};

export default Venus;
