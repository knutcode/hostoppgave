import axios from "axios";
import React, { useState } from "react";
import URANUS from "../../../../../assets/images/uranus.png";
import * as style from "../../style";

const Uranus = () => {
	const [active, setActive] = useState("");
	const [api, setApi] = useState("Uranus");

	const [planetName, setPlanetName] = useState();
	const [avgTemp, setAvgTemp] = useState();
	const [gravity, setGravity] = useState();
	const [density, setDensity] = useState();

	const getPlanetData = (planet) => {
		axios
			.get(`https://api.le-systeme-solaire.net/rest/bodies/` + planet, (res) => {
				res.json();
			})
			.then((data) => {
				setPlanetName(data.data.englishName);
				setAvgTemp(data.data.avgTemp);
				setGravity(data.data.gravity);
				setDensity(data.data.density);
			});
	};
	getPlanetData("uranus");

	return (
		<>
			<style.Section id="uranus">
				<style.Planet_Container>
					<style.Planet>
						<style.Img src={URANUS} alt="uranus" />

						<style.Api_Info_Absolute>{api}</style.Api_Info_Absolute>
						<style.Angled_Line />
					</style.Planet>
					<p>
						Image by &nbsp;
						<a href="https://www.freepik.com/free-vector/sun-moon-mercury-venus-earth-mars-jupiter-saturn-uranus-neptun-colorful-planets-set_13768792.htm#query=planets&position=23&from_view=keyword">
							macrovector
						</a>
					</p>
				</style.Planet_Container>

				<style.Info_Container>
					<style.Info_Container_Div>
						<style.Api_Links>
							<style.Api_Link
								className={active === "temp" ? "active" : ""}
								onClick={() => {
									setApi((avgTemp - 273.15).toFixed(1) + " °C");
									setActive("temp");
								}}
							>
								Avg.Temp.
							</style.Api_Link>
							<style.Api_Link
								className={active === "gravity" ? "active" : ""}
								onClick={() => {
									setApi(gravity.toFixed(1) + " m/s²");
									setActive("gravity");
								}}
							>
								Gravity
							</style.Api_Link>
							<style.Api_Link
								className={active === "density" ? "active" : ""}
								onClick={() => {
									setApi(density.toFixed(2) + " g/cm³");
									setActive("density");
								}}
							>
								Density
							</style.Api_Link>
						</style.Api_Links>
						<style.Planet_Name>{planetName}</style.Planet_Name>
						<style.Info_Headline>
							Uranus is more stormy than we thought.
						</style.Info_Headline>
						<style.Info_Text>
							<p>
								When Voyager 2 flew by the planet in the 1980s, scientists saw a
								mostly featureless blue ball and some assumed there wasn't much
								activity going on on Uranus.
							</p>
							<p>
								We've had a better look at the data since then that does show some
								interesting movement in the southern hemisphere.
							</p>
							<p>
								Additionally, the planet drew closer to the Sun in 2007, and in more
								recent years telescope probing has shown some storms going on.
							</p>
							<br />
							<p>
								What is causing all this activity is difficult to say unless we were
								to send another probe that way.
							</p>
							<p>
								And unfortunately, there are no missions yet that are slated for
								sure to zoom out to that part of the Solar System.
							</p>
						</style.Info_Text>
						<style.Info_Container_Underline />
					</style.Info_Container_Div>
				</style.Info_Container>
			</style.Section>
		</>
	);
};

export default Uranus;
