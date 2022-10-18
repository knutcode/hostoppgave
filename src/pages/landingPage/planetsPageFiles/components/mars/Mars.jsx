import axios from "axios";
import React, { useState } from "react";
import MARS from "../../../../../assets/images/mars.png";
import * as style from "../../style";

const Mars = () => {
	const [active, setActive] = useState("");
	const [api, setApi] = useState("Mars");

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
	getPlanetData("mars");

	return (
		<>
			<style.Section id="mars">
				<style.Planet_Container>
					<style.Planet>
						<style.Img src={MARS} alt="mars" />

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
								className={active === "gravity" ? "active" : ""}
								onClick={() => {
									setApi(gravity.toFixed(1) + " m/s²");
									setActive("gravity");
								}}
							>
								Gravity
							</style.Api_Link>
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
						<style.Info_Headline>Mars had a thicker atmosphere in the past.</style.Info_Headline>
						<style.Info_Text>
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
						</style.Info_Text>
						<style.Info_Container_Underline />
					</style.Info_Container_Div>
				</style.Info_Container>
			</style.Section>
		</>
	);
};

export default Mars;
